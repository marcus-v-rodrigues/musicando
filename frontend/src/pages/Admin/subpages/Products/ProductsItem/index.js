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
                    <S.ItemInfo>ID: {product._id}</S.ItemInfo>
                    <S.ItemInfo>Nome: {product.name}</S.ItemInfo>
                    <S.ItemInfo>Preço: {locatedPrice}</S.ItemInfo>
                    <S.ItemInfo>Categoria: {product.category}</S.ItemInfo>
                    <S.ItemInfo>Marca: {product.brand}</S.ItemInfo>
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