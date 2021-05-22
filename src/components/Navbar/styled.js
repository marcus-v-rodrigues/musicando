import styled from "styled-components"

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
    background-image: url(${brand});
    background-position: center; 
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    width: 15%;
    margin: 0 3rem;
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
`

export const SignWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
    height: 100%;
    margin-left: 5rem;
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
    font-size: 1.2rem;
    font-family: 'Bebas Neue', sans-serif;

    transition: background 0.5s ease-in-out;

    &:hover{
        background: white;
        color: black;
    }
`

export const SearchWrapper = styled.div`

`
export const SearchBar = styled.div`
    
`
export const SearchButton = styled.div`
    
`