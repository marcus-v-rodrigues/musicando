//Style file

import styled from "styled-components"

export const Wrapper = styled.div`
    position: relative;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;

    @media screen and (max-width: 1600px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 1200px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 800px){
        grid-template-columns: repeat(1, 1fr);
    }
`
export const Item = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2em;
`

export const ItemBackground = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    height: 20em;
    width: 20em;
    background: #ECECEC;
`

export const ItemImage = styled.div`
    background-image: url(${props => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;     

    height: 100%;
    width: 100%;
`

export const ItemName = styled.p`
    color: black;
    font-size: 1em;
    text-align: center;
    height: 3em;

`
export const ItemPrice = styled.p`
    color: black;
    font-size: 2em;
    align-self: flex-start;
`