import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import useLiveChat from "../../hooks/useLiveChat";
import axios from "../../utils/axios";
import {
  ChatCard,
  ChatContainer,
  ChatInfoContainer,
  ChatInput,
  ChatTime,
  ChatUsername,
  Container,
  PlayBackButton,
  PlayBackControls,
  Player,
  SendChatContainer,
  Chat,
  ChatCardContainer,
  ChatSend,
} from "./VideosElements";

const Videos = ({ match, location }) => {
  const [playbackRate, setPlaybackRate] = useState(1);
  const PlaybackList = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  const [videoData, setVideoData] = useState({});
  const [chat_input, setChatInput] = useState("");

  const socket = io.connect("/livechat", {
    extraHeaders: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  const messagesEndRef = useRef();

  const { chats, send_chat, slowdown } = useLiveChat(videoData, socket);
  useEffect(() => {
    axios
      .get(`/api/courses/content/${match.params.videoId}`)
      .then((resp) => setVideoData(resp.data));

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    send_chat(chat_input);
    setChatInput("");
  };

  return (
    <>
      <Container>
        <Player
          width="100%"
          height="70vh"
          controls
          playbackRate={playbackRate}
          url={videoData.url}
          config={{
            file: {
              hlsOptions: {
                xhrSetup: function (xhr, url) {
                  if (url.includes("api.penpencil.xyz")) {
                    url = url.replace(
                      "https://api.penpencil.xyz",
                      "/penpencil"
                    );
                    xhr.open("GET", url);
                  } else if (url.includes("api-dev.penpencil.xyz")) {
                    url = url.replace(
                      "https://api-dev.penpencil.xyz",
                      "/penpencildev"
                    );
                    xhr.open("GET", url);
                  }
                },
              },
            },
          }}
        />
        {videoData.is_livechat_enabled && (
          <ChatContainer>
            <ChatCardContainer>
              {chats.map((chat, index) => (
                <ChatCard key={index}>
                  <Chat>{chat.msg}</Chat>
                  <ChatInfoContainer>
                    <ChatUsername>{chat.username}</ChatUsername>
                    <ChatTime>{chat.time}</ChatTime>
                  </ChatInfoContainer>
                </ChatCard>
              ))}
              <div ref={messagesEndRef} />
            </ChatCardContainer>
            <SendChatContainer onSubmit={(e) => onFormSubmit(e)}>
              <ChatInput
                value={chat_input}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Chat"
              />
              <ChatSend onSubmit={onFormSubmit} disabled={slowdown && true}>
                {slowdown && msToTime(slowdown)}
              </ChatSend>
            </SendChatContainer>
          </ChatContainer>
        )}
      </Container>
      {/* <PlayBackControls>
        {PlaybackList.map((rate, index) => (
          <PlayBackButton
            children={`${rate}x`}
            key={index}
            active={playbackRate === rate && "active"}
            onClick={(e) => setPlaybackRate(rate)}
          />
        ))}
      </PlayBackControls> */}
    </>
  );
};

export default Videos;

function msToTime(ms) {
  // let seconds = (ms / 1000).toFixed(1);
  // let minutes = (ms / (1000 * 60)).toFixed(1);
  // let hours = (ms / (1000 * 60 * 60)).toFixed(1);
  // let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
  // if (seconds < 60) return seconds;
  // else if (minutes < 60) return minutes;
  // else if (hours < 24) return hours + " h";
  // else return days + " d"
  var minutes = Math.floor(ms / 60000);
  var seconds = ((ms % 60000) / 1000).toFixed(0);
  //ES6 interpolated literals/template literals
  //If seconds is less than 10 put a zero in front.
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
