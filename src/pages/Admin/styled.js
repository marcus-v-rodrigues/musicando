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

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 105em;
    width: 90%;
	padding: 3em;
	background: white;
    box-shadow: var(--shadow);

    @media screen and (max-width: 600px) {
        width: 25em;
        padding: 1em;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
        padding: 1em 0;
    }
` 