import styled from "styled-components";
import AsteriskLogo from '../../assests/courses/asterisk-solid.svg';

export  const List = styled.div`
    display: grid;
    width: 75vw;
    margin: 10px auto;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
    grid-auto-rows: minmax(300px, auto);

    @media only screen and (max-width: 1024px) {
        & {
            grid-template-columns: repeat(3, 1fr);
            width: 80vw;
        }
    }
    @media only screen and (max-width: 800px) {
        & {
            grid-template-columns: repeat(2, 1fr);
            width: 85vw;
        }
    }
    @media only screen and (max-width: 600px) {
        & {
            grid-template-columns: repeat(1, 1fr);
            width: 95vw;
        }
    }
`

export const Card = styled.div`
    background: white;
    border-radius: 12px 12px 0 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
`

export const Img = styled.img`
    width: 100%;
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 12px 12px 0 0;
`

export const TextContainer = styled.ul`
    padding-left: 15px;
    margin-left: 15px;
    list-style: circle inside url(${AsteriskLogo});
`

export const Title = styled.li`
    font-size: 32px;
    color: #293E4B;

`
export const Date = styled.li`
    margin-top: 16px;
    color: #D08E45;
    font-size: 1rem;
    list-style-image: none;
`