//Style file

import styled from "styled-components"

export const Spotlight = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 3em 0;
    width: 100%;

    color: white;
`

export const Title = styled.p`
    align-self: center;
    text-transform: uppercase; 
    font-size: 4em;
    font-family: 'Fredoka One';
    color: black;
    margin-bottom: 1em; 

    @media screen and (max-width: 400px){
        font-size: 2em;
    }   
`   