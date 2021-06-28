import React from 'react'
import PageContainer from '../../components/Layout/PageContainer'
import { ProductItem, ProductWrapper } from '../../components/Product'

import * as S from './styled'
import products from '../../data/products'

const Category = ({ category }) => {
    return (
        <PageContainer>
            <S.Title>{category}</S.Title>

            <S.Wrapper>
                <ProductWrapper>
                    {products.map(product => (
                        product.category == category &&
                        <ProductItem 
                            key={product.id} 
                            image={product.image} 
                            name={product.name} 
                            price={product.price}
                        />
                    ))}
                </ProductWrapper>
            </S.Wrapper>
        </PageContainer>
    )
}

export default Category
