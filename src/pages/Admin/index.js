import React from 'react'
import PageContainer from '../../components/Layout/PageContainer'
import { ButtonLink } from 'components/Button/'
import * as S from './styled'

const Admin = () => {
    return (
        <PageContainer>
            <S.Title>Administrador</S.Title>
            <S.Wrapper>
                <ButtonLink to={'/admin/users'}>Usuários</ButtonLink>
                <ButtonLink to={'/admin/products'}>Produtos</ButtonLink>
            </S.Wrapper>
        </PageContainer>
    )
}

export default Admin
