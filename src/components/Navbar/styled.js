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
    width: 25%;
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
    width: 25%;
`

export const SignWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
    height: 100%;
    margin-left: 5em;
`

export const Sign = styled.a`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    flex-grow: 1;

    cursor: pointer;
    background: black;

    border-radius: 25%;
    border-color: black;
    border-width: 10px;


    color: white;
    text-transform: uppercase; 
    font-size: 1.2em;
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
    display: inline-block;
    position: relative;
    filter: drop-shadow(0 1px #0091c2);

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
    width:  2em;
    height: 2em;
    padding: 1em;

    color: black;
    background: transparent;
    outline: none;
    border: solid 3px white;
    border-radius: 3em;
    transition: width 0.5s;

    &:focus{
        width: 100%;
    }

`
export const SearchButton = styled.button`
    border: 0;
    padding: 0.5rem;
    border-radius: 8px;
    position: absolute; 
    top: 0;
    left: 100%;
    width: 4em;
    transition: 0.2s;
    background: #455A64;
    color: white;
    font-size: 13px;
    height: 100%;

    ${SearchBar}:focus &{
        transform: translateX(calc(-1 * 4em));
    }
`