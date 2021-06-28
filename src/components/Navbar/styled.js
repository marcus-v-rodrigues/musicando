//Style file

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'

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
    min-width: 12em;
    margin: 0 3em;

    @media screen and (max-width: 700px){
        margin: 0 1em;
    }

    @media screen and (max-width: 500px){
        font-size: 0.6em;
    }
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
export const MenuButton = styled.a`
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
    font-size: 2em;
    
    transition: background 0.5s ease-in-out;

    &:hover{
        background: var(--light-brown);
        color: white;
    }

    @media screen and (max-width: 1600px){
        font-size: 1.7em;
    }

    @media screen and (max-width: 1400px){
        font-size: 1.5em;
    }

    @media screen and (max-width: 1300px){
        display: none;
    }
`

export const RightWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 25%;
    height: 100%;
    margin: 1em 2em 1em 3em;

    @media screen and (max-width: 1400px){
        width: 20%;
    }

    @media screen and (max-width: 1300px){
        display: none;
    }
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

    height: 40%;
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

    @media screen and (max-width: 1400px){
        font-size: 1.2em; 
    }
`

export const Menu = styled(HamburgerMenu)`
    display: none;
    position: absolute;
    right: 1em;
    top: 1em;
    margin: 1.5em;

    @media screen and (max-width: 1300px){
        display: flex;
    }

    @media screen and (max-width: 800px){
        right: 0.1em;
        top: 0.1em;
    }

`
/*
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
*/