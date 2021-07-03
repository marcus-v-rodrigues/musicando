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
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 2em;
    max-width: 50em;
    width: 80%;
    min-width: 20em;
	padding: 3em;
	background: white;
    box-shadow: var(--shadow);

` 