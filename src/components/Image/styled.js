//Style file

import styled from 'styled-components'

export const Image = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;     

    height: 80vh;
    width: 100%;
`