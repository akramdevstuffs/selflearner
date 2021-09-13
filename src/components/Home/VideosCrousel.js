import React from "react";
import { withRouter } from "react-router";
import { TextContainer, Title } from "../Courses/CoursesElements";
import { CarouselNextArrow, CarouselPrevArrow } from "../Utils";
import { CarouselCard, CarouselImg as Img } from "./CoursesCrouselElements";
import Crousel from "./Crousel";

const VideosCrousel = withRouter(({history, data}) => {
  const single_slider_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    lazyload: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPrevArrow />,
  };
  const settings = {
    ...single_slider_settings,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
    return (
    <Crousel headerText="Videos" sliderSettings={settings}>
      {data.map((elem) => (
        <CarouselCard
          onClick={(e) => history.push(`/courses/${elem.course_id}/play/${elem.id}`)}
          key={elem.id}
        >
          <Img src={elem.image} />
          <TextContainer>
            <Title>{elem.name}</Title>
          </TextContainer>
        </CarouselCard>
      ))}
    </Crousel>

    )
});

export default VideosCrousel
