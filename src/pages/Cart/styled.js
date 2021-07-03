//Style file

import styled from 'styled-components'

export const Title = styled.h1`
    margin: 0 0 0.5em 0;
    color: white;
    text-transform: uppercase; 
    font-size: 4em;
    font-family: 'Fredoka One';

    @media screen and (max-width: 400px) {
        font-size: 2em;
    }
`
export const CartContainer = styled.div`
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
export const Summary = styled.div`
    display: flex;
    flex-grow: 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: white;
    box-shadow: var(--shadow);

    width: 30%;
    max-height: 20em;

    @media screen and (max-width: 1000px) {
        margin-bottom: 3em;
        width: 100%;
    }
`
export const SummaryTitle = styled.h4`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
`
export const SummaryInfo = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
`
export const SummaryItems = styled.span`
    color: black;
    font-size: 1.2em;
    width: 100%;

`
export const SummaryTotal = styled.span`
    color: black;
    font-size: 1.5em;
    font-weight: bold;
    width: 100%;
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
