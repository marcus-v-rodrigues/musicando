import styled from 'styled-components'

export const Title = styled.h1`
    margin: 0 0 0.5em 0;
    color: white;
    text-transform: uppercase; 
    font-size: 4em;
    font-family: 'Fredoka One';

    @media screen and (max-width: 700px) {
        font-size: 3em;
    }

    @media screen and (max-width: 450px) {
        font-size: 2em;
    }
`

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }

    @media screen and (max-width: 600px) {
        padding: 1em;
    }

    @media screen and (max-width: 400px) {
        padding: 1em 0;
    }
` 