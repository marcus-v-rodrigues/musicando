import React, { useEffect } from 'react'

import PageContainer from '../../components/Layout/PageContainer'
import { Button } from '../../components/Button'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../../redux/actions/productActions'

import * as S from './styled'

const ProductDetails = ({ match }) => {

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

    return (
        <PageContainer>
            <S.Wrapper>
            {loading ? (
                <h2>Carregando...</h2>
                ) : error ? (
                <h3>{error}</h3>
                ) : (
                  <S.Content>

                  <S.Background>
                      <S.Image image={product.image}/>
                  </S.Background>

                  <S.Text>
                      <S.ProductName>{product.name}</S.ProductName>
                      <S.ProductPrice>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</S.ProductPrice>
                      <Button>Adicionar ao carrinho</Button>
                  </S.Text>

                  </S.Content>
                )}
            </S.Wrapper>
        </PageContainer>
    )
}


export default ProductDetails
