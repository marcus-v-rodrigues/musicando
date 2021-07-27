import React, { useEffect, useState } from 'react'

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

  const [price, setPrice] = useState(0)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
    
    setPrice(new Intl.NumberFormat('pt-br',{style: 'currency', currency: 'BRL'}).format(product.price))
    
  }, [dispatch, match, product.price])

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
                      <S.ProductPrice>{price}</S.ProductPrice>
                      <S.ProductDescription>{product.description}</S.ProductDescription>
                      <S.ActionWrapper>

                        {product.countInStock > 0 && (
         
                            <S.InputQuantity
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                              type="number"
                              max={product.countInStock}
                              min={1}
                            >
                            </S.InputQuantity>
                        )}

                        <S.ProductStock>{product.countInStock > 0 ? 'Em estoque' : 'Fora de estoque'}</S.ProductStock>

                      </S.ActionWrapper>
                      <Button>Adicionar ao carrinho</Button>
                  </S.Text>

                  </S.Content>
                )}
            </S.Wrapper>
        </PageContainer>
    )
}


export default ProductDetails
