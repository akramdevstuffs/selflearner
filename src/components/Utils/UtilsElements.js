import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import styled from "styled-components";

export const CarouselArrowForwardElem = styled(ArrowForwardIos)`
  color: #293e4b;
  font-size: 30px;
  padding: 30px 7px;
  transform: translateX(-25px) translateY(-50px);
  border-radius: 7px 0 0 7px;
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: white;
  &:hover {
    color: #293e4b;
    background: white;
  }
`;
export const CarouselArrowBackwardElem = styled(ArrowBackIos)`
  color: #293e4b;
  font-size: 30px;
  display: block;
  padding: 30px 7px;
  transform: translateX(25px) translateY(-50px);
  border-radius: 0 7px 7px 0;
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: white;
  &:hover {
    color: #293e4b;
    background: white;
  }
`;
