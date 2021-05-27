//Style file

import styled from 'styled-components'

import lespaul from './image/LesPaul.png'

export const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    height: calc(100vh - var(--navbar-height));
    width: 100%;

    background: linear-gradient(to right bottom, var(--light-brown), var(--dark-brown));
`

export const Title = styled.h1`
    margin: 0 0 0.5em 0;
    color: white;
    text-transform: uppercase; 
    font-size: 4rem;
    font-family: 'Fredoka One';
`

export const CartWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 60%;
	max-height: 80%;
	padding: 5.5em 4em 3em 4em;
	background: white;
    box-shadow: 0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
` 

export const ProductList = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`

export const Product = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid var(--light-brown);
`

export const Image = styled.div`
    position: relative;
    float: left;
    width: 20%;
    min-height: 5em;
    height: 100%;
    margin-right: 1em;
    text-align: center;

    background-image: url(${lespaul});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;   
`

export const Details = styled.div`
    float: left;
    width: 40%;
`

export const Name = styled.h3`
    margin-right: 2em;
    width: 50%;
`

export const Description = styled.div`
    margin: 0.5em 1em 0 0;
    text-align: justify;
    text-justify: inter-word;
`

export const Price = styled.div`
    float: left;
    width: 5em;
    margin-bottom: 1em;
    font-size: 1.2em;
`

export const Quantity = styled.div`
    float: left;
    width: 1em;
    margin-bottom: 1em;
    font-size: 1.2em;
`

export const Total = styled.div`
    float: left;
    width: 5em;
    margin-bottom: 1em;
    font-size: 1.2em;
`

export const Information = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 0;
`

export const Button = styled.a`

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
        color: var(--dark-brown);
    }
`