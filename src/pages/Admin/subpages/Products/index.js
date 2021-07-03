import React from 'react'
import { connect } from 'react-redux'

import PageContainer from '../../../../components/Layout/PageContainer'
import ProductsItem from './ProductsItem'

import * as S from './styled'

const Products = ({ products }) => {
    return (
        <PageContainer>
            <S.Title>Produtos</S.Title>
            
            <S.Wrapper>
                {products.map((product) => (
                    <ProductsItem key={product.id} product={product} />
                ))}
            </S.Wrapper>
        </PageContainer>
    )
}

const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
    }
}

export default connect(mapStateToProps)(Products)