import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 105em;
    width: 90%;
	padding: 3em;
    margin-bottom: 5em;
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
