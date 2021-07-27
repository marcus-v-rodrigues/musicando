import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 105em;
    width: 90%;
	padding: 3em;
	background: white;
    box-shadow: var(--shadow);

    @media screen and (max-width: 600px) {
        width: 25em;
        padding: 1em;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
        padding: 1em 0.5em;
    }
` 

export const Content = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;

    @media only screen and (max-width: 900px) {
        justify-items: center;
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(1, 1fr);
    }
`

export const Background = styled.div`
    position: relative;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
    height: 20em;
    width: 20em;
    background: #ECECEC;
`

export const Image = styled.div`
    background-image: url(${props => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;     

    height: 100%;
    width: 100%;
`

export const Text = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5em;
    align-items: flex-end;
    text-align: right;
    width: 100%;

    @media only screen and (max-width: 900px) {
        text-align: center;
        align-items: center;
        margin-top: 1em;
    }
`

export const ProductName = styled.div`
    color: black;
    font-size: 2em;
    word-break: break-word;
    width: 100%;

    @media only screen and (max-width: 600px) {
        font-size: 1.4em;
    }
`
export const ProductPrice = styled.span`
    color: black;
    font-size: 4em;

    @media only screen and (max-width: 600px) {
        font-size: 2em;
    }
`

export const ProductDescription = styled.div`
    color: black;
    font-size: 1em;
    word-break: break-word;
    text-align: justify;
    width: 100%;
`