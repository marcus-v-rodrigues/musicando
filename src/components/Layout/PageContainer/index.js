import React from 'react'
import * as S from './styled'

const PageContainer = ({ children }) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}

export default PageContainer
