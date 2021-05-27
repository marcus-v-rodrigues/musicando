//Style file

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import background from './images/LesPaul.jpg'

export const Hero = styled.section`
    position: relative;
    display: flex;
    align-items: center;

    height: calc(100vh - var(--navbar-height));
    width: 100%;

    background-image: url(${background});
    background-size: cover;
`

export const WrapperAction = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5rem;
`

export const Title = styled.h1`
    margin: 0 0 0.2em 0;
    color: white;
    text-transform: uppercase; 
    font-size: 4rem;
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
    font-size: 3rem;

    transition: background 0.5s ease-in-out, border 0.5s ease-in-out;

    &:hover{
        background: transparent;
        border: 3px solid white;
    }
`
