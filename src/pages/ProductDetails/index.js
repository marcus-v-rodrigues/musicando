import React from 'react'
import PageContainer from '../../components/Layout/PageContainer'
import * as S from './styled'

import products from '../../data/products'

const ProductDetails = ({ match }) => {
    const product = products.find(product => product.id === match.params.id)
    console.log(product)
    return (
        <PageContainer>
            <S.Wrapper>
                {product}
            </S.Wrapper>
        </PageContainer>
    )
}

export default ProductDetails
