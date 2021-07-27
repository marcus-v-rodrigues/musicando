//Style file

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import microphone from './images/microphone.jpg'

export const Title = styled.h1`
    margin: 0 0 0.5em 0;
    color: white;
    text-transform: uppercase; 
    font-size: 4rem;
    font-family: 'Fredoka One';
`

export const FormBackground = styled.div`
	position:relative;
    width:100%;
    max-width: 30em;
    min-width: 20em;
	min-height: 40em;
	
	background:url(${microphone}) no-repeat center/cover;
	box-shadow:var(--shadow);
`

export const FormWrapper = styled.form`
	position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
	height: 100%;
	padding:5.5em 4em 3em 4em;
	background:rgba(141, 104, 82,0.9);
`

export const FormGroup = styled.div`
    margin-bottom: 1rem;
`

export const Label = styled.label`
    font-size: 1.2rem;
    color: white;
`

export const Field = styled.input`
    display: block;
    width: 100%;
    height: 3rem;
    padding: 0.375rem 0.75rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #000;
    background-color: rgba(255,255,255,0.4);
    background-clip: padding-box;
    border: none;
    border-radius: 2rem;
    box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.3);
`

export const LoginWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items:center;

    width: 100%; 
    margin-top: auto;
`
export const RegisterWrapper = styled.div`
    position: relative;
    display: flex;
`

export const RegisterLink = styled(NavLink)`
    color: white;
    font-size: 1.3em;
    text-decoration: none;
    margin-bottom: 2em;
`

export const Button = styled(NavLink)`

	position: relative;
	overflow: hidden;
	align-self: center;
    justify-self: center;

    cursor: pointer;
    background: var(--dark-brown);

    padding: 0.4em;
    border: 3px solid var(--dark-brown);
    border-radius: 0.3em;

    height: 100%;
    width: fit-content;

    color: white;
    text-decoration: none;
    text-transform: uppercase; 
    font-family: 'Bebas Neue';
    font-size: 2.5em;

    transition: background 0.5s ease-in-out, border 0.5s ease-in-out;

    &:hover{
        background: transparent;
        border: 3px solid white;
    }
`