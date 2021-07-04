import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
	padding: 3em;
    margin-bottom: 1em;
	background: white;
    box-shadow: var(--shadow);

    @media screen and (max-width: 1300px) {
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 600px) {
        padding: 1em;
    }

    @media screen and (max-width: 400px) {
        padding: 0.5em;
    }
` 

export const Background = styled.div`
    position: relative;
    border-radius: 1em;

    --size: 15em;

    height: var(--size);
    width: var(--size);
    background: #ECECEC;
    margin-right: 2em;

    @media only screen and (max-width: 1300px) {
        margin: 0;
    }
`

export const Image = styled.div`
    background-image: url(${props => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;     

    height: 100%;
    width: 100%;
`

export const Content = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2em;
    flex: 1;

    @media screen and (max-width: 1300px) {
        grid-template-rows: 3fr 2fr;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
    }
`
export const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1300px) {
        align-items: center;
    }
`
export const ItemName = styled.span`
    color: black;
    font-size: 2em;
    word-break: break-word;
    width: 100%;

`
export const ItemInfo = styled.span`
    color: black;
    font-size: 1.5em;
    width: 100%;
`
export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (max-width: 1300px) {
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
    }
`
