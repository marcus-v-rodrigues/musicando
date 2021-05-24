import styled from "styled-components"

export const Wrapper = styled.div`
    position: relative;
    display: flex;
`
export const Item = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 2em;
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

export const ItemText = styled.p`
    color: black;
    font-size: 1.5em;
`