import styled from 'styled-components'

export const Container = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    height: calc(100vh - var(--navbar-height));
    width: 100%;

    background: linear-gradient(to right bottom, var(--light-brown), var(--dark-brown));
`