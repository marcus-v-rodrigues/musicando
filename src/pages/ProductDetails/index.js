import React from 'react'
import PageContainer from '../../components/Layout/PageContainer'
import * as S from './styled'

import products from '../../data/products'

const ProductDetails = ({ match }) => {
    const product = products.find(product => product.id === Number(match.params.id))
    const locatedPrice = product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    return (
        <PageContainer>
            <S.Wrapper>
                <S.Content>

                <S.Background>
                    <S.Image image={product.image}/>
                </S.Background>

                <S.Text>
                    <S.ProductName>{product.name}</S.ProductName>
                    <S.ProductPrice>{locatedPrice}</S.ProductPrice>
                    <S.CartButton>Adicionar ao carrinho</S.CartButton>
                </S.Text>

                </S.Content>
            </S.Wrapper>
        </PageContainer>
    )
}

export default ProductDetails
