import styled from 'styled-components'

import microphone from './images/microphone.jpg'

export const Container = styled.section`
    position: relative;
    display: flex;
    align-items: center;

    height: calc(100vh - var(--navbar-height));
    width: 100%;

    background: white;
`

export const FormBackground = styled.div`
	position:relative;
    width:100%;
    max-width: 30em;
	min-height: 40em;
	margin: auto;
	
	background:url(${microphone}) no-repeat center/cover;
	box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
`
export const FormWrapper = styled.div`
	position:absolute;
    width:100%;
	height:100%;
	padding:5.5em 4em 3em 4em;
	background:rgba(141, 104, 82,.9);
`