import React, { useEffect, useState } from "react";

export default function useLiveChat(videoData, socket) {
  const [chats, setChats] = useState([]);
  const [slowdown, setSlowDown] = useState();
  const [is_slowdown, setIsSlowDown] = useState(false);

  const send_chat = (msg) => {
    if (is_slowdown || !msg || msg === "") return;
    socket.emit("chat", { msg: msg, livechat_id: videoData.id });
    console.log("Seding mesg", videoData);
    if (videoData.slowdown) {
    setSlowDown(videoData.slowdown);
    console.log("This is slowdown", videoData.slowdown)
    setIsSlowDown(true);
    }
  };

  useEffect(() => {
    let slowDownTimer = null;
    let timeellasped = slowdown;
    if (is_slowdown) {
      slowDownTimer = setInterval(() => {
        timeellasped -= 1000;
        setSlowDown(timeellasped);
        console.log("time:",timeellasped)
        if (timeellasped <= 0) {
          setIsSlowDown(false);
          clearInterval(slowDownTimer);
        }
      }, 1000);
    } else {
      setSlowDown();
      clearInterval(slowDownTimer);
    }
    return () => clearInterval(slowDownTimer);
  }, [is_slowdown]);

  useEffect(() => {
    if (!videoData) return;
    socket.on("status", (msg) => console.log("status", msg));
    socket.on("livechat", (msg) => {
      console.log("msg", msg);
      setChats((d) => [...d, msg]);
    });
    socket.on("message", (msg) => console.log("msg", msg));
    if (videoData && videoData.id) {
      socket.emit("joined", { livechat_id: videoData.id });
    }
  }, [videoData]);
  return { chats, send_chat, slowdown };
}
