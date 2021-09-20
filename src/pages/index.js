import React, { useCallback, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Banner from "../components/Banner";
import axios from "../utils/axios";
import CoursesCrousel from "../components/Home/CoursesCrousel";
import { Container } from "../components/Home/HomeElements";
import VideosCrousel from "../components/Home/VideosCrousel";
import useVideoSearch from "../hooks/useVideoSearch";
import {
  ContentImg,
  ContentTextSection,
  ContentTitle,
  VideoCard,
  ContentImgContainer,
  Date as CardDate,
  ContentImgIcon,
} from "../components/Classes/ClassesElements";
import live_icon from "../assests/live-icons.svg";
import { BarLoader } from "react-spinners";

const Home = ({ history }) => {
  const [recommends, setRecommends] = useState({
    courses: [],
    videos: [],
    notes: [],
  });
  const [pageNumber, setPageNumber] = useState(1);
  const { videos, hasMore, loading, error } = useVideoSearch(pageNumber);

  const observer = useRef();
  const lastVideoElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    fetchRecommendations().then((data) => setRecommends(data));
  }, []);
  return (
    <Container>
      <Banner />
      {/* <Feeds /> */}
      <CoursesCrousel data={recommends["courses"]} />
      <VideosCrousel data={recommends["videos"]} />

      <>
        {videos.map((video, index) => {
          if (videos.length === index + 1) {
            return (
              <VideoCard
                key={video.id}
                ref={lastVideoElementRef}
                onClick={(e) => history.push(`/play/${video.id}`)}
              >
                <ContentImgContainer>
                  <ContentImg src={video.image} />
                  {video.is_livestream && (
                    <ContentImgIcon src={live_icon} alt="" />
                  )}
                </ContentImgContainer>
                <ContentTextSection>
                  <ContentTitle>{video.name}</ContentTitle>
                  <CardDate>
                    {new Date(video.created_at).toDateString()}
                  </CardDate>
                </ContentTextSection>
              </VideoCard>
            );
          } else {
            return (
              <VideoCard
                key={video.id}
                onClick={(e) => history.push(`/play/${video.id}`)}
              >
                <ContentImgContainer>
                  <ContentImg src={video.image} />
                  {video.is_livestream && (
                    <ContentImgIcon src={live_icon} alt="" />
                  )}
                </ContentImgContainer>
                <ContentTextSection>
                  <ContentTitle>{video.name}</ContentTitle>
                  <CardDate>
                    {new Date(video.created_at).toDateString()}
                  </CardDate>
                </ContentTextSection>
              </VideoCard>
            );
          }
        })}
        <BarLoader color="blue" loading={loading} />
      </>
    </Container>
  );
};

const fetchRecommendations = async () => {
  const response = await axios.get("/api/recommendations");
  return response.data;
};

export default Home;
