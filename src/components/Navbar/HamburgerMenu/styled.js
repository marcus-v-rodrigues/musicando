import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Sidebar = styled.div`
  --long-distance: -3em;
  --short-distance: -1em;
  --width: 20em;

  position: absolute;
  top: var(--long-distance);
  right: var(--long-distance);
  width: var(--width);
  background: linear-gradient(to left bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  box-shadow:0 0.5em 1em rgba(0, 0, 0, 0.15); 
  backdrop-filter: blur(2em);
  border-radius: 2em 0 0 2em;
  padding: 2em;
  z-index:3;
  clip-path: circle(0 at calc(var(--width) + calc(var(--long-distance) * 2)) calc(var(--long-distance) * -1));

  @media screen and (max-width: 800px){
    top: var(--short-distance);
    right: var(--short-distance);
    clip-path: circle(0 at calc(var(--width) + calc(var(--short-distance) * 2.5)) calc(var(--short-distance) * -3));
  }
`

export const Description = styled.p`
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
  right: 0;
  width: 100%;
  height: ${thickness}px;
  border-radius: 3px;
  background: var(--light-brown);
`

export const Top = styled(Shape)`
  top: 0;
`

export const Middle = styled(Shape)`
  top: 50%;
  bottom: 50%;
  transform: translateY(-50%);
`

export const Bottom = styled(Shape)`
  bottom: 0;
`

const side = 2.5;

export const ToggleBtn = styled.div`
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