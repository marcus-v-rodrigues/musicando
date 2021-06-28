import React from 'react'
import PageContainer from '../../components/Layout/PageContainer'
import * as S from './styled'

import products from '../../data/products'

const ProductDetails = ({ match }) => {
    const product = products.find(product => product.id === Number(match.params.id))
    return (
        <PageContainer>
            <S.Wrapper>
                <S.Content>

                <S.Background>
                    <S.Image image={product.image}/>
                </S.Background>

                <S.Text>
                    <S.ProductName>{product.name}</S.ProductName>
                    <S.ProductPrice>R$ {product.price}</S.ProductPrice>
                </S.Text>

                </S.Content>
            </S.Wrapper>
        </PageContainer>
    )
}

export default ProductDetails
