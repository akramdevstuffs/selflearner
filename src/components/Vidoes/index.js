import React, { useEffect, useState } from "react";
import { Container, PlayBackButton, PlayBackControls, Player } from "./VideosElements";

const Videos = ({ match, location }) => {
  const [playbackRate, setPlaybackRate] = useState(1);
  const PlaybackList = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  const [videoData, setVideoData] = useState({});
  useEffect(() => {

    const params = new URLSearchParams(location.search);
    const isLivestream = params.get("livestream");
    if (isLivestream==="true"){
      fetch(`/api/courses/live/${match.params.videoId}`).then(resp=>resp.json()).then(resp=>setVideoData(resp))

    }else fetch(`/api/courses/content/${match.params.videoId}`).then(resp=>resp.ok && resp.json()).then(resp=>setVideoData(resp))
    //eslint-disable-next-line
  },[])
  return (
      <Container>
    <Player
        width="100%"
        height="70vh"
      controls
      playbackRate={playbackRate}
      url={videoData.url}
        // url="https://youtu.be/jnI2Lld4is4"
      config={{ file: { hlsOptions: { xhrSetup: function (xhr, url) { if (url.includes("api.penpencil.xyz")) { url = url.replace("https://api.penpencil.xyz", "/penpencil"); xhr.open("GET", url); } }, }, },
      }}
    />

    <PlayBackControls>
        {PlaybackList.map((rate, index)=> (
        <PlayBackButton  children={`${rate}x`} key={index} active={playbackRate===rate && "active"} onClick={e => setPlaybackRate(rate)}/>))}
    </PlayBackControls>
    </Container>

  );
};

export default Videos;
