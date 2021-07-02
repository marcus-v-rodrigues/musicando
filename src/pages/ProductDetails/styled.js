import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 105em;
    width: 90%;
	padding: 3em;
	background: white;
    box-shadow: 0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);

    @media screen and (max-width: 600px) {
        width: 25em;
        padding: 1em;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
        padding: 1em 0;
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

`
export const ProductPrice = styled.span`
    color: black;
    font-size: 4em;
`

export const CartButton = styled.button`

    --border-radius: 0.5em;
    
    font-size: 1.5rem;
    text-align: center;
    text-decoration: none !important;
    cursor: pointer;
    display: inline-block;
    position: relative;
    
	padding: 1em 2em;

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