import React from 'react'

import { Button } from 'components/Button'

import * as S from './styled'

const UsersItem = ({ user }) => {

    return (
        <S.Wrapper>

            <S.Background>
                <S.Image image={user.picture}/>
            </S.Background>

            <S.Content>

                <S.Details>
                    <S.ItemName>{`${user.firstName} ${user.lastName}`}</S.ItemName>
                    <S.ItemInfo>ID: {user.id}</S.ItemInfo>
                    <S.ItemInfo>Gender: {user.gender}</S.ItemInfo>
                    <S.ItemInfo>Date of Birth: {user.dateOfBirth}</S.ItemInfo>
                    <S.ItemInfo>E-mail: {user.email}</S.ItemInfo>
                    <S.ItemInfo>Phone: {user.phone}</S.ItemInfo>
                    <S.ItemInfo>Register Date: {user.registerDate}</S.ItemInfo>
                </S.Details>

                <S.Actions>
                    <Button onClick={() => alert('Função ainda não implementada')}>Remover</Button>
                    <Button onClick={() => alert('Função ainda não implementada')}>Editar</Button>
                </S.Actions>

            </S.Content>

        </S.Wrapper>
    )
}

export default UsersItem