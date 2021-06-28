//Style file

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: center;
`
export const Item = styled(NavLink)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

    padding: 1em;
    flex: 0 0 25%;
    max-width: 25%;  

    @media only screen and (max-width: 1600px) {
        flex: 0 0 33%;
        max-width: 33%;
    }
    @media only screen and (max-width: 1300px) {
        flex: 0 0 50%;
        max-width: 50%;
    }
    @media only screen and (max-width: 1000px) {
        flex: 1 0 100%;
        max-width: 100%;
    }
`

export const ItemBackground = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    height: 20em;
    width: 20em;
    background: #ECECEC;
`

export const ItemImage = styled.div`
    background-image: url(${props => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;     

    height: 100%;
    width: 100%;
`

export const ItemName = styled.div`
    color: black;
    margin-top: 1em;
    font-size: 1em;
    text-align: center;
    word-break: break-word;
    width: 100%;

`
export const ItemPrice = styled.span`
    color: black;
    margin-top: 0.5em;
    font-size: 2em;
`