import styled from 'styled-components'

export const Box = styled.div`
    padding: 20px;
    margin: 1em;
    background-color: #f44336;
    color: white;
`
  
export const Close = styled.span`
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: black;
    }
`