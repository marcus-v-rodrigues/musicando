import React, { useEffect } from 'react'
import PageContainer from '../../components/Layout/PageContainer'
import ProductItem from '../../components/Product/ProductItem'
import ProductWrapper from '../../components/Product/ProductWrapper'

import * as S from './styled'
//import products from '../../data/products'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { listProductsCategory } from '../../redux/actions/productActions'

const Category = ({ category }) => {

    const dispatch = useDispatch()
    const productCategory = useSelector((state) => state.productCategory)
    const { loading, products, error } = productCategory

    useEffect(() => {
        dispatch(listProductsCategory(category))
      }, [category, dispatch])

    return (
        <PageContainer>
            <S.Title>{category}</S.Title>

            <S.Wrapper>
                {loading ? (
                <h2>Carregando...</h2>
                ) : error ? (
                <h3>{error}</h3>
                ) : (
                    <ProductWrapper>
                        {products.map(product => (
                            <ProductItem 
                                key={product._id} 
                                product={product}
                            />
                        ))}
                    </ProductWrapper>
                )}
            </S.Wrapper>
        </PageContainer>
    )
}


export default Category
