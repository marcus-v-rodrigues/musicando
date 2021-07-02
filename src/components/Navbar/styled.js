//Style file

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'

import logo from './images/Musicando.svg'
import cart from './images/Cart.svg'

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
export const Logo = styled(NavLink)`
    position: relative;
    background-image: url(${logo});
    background-position: center; 
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    min-width: 12em;
    margin: 0 3em 0 2em;

    @media screen and (max-width: 1500px){
        margin: 0 2em;
    }

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
export const MenuButton = styled(NavLink)`
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
    text-decoration: none;

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
    justify-content: space-around;
    align-items: center;

    width: 20%;
    height: 100%;

    @media screen and (max-width: 1300px){
        display: none;
    }
`

export const Sign = styled(NavLink)`
    position: relative;
    display: flex;
    justify-content: center;
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

export const Cart = styled(NavLink)`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    --size: 4rem;

    width: auto;
    height: var(--size);

    @media screen and (max-width: 800px){
        --size: 3rem;
    }
`
export const CartImage = styled.div`
    position: relative;
    background-image: url(${cart});
    background-position: center; 
    background-size: contain;
    background-repeat: no-repeat;

    height: var(--size);
    width: var(--size);
`
export const CartCounter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;

    --size: 2rem;

    height: var(--size);
    width: var(--size);
    border-radius: 50%;
    color: black;
    background: yellow;
    font-size: 1em; 
    font-weight: 600;

    @media screen and (max-width: 800px){
        --size: 1.5rem;
    }
`

export const MobileWrapper = styled.div`
    position: relative;
    display: none;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 2em;

    width: 15em;
    height: 100%;

    @media screen and (max-width: 1300px){
        display: flex;
    }

    @media screen and (max-width: 600px){
        font-size: 0.8em;
    }
`
export const CartMobile = styled(Cart)`
    display: none;

    @media screen and (max-width: 1300px){
        display: flex;
    }
`
export const Menu = styled(HamburgerMenu)`
    display: flex;
    position: relative;
    margin-right: 2em;

    @media screen and (max-width: 800px){
        font-size: 0.9em;
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