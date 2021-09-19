import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Banner from "../components/Banner";
import Feeds from "../components/Feeds";
import axios from '../utils/axios'
import CoursesCrousel from "../components/Home/CoursesCrousel";
import { Container } from "../components/Home/HomeElements";
import VideosCrousel from "../components/Home/VideosCrousel";

const Home = () => {
  const [recommends, setRecommends] = useState({
    courses: [],
    videos: [],
    notes: [],
  });
  useEffect(() => {
    fetchRecommendations().then((data) => setRecommends(data));
  }, []);
  return (
    <Container>
      <Banner />
      {/* <Feeds /> */}
      <CoursesCrousel data={recommends["courses"]} />
      <VideosCrousel data={recommends['videos']} />
    </Container>
  );
};

const fetchRecommendations = async () => {
  const response = await axios.get("/api/recommendations");
  return response.data;
};

export default Home;
