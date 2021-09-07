import styled from "styled-components";

export const List = styled.div`
    display: flex;
    justify-content: center;
    max-width: 100%;
    min-width: 60%;
`

export const Card = styled.div`
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
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media screen and (max-width: 750px) {
        &{
        flex-direction: column;
            width: 100%;
            align-items: center;
        }
        & > img {
            width: 100%;
        }
    }
`

export const Img = styled.img`
    width: 300px;
    max-width: 80wv;
    min-height: 1fr;
    max-height: 250px;
    left: 0;
    border-radius: 20px;
`
export const TextSection = styled.div`
    right: 0;
    height: auto;
    right: 0;
    padding: 5px;
    text-align: start;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.p`
    color: #293E4B;
    font-size: 1.3rem;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical
    /* white-space: nowrap; */
`
export const Duration = styled.p`
    color: #95B0C2;
    margin-top: auto;
`

export const Date = styled.p`
    margin-top: auto;
    color: #D08E45;
`