import React from 'react'

import PageContainer from 'components/Layout/PageContainer'
import UsersItem from './UserItem'

import * as S from './styled'

import users from 'data/users'

const Users = () => {
    return (
        <PageContainer>
            <S.Title>Produtos</S.Title>
            
            <S.Wrapper>
                {users.map((user) => (
                    <UsersItem key={user.id} product={user} />
                ))}
            </S.Wrapper>
        </PageContainer>
    )
}

export default Users