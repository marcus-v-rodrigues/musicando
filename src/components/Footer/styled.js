//Style file

import styled from 'styled-components'

import brazil from './images/brazil.png'
import boleto from './images/boleto.png'
import elo from './images/elo.png'
import mastercard from './images/mastercard.png'
import visa from './images/visa.png'
import pix from './images/pix.png'

export const Footer = styled.div`
    position:relative;
    width: 100%;
    min-height: 30em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Upper = styled.div`
    position:relative;
    width: 100%;
    min-height:12em;
    background: #ECECEC;


    display: grid;
    grid: 1fr .5fr / repeat(4, 1fr);

    @media screen and (max-width: 700px){
        grid: 1fr 1fr .5fr / repeat(2, 1fr);
    }
`

export const Column = styled.div`
    position:relative;
    width: 100%;
    height: 75%;
    background: #ECECEC;
    padding: 3em 2em 0 2em;


    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
export const Item = styled.span`
    margin: 0.2em;
`
export const Title = styled(Item)`
    font-weight: 600;
    font-size: 1.5em;
`

export const Payment = styled.div`
    position: relative;
    padding-left: 2em;  

    display: grid;
    grid: 1fr / repeat(6, 1fr);
    align-items: center;

    grid-row: 2;
    grid-column: 1 / 5;

    @media screen and (max-width: 700px){
        width: 80%;
        grid: repeat(2, 1fr) / repeat(3, 1fr);

        grid-row: 3;
        grid-column: 1 / 3;
    }

    @media screen and (max-width: 700px){
        grid: repeat(3, 1fr) / repeat(2, 1fr);
    }
`

export const Image = styled.span`
    width: 5em;
    height: 3em;
    margin: 1em;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;   
`

export const Boleto = styled(Image)`
    background-image: url(${boleto});
`
export const Elo = styled(Image)`
    background-image: url(${elo});
`
export const Mastercard = styled(Image)`
    background-image: url(${mastercard});
`
export const Visa = styled(Image)`
    background-image: url(${visa});
`
export const Pix = styled(Image)`
    background-image: url(${pix});
`

export const Bottom = styled.div`
    position:relative;
    width: 100%;
    min-height: 8em;
    background: #CECECE;


    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Brazil = styled(Image)`
    background-image: url(${brazil});
    position: relative;
`

export const Description = styled.div`
    position: relative;
    align-self: flex-end;
    min-width: 5em;
    height: 100%;
    padding: 1.5em;
    text-align: right;

    @media screen and (max-width: 700px){
        font-size: 0.7em;
    }
`