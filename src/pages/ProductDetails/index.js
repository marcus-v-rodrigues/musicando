import React from 'react'
import PageContainer from '../../components/Layout/PageContainer'
import * as S from './styled'

import products from '../../data/products'

// Redux
import { connect } from 'react-redux'
import {
  loadCurrentItem,
  addToCart,
} from '../../redux/Shopping/shopping-actions'

const ProductDetails = ({ match, addToCart }) => {
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
                    <S.CartButton onClick={() => addToCart(product.id)}>Adicionar ao carrinho</S.CartButton>
                </S.Text>

                </S.Content>
            </S.Wrapper>
        </PageContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
      loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    }
  }

export default ProductDetails
