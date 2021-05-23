import styled from "styled-components"

import logo from './onda-sonora.png';

export const Navbar = styled.nav`
    position:relative;
    z-index: 2;
    width: 100%;
    height: var(--navbar-height);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    display: static;
    top: 0%;
    background-color: white;
`
export const Logo = styled.div`
    position: relative;
    background-image: url(${logo});
    background-position: center; 
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    width: 15%;
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

    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;

    transition: background 0.5s ease-in-out;

    &:hover{
        background: black;
        color: white;
    }
`

export const RightWrapper = styled.div`
    position: relative;
    display: grid;
    grid: 1fr 1fr / 1fr;
    row-gap: 0.2em;
    width: 20%;
    margin: 1em;
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

export const Sign = styled.a`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    cursor: pointer;
    background: black;

    border: 3px solid black;
    border-radius: 1em;

    padding: 1em;
    width: 40%;


    color: white;
    text-transform: uppercase; 
    font-family: 'Bebas Neue', sans-serif;

    transition: background 0.5s ease-in-out;

    &:hover{
        background: white;
        color: black;
    }
`

export const SearchForm = styled.form`
    display: flex;
    width: 100%;
    position: relative;

    &:after{
        position: absolute;
        top: 40px;
        right: 2px;
        content: "";
        background: black;
        width: 4px;
        height: 20px;
        transform: rotate(135deg);
    }
`
export const SearchBar = styled.input`
    position: absolute;
    right: 0;

    overflow: hidden;
    width:  4em;
    height: 4em;
    padding: 1em;

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