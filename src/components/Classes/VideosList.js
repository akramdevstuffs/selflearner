import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { useRouteMatch, withRouter } from "react-router";
import { DescriptionOutlined } from "@material-ui/icons";
import pdfIcon from "../../assests/classes/pdf.png";
import live_icon from "../../assests/live-icons.svg";
import {
  ContentImg,
  ContentTextSection,
  ContentTitle,
  VideoCard,
  VideoDuration,
  Date as CardDate,
  DownloadLink,
  ContentImgContainer,
  ContentImgIcon,
} from "./ClassesElements";

export const VideosList = withRouter(
  ({ history, match, subject, type, playlist_id }) => {
    const { path, url } = useRouteMatch();
    const [videosList, setVideosList] = useState([]);
    useEffect(() => {
      axios
        .get(
          `/api/courses/${match.params.courseId}/${playlist_id}/getAll?subject=${subject}&type=${type}`
        )
        .then((resp) => {
          setVideosList(resp.data);
        });
      //eslint-disable-next-line
    }, [subject, type, playlist_id]);
    return (
      <>
        {videosList.map((video) => (
          <VideoCard
            key={video.id}
            onClick={(e) =>
              (video.media_type === "hls" ||
                video.media_type === "youtube" ||
                video.media_type === "video" ||
                video.is_livestream) &&
              history.push(`/play/${video.id}`)
            }
          >
            <ContentImgContainer>
              <ContentImg
                src={video.media_type === "pdf" ? pdfIcon : video.image}
              />
              {video.is_livestream && <ContentImgIcon src={live_icon} alt="" />}
            </ContentImgContainer>
            <ContentTextSection>
              <ContentTitle>{video.name}</ContentTitle>
              {(type === "videos" ||
                video.media_type === "youtube" ||
                video.media_type === "hls") && (
                <VideoDuration>{video.duration}</VideoDuration>
              )}
              <CardDate>{new Date(video.created_at).toDateString()}</CardDate>
            </ContentTextSection>
            {type === "notes" && (
              <DownloadLink
                children="Download"
                onClick={(e) => (window.location = video.url)}
              />
            )}
          </VideoCard>
        ))}
      </>
    );
  }
);
