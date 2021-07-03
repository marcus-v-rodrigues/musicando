import React from 'react'
import PageContainer from '../../components/Layout/PageContainer'
import { ButtonLink } from 'components/Button/'
import * as S from './styled'

const Admin = () => {
    return (
        <PageContainer>
            <S.Title>Administrador</S.Title>
            <S.Wrapper>
                <ButtonLink to={'/admin'}>Usuários</ButtonLink>
                <ButtonLink to={'/admin'}>Produtos</ButtonLink>
            </S.Wrapper>
        </PageContainer>
    )
}

export default Admin
