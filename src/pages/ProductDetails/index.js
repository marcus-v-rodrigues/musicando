import React from 'react'
import PageContainer from '../../components/Layout/PageContainer'
import * as S from './styled'

import products from '../../data/products'

const ProductDetails = ({ match }) => {
    const product = products.find(product => product.id === Number(match.params.id))
    return (
        <PageContainer>
            <S.Wrapper>
                {product.name}
            </S.Wrapper>
        </PageContainer>
    )
}

export default ProductDetails
