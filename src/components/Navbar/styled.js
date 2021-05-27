//Style file

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import logo from './images/Musicando.svg'

export const Navbar = styled.nav`
    position:relative;
    z-index: 2;
    width: 100%;
    height: var(--navbar-height);
    top: 0%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 20px 40px 10px, 
                rgba(0, 0, 0, 0.2) 0px 15px 10px 15px;
    /*color | offset-x | offset-y | blur-radius | spread-radius*/
`
export const Logo = styled.a`
    position: relative;
    background-image: url(${logo});
    background-position: center; 
    background-size: contain;
    background-repeat: no-repeat;
    height: 80%;
    width: 20%;
    margin: 0 3em;
`
export const MenuWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    flex-grow: 1;
`
export const Menu = styled.a`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    flex-grow: 1;

    cursor: pointer;
    background: white;
    color: black;
    text-transform: uppercase; 

    font-family: 'Bebas Neue';
    font-size: 2rem;
    
    transition: background 0.5s ease-in-out;

    &:hover{
        background: var(--light-brown);
        color: white;
    }
`

export const RightWrapper = styled.div`
    position: relative;
    display: grid;
    grid: 1fr 1fr / 1fr;
    row-gap: 0.5em;
    width: 25%;
    height: 80%;
    margin: 1em 1em 1em 5em;
`

export const SignWrapper = styled.div`
    position: relative;
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`

export const Sign = styled(NavLink)`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    cursor: pointer;
    background: var(--light-brown);

    border: 3px solid var(--light-brown);
    border-radius: 0.5em;

    height: 100%;
    width: 40%;

    color: white;
    text-transform: uppercase;
    font-family: 'Bebas Neue';
    font-size: 1.5em; 
    text-decoration: none;

    transition: background 0.5s ease-in-out;

    &:hover{
        background: white;
        color: var(--light-brown);
    }
`

export const SearchForm = styled.form`
    display: flex;
    width: 100%;
    position: relative;

    &:after{
        position: absolute;
        top: 37px;
        right: 0px;
        content: "";
        background: black;
        width: 4px;
        height: 25px;
        transform: rotate(135deg);
    }
`
export const SearchBar = styled.input`
    position: absolute;
    right: 0;

    overflow: hidden;
    width:  3.5em;
    height: 3.5em;
    padding: 1em;

    cursor: pointer;
    color: black;
    background: transparent;
    outline: none;
    border: solid 4px black;
    border-radius: 3em;
    transition: width 0.5s;

    &:focus{
        width: 100%;
    }

`