import React, { useEffect, useState } from "react";
import { useRouteMatch, withRouter } from "react-router";
import { DescriptionOutlined } from "@material-ui/icons";
import pdfIcon from "../../assests/classes/pdf.png";
import {
  ContentImg,
  ContentTextSection,
  ContentTitle,
  VideoCard,
  VideoDuration,
  Date as CardDate,
  DownloadLink,
} from "./ClassesElements";

export const VideosList = withRouter(({ history, match, subject, type }) => {
  const { path, url } = useRouteMatch();
  const [videosList, setVideosList] = useState([]);
  useEffect(() => {
    fetch(`/api/courses/${match.params.courseId}/getAll?subject=${subject}&type=${type}`)
      .then((resp) => resp.ok && resp.json())
      .then((resp) => (setVideosList(resp)));
    //eslint-disable-next-line
  }, [subject, type]);
  return (
    <>
      {videosList.map((video) => (
        <VideoCard
          key={video.id}
          onClick={(e) => (video.media_type==="hls" || video.media_type==="video")&& history.push(`/courses/${match.params.courseId}/play/${video.id}`) }
        >
          <ContentImg src={video.media_type==="pdf" ? pdfIcon : video.image} />
          <ContentTextSection>
            <ContentTitle>{video.name}</ContentTitle>
            { (type==="videos" || video.media_type==="hls") && <VideoDuration>{video.duration}</VideoDuration> }
            <CardDate>{new Date(video.created_at).toDateString()}</CardDate>
          </ContentTextSection>
          {type==='notes'&& <DownloadLink children="Download" onClick={e => window.location=video.url} /> }
        </VideoCard>
      ))}
    </>
  );
});
