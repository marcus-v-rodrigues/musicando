import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
	padding: 3em;
    margin-bottom: 1em;
	background: white;
    box-shadow: 0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);

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
    width: 60%;

    @media screen and (max-width: 1300px) {
        grid-template-rows: repeat(2, 1fr);
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
        text-align: center;
    }
`
export const ItemName = styled.span`
    color: black;
    font-size: 1.2em;
    word-break: break-word;
    width: 100%;

`
export const ItemPrice = styled.span`
    color: black;
    font-size: 2em;
    width: 100%;
`
export const Actions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (max-width: 1300px) {
        align-items: center;
    }
`

export const ItemQuantity = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1300px) {
        margin-bottom: 1em;
    }
    
`
export const InputQuantity = styled.input`
    font-size: 1.5em;
    max-width: 3em;
`
export const ItemButton = styled.button`

    --border-radius: 0.5em;
    
    font-size: 2rem;
    text-align: center;
    text-decoration: none !important;
    cursor: pointer;
    display: inline-block;
    position: relative;
    
	padding: 0.5em 1em;

	color: #fff;
    border-radius: var(--border-radius);
    font-family: 'Bebas Neue';
    text-transform: uppercase;

	transition: all .3s;
	position: relative;
	overflow: hidden;
	z-index: 1;

	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--light-brown);
		border-radius: var(--border-radius);
		z-index: -5;
	}
	&:before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0%;
		height: 100%;
		background-color: var(--dark-brown);
		transition: all .3s;
		border-radius: var(--border-radius);
		z-index: -1;
	}

	&:hover {
		color: #fff;
		&:before {
			width: 100%;
		}
	}

`