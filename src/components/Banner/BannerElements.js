import { Link } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from  '../../assests/banner/background.jpg';

export const Container = styled.div`
    width: 100wh;
    height: 60vh;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const HeroText = styled.div`
    margin: 15px;
`

export const HeroTitle = styled.p`
    font-size: 1.8rem;
    font-weight: 1000;
    color: white;
    /* text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF; */
    -webkit-text-stroke-color: black;
    -webkit-text-stroke-width: 0.7px;
`
export const HeroDescription = styled.p`
    font-size: 1.3rem;
    color: white;
    font-weight: normal;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;

`
export const ActionButton = styled(Link)`
    margin-top: 10px;
    padding: 10px;
    display: inline-block;
    color: #293E4B;
    background: #9BD1F2;
    background-size: cover;
    border: 1px solid #293E4B;
    text-decoration: none;
    transition: background-color 0.25s ease;
    &:hover {
        background: #D08E45;
    }
`