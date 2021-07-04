import React from 'react'
import * as S from './styled'

const Button = ({children, onClick}) => {
    return (
        <S.Button onClick={onClick}>{children}</S.Button>
    )
}

const ButtonLink = ({children, to}) => {
    return (
        <S.ButtonLink to={to}>{children}</S.ButtonLink>
    )
}

export {
    Button,
    ButtonLink
}
