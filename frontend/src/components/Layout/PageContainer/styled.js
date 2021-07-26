import styled from 'styled-components'

export const Container = styled.section`
    --vertical-padding: 4em;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--vertical-padding) 0;

    min-height: calc(100vh - var(--navbar-height) - calc(2 * var(--vertical-padding)));
    width: 100%;

    background: linear-gradient(to right bottom, var(--light-brown), var(--dark-brown));

    @media screen and (max-height: 500px){
        min-height: 40em;
    }
`