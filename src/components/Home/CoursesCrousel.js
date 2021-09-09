import React from "react";
import { withRouter } from "react-router";
import Slider from "react-slick";
import { TextContainer, Title } from "../Courses/CoursesElements";
import { CarouselNextArrow, CarouselPrevArrow } from "../Utils";
import {
  Container,
  HeaderText,
  CarouselCard,
  CarouselImg as Img,
} from "./CoursesCrouselElements";

const CoursesCrousel = withRouter((props) => {
  const { history } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    lazyload: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    autoplay: true,
    nextArrow: <CarouselNextArrow />,
    prevArrow: <CarouselPrevArrow />,
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
    <Container>
      <HeaderText children="Courses" />
      <Slider {...settings}>
        {props.children}
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
        <CarouselCard onClick={(e) => history.push("/courses/1")}>
          <Img src="https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/58c3266d-d6a7-41d0-90a7-bcc1e78033f3.jpeg" />
          <TextContainer>
            <Title>Arjuna JEE 2.0</Title>
          </TextContainer>
        </CarouselCard>
      </Slider>
    </Container>
  );
});

export default CoursesCrousel;
