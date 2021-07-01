import styled from 'styled-components'

export const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4em 0;

    min-height: calc(100vh - var(--navbar-height));
    width: 100%;

    background: linear-gradient(to right bottom, var(--light-brown), var(--dark-brown));

    @media screen and (max-height: 700px){
        min-height: 50em;
    }
`