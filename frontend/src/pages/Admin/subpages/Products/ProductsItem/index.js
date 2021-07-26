import React from 'react'

import { Button } from 'components/Button'

import * as S from './styled'

const ProductsItem = ({ product }) => {

    const locatedPrice = product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    return (
        <S.Wrapper>

            <S.Background>
                <S.Image image={product.image}/>
            </S.Background>

            <S.Content>

                <S.Details>
                    <S.ItemName>{product.name}</S.ItemName>
                    <S.ItemInfo>ID: {product.id}</S.ItemInfo>
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