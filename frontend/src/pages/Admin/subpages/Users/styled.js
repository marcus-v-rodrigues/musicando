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

    @media screen and (max-width: 600px) {
        width: 100%;
        padding: 1em;
    }

    @media screen and (max-width: 400px) {
        padding: 1em 0;
    }
` 
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding: 0 3em;
    max-width: 105em;

    @media screen and (max-width: 1000px) {
        flex-direction: column-reverse;
        align-items: center;
    }

    @media screen and (max-width: 600px) {
        padding: 0 1em;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
        padding: 0;
    }
`
export const Panel = styled.div`
    display: flex;
    flex-grow: 0;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    background: white;
    box-shadow: var(--shadow);

    width: 30%;
    max-height: 15em;

    @media screen and (max-width: 1000px) {
        margin-bottom: 3em;
        width: 100%;
    }
`
export const PanelTitle = styled.h4`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
`