import React from "react";
import Banner from "../components/Banner";
import Feeds from "../components/Feeds";
import CoursesCrousel from "../components/Home/CoursesCrousel";

const Home = () => {
  return (
    <>
      <Banner />
      {/* <Feeds /> */}
      <CoursesCrousel/>
    </>
  );
};

export default Home;
