import React from 'react'
import PageContainer from '../../components/Layout/PageContainer'
import ProductItem from '../../components/Product/ProductItem'
import ProductWrapper from '../../components/Product/ProductWrapper'

import * as S from './styled'
//import products from '../../data/products'

// Redux
import { useDispatch, useSelector } from 'react-redux'

const Category = ({ category, products }) => {
    return (
        <PageContainer>
            <S.Title>{category}</S.Title>

            <S.Wrapper>
                <ProductWrapper>
                    {products.map(product => (
                        product.category === category &&
                        <ProductItem 
                            key={product.id} 
                            product={product}
                        />
                    ))}
                </ProductWrapper>
            </S.Wrapper>
        </PageContainer>
    )
}

const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
    }
}

export default connect(mapStateToProps)(Category)
