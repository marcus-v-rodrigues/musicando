import React from 'react'

import { Button } from 'components/Button'

import * as S from './styled'

const UserItem = ({ user }) => {

    return (
        <S.Wrapper>

            <S.Content>

                <S.Details>
                    <S.ItemName>{`${user.firstName} ${user.lastName}`}</S.ItemName>
                    <S.ItemInfo>ID: {user.id}</S.ItemInfo>
                    <S.ItemInfo>Category: {product.category}</S.ItemInfo>
                    <S.ItemInfo>Price: {locatedPrice}</S.ItemInfo>
                </S.Details>

                <S.Actions>
                    <Button onClick={() => alert('Função ainda não implementada')}>Remover</Button>
                    <Button onClick={() => alert('Função ainda não implementada')}>Editar</Button>
                </S.Actions>

            </S.Content>

        </S.Wrapper>
    )
}

export default ProductsItem