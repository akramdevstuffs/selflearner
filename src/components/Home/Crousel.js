import React from 'react'
import Slider from 'react-slick'
import { Container, HeaderText } from './CoursesCrouselElements'

const Crousel = ({ children, headerText, sliderSettings }) => {
    return (
    <Container>
      <HeaderText children={headerText} />
      <Slider {...sliderSettings}>
          { children }
      </Slider>
    </Container>
    )
}

export default Crousel
