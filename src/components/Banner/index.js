import React from "react";
import {
  ActionButton,
  HeroDescription,
  HeroText,
  HeroTitle,
  Container,
} from "./BannerElements";

const Banner = () => {
  return (
    <Container>
      <HeroText>
        <HeroTitle>Get all courses for free</HeroTitle>
        <HeroDescription>
          Get all courses free for IIT JEE and neet from PhysicsWallah, Kota,
          Unacademy.<br/>
          Start Using it today.
        </HeroDescription>
        <ActionButton to="/courses">Explorer Courses</ActionButton>
      </HeroText>
    </Container>
  );
};

export default Banner;
