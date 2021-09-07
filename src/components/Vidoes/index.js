import React, { useState } from "react";
import { Container, PlayBackButton, PlayBackControls, Player } from "./VideosElements";

const Videos = ({ match }) => {
  const [playbackRate, setPlaybackRate] = useState(1);
  const PlaybackList = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  return (
      <Container>
    <Player
        width="100%"
        height="70vh"
      controls
      playbackRate={playbackRate}
      url="https://d1d34p8vz63oiq.cloudfront.net/be3782ed-ea9a-4a58-8e88-e8aa30cdbdfc/master.m3u8"
        // url="https://youtu.be/jnI2Lld4is4"
      config={{ file: { hlsOptions: { xhrSetup: function (xhr, url) { if (url.includes("api.penpencil.xyz")) { url = url.replace("https://api.penpencil.xyz", ""); xhr.open("GET", url); } }, }, },
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
