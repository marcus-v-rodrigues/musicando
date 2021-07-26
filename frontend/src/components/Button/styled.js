import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const Button = styled.button`

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
    
    @media screen and (max-width: 1600px){
        font-size: 1.7em;
    }

    @media screen and (max-width: 1400px){
        font-size: 1.5em;
    }
`

export const ButtonLink = styled(Button).attrs({as: NavLink})`

`