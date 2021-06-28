//Style file

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import background from './images/LesPaul.jpg'

export const Hero = styled.section`
    position: relative;
    display: flex;
    align-items: center;

    height: calc(100vh - var(--navbar-height));
    min-height: 40em;
    width: 100%;

    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;   
`

export const WrapperAction = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5em;

    @media screen and (max-width: 1000px){
            font-size: 0.6em;
    }

    @media screen and (max-width: 600px){
            font-size: 0.4em;
    }
`

export const Title = styled.h1`
    margin: 0 0 0.2em 0;
    color: white;
    text-transform: uppercase; 
    font-size: 4em;
    font-family: 'Fredoka One';
`

export const Button = styled(NavLink)`
    cursor: pointer;
    background: var(--light-brown);

    padding: 0.4em;
    border: 3px solid var(--light-brown);
    border-radius: 0.3em;

    height: 100%;
    width: fit-content;

    color: white;
    text-decoration: none;
    text-transform: uppercase; 
    font-family: 'Bebas Neue';
    font-size: 3em;

    transition: background 0.5s ease-in-out, border 0.5s ease-in-out;

    &:hover{
        background: transparent;
        border: 3px solid white;
    }
`
