import ReactPlayer from "react-player";
import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
`;

export const Player = styled(ReactPlayer)`
  @media only screen and (max-width: 600px) {
    & {
      width: 100%;
      max-height: 30vh;
    }
  }
`;

export const PlayBackControls = styled.div`
  height: 50px;
  width: 95vw;
  display: flex;
  padding: 10px 10px;
  margin: 12px auto;
  justify-content: center;
`;
export const PlayBackButton = styled.button`
  width: 5em;
  height: 3em;
  margin: 0 5px;
  background: ${(props) => props.active && "#D08E45"};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: none;
  border-radius: 15px;
  font-weight: bold;
  font-size: 0.9rem;

  &:hover {
    background: #d08e45;
  }
`;
