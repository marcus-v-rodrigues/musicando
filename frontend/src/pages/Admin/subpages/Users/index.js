import React from 'react'

import { Button } from 'components/Button'
import PageContainer from 'components/Layout/PageContainer'
import UsersItem from './UsersItem'

import * as S from './styled'

const Users = () => {
    return (
        <PageContainer>
            <S.Title>Usuários</S.Title>
            
            <S.Container>
                <S.Wrapper>
                    {/*users.map((user) => (
                        <UsersItem key={user.id} user={user} />
                    ))*/}
                </S.Wrapper>

                <S.Panel>
                    <S.PanelTitle>Cadastrar novo usuário</S.PanelTitle>
                    <Button onClick={() => alert('Função ainda não implementada')}>Cadastrar</Button>
                </S.Panel>
            </S.Container>
        </PageContainer>
    )
}

export default Users