import styled from "styled-components";
import { Card } from "../Courses/CoursesElements";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

export const Container = styled.div`
  height: fit-content;
  background: white;
  margin: 10px auto;
  display: flex;
  justify-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  flex-direction: column;
  border: 0.1px solid #293e4b20;
  @media only screen and (min-width: 1024px) {
    width: 87vw;
  }
`;
export const HeaderText = styled.p`
  margin: 0;
  color: #293e4b;
  border-bottom: 0.1px solid #293e4b20;
  padding: 1rem 1.5rem;
  font-weight: bold;
  font-size: 1.5rem;
`;

export const CarouselCard = styled(Card)`
  height: 95%;
  margin: 10px 0;
  padding: 0 10px 0 10px;
`;
export const CarouselSlider = styled.div``;
export const CarouselImg = styled.img`
  padding: 0;
  margin: 0;
  height: 100%;
  width: 90%;
  object-fit: center;
  border: none;
  border-radius: 12px 12px 0 0;
`;

