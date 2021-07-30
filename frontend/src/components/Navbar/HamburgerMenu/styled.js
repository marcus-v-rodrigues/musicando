import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Sidebar = styled.div`
  --distance: -2em;
  --width: 20em;

  position: absolute;
  top: var(--distance);
  right: var(--distance);
  width: var(--width);
  background: linear-gradient(to left bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  box-shadow:0 0.5em 1em rgba(0, 0, 0, 0.15); 
  backdrop-filter: blur(2em);
  border-radius: 2em 0 0 2em;
  padding: 2em;
  z-index:3;
  clip-path: circle(0 at calc(var(--width) + calc(var(--distance) * 2)) calc(var(--distance) * -1));

  @media screen and (max-width: 800px){
    top: var(--distance);
    right: var(--distance);
    clip-path: circle(0 at calc(var(--width) + calc(var(--distance) * 2.5)) calc(var(--distance) * -3));
  }
`

export const Description = styled.span`
  position: relative;
  margin-top: 0.2em;
  font-size: 1.7em;
  font-weight: 600;
  text-transform: uppercase;
  font-family: 'Bebas Neue';
  color: var(--light-brown);
`

const thickness = 6;

const Shape = styled.span`
  display: inline-block;
  position: absolute;
  width: 100%;
  height: ${thickness}px;
  border-radius: 3px;
  background: var(--light-brown);
`

export const Top = styled(Shape)`
`

export const Middle = styled(Shape)`
`

export const Bottom = styled(Shape)`
`

const side = 2.5;

export const HamburgerContainer = styled.div`
  position: relative;
  width: ${side}em;
  height: ${side}em;
  z-index: 4;
  transition: transform 0.2s, opacity 0.2s !important;
  will-change: transform;
  &:hover {
    opacity: 0.7;
    transform: scale(1.2);
  }
`

export const List = styled.ul`
  display: flex; 
  flex-direction: column;
  align-items: center;
  padding: 6em 0 0 0;
  list-style: none;
`

export const Item = styled.li`  
  padding: 0.2em 0;
  display: flex;
  font-size: 1.6em;
  font-family: 'Bebas Neue';
  color: var(--light-brown);

  &:first-child {
      font-size: 3em;
  }   
`
export const Link = styled(NavLink)`

  --border-radius: 0.5em;
  
  width: 6em; 
  text-align: center;
  text-decoration: none !important;
  cursor: pointer;
  display: inline-block;
	padding: 0.5em;

	color: #fff;
  border-radius: var(--border-radius);
  font-family: 'Bebas Neue';
	text-transform: uppercase;

	transition: all .3s;
	position: relative;
	overflow: hidden;
	z-index: 3;

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

export const Button = styled(Link).attrs({as: "button"})`
`
