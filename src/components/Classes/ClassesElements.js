import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;

  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 7fr;
  }
`;

export const Subjects = styled.div`
  padding: 10px;
  background: white;
  display: flex;
  gap: 10px;
  align-items: stretch;
  justify-content: space-around;
  background: #293E4B;
  border: 1px solid black;

  @media only screen and (min-width: 600px) {
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const Subject = styled.button`
  color: #293e4b;
  text-align: start;
  text-decoration: none;
  text-align: center;
  background: white;
  border: none;
  border-radius: 20px;
  text-align: center;
  width: 100%;
  height: 30px;
  margin: 5px auto;
  cursor: pointer;
  background: ${(props) => props.active && "#D08E45"};
  transition: background-color .25s ease;
  &:hover {
    background: #D08E45;
  }
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: 50px;
  padding: 5px 35px;
  gap: 10px;
  background: #293E4B;
  flex-direction: row;
  justify-content: space-around;
  flex: 1 1 1;
`;
export const TopButton = styled.button`
  background: white;
  border: none;
  border-radius: 20px;
  text-align: center;
  width: 100%;
  margin: 5px auto;
  cursor: pointer;
  background: ${(props) => props.active && "#D08E45"};
  transition: background-color .25s ease;
  &:hover {
    background: #D08E45;
  }
`;

export const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 100%;
  min-width: 60%;
`;

export const VideoCard = styled.div`
  width: 70vw;
  height: min-content;
  min-height: 250px;
  padding: 5px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  gap: 10px;
  background: white;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media screen and (max-width: 750px) {
    & {
      flex-direction: column;
      align-items: center;
      width: 90vw;
    }
    & > img {
      width: 100%;
    }
  }
`;

export const ContentImg = styled.img`
  width: 300px;
  max-width: 80wv;
  min-height: 1fr;
  max-height: 250px;
  left: 0;
  border-radius: 20px;
`;
export const ContentTextSection = styled.div`
  right: 0;
  height: auto;
  right: 0;
  padding: 5px;
  text-align: start;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled.p`
  color: #293e4b;
  font-size: 1.3rem;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
  /* white-space: nowrap; */
`;
export const VideoDuration = styled.p`
  color: #95b0c2;
  margin-top: auto;
`;

export const Date = styled.p`
  margin-top: auto;
  color: #d08e45;
`;
