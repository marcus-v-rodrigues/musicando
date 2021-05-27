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
    height: 30rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Upper = styled.div`
    position:relative;
    width: 100%;
    height: 75%;
    background: #ECECEC;


    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

export const Column = styled.div`
    position:relative;
    width: 100%;
    height: 75%;
    background: #ECECEC;
    padding: 3em 0 0 2em;


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
export const Bottom = styled.div`
    position:relative;
    width: 100%;
    height: 25%;
    background: #CECECE;


    display: flex;
    flex-direction: row;
    align-items: center;
   
`
export const Image = styled.span`
    width: 5em;
    height: 3em;
    margin: 1em;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;   
`

export const Brazil = styled(Image)`
    background-image: url(${brazil});
    position: absolute;
    left: 2em;
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

export const Payment = styled.div`
    position: absolute;
    bottom: 1em;
    left: 2em;  
    display: flex;
    align-items: center;
`

export const Description = styled.div`
    position: absolute;
    right: 2em;
`