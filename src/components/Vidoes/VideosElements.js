import ReactPlayer from "react-player";
import styled from "styled-components";
import send_icon from "../../assests/icons8-send-64.png";

export const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  align-items: center;
  @media only screen and (min-width: 600px) {
    & {
      flex-direction: row;
      height: 100%;
      align-items: unset;
      align-content: unset;
    }
  }
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  height: 70vh;
  justify-content: stretch;

  @media only screen and (max-width: 600px) {
    & {
      width: 100%;
      height: 100%;
    }
  }
`;
export const ChatCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 10px;
  gap: 10px;
  height: 50vh;
`;

export const SendChatContainer = styled.form`
  margin-top: auto;
  display: flex;

  @media only screen and (min-width: 600px) {
      margin-top: auto;
  }
`;

export const ChatInput = styled.input`
  padding: 10px;
  border: 0.2px solid black;
  align-self: stretch;
  justify-content: stretch;
  width: 75%;
  margin-right: auto;
`;

export const ChatSend = styled.button`
  height: 100%;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: none;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  margin-left: auto;
  background: url(${send_icon});
  background-size: cover;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:disabled {
    background-image: none;
  }
`;

export const ChatCard = styled.div`
  padding: 5px 5px;
  background-color: #293e4b;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  margin: 0;
`;
export const Chat = styled.p`
  font-size: 1rem;
  margin: 0;
  color: white;
`;
export const ChatInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ChatUsername = styled.p``;
export const ChatTime = styled.p`
  margin-left: auto;
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
