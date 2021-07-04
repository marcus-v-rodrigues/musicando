import React from 'react'

import PageContainer from '../../components/Layout/PageContainer'
import { Button } from '../../components/Button'

// Redux
import { connect } from 'react-redux'
import {
  addToCart,
} from '../../redux/Shopping/shopping-actions'

import * as S from './styled'

const ProductDetails = ({ current, product, addToCart }) => {

    current = current === null ? product : current
    const locatedPrice = current.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    return (
        <PageContainer>
            <S.Wrapper>
                <S.Content>

                <S.Background>
                    <S.Image image={current.image}/>
                </S.Background>

                <S.Text>
                    <S.ProductName>{current.name}</S.ProductName>
                    <S.ProductPrice>{locatedPrice}</S.ProductPrice>
                    <Button onClick={() => addToCart(current.id)}>Adicionar ao carrinho</Button>
                </S.Text>

                </S.Content>
            </S.Wrapper>
        </PageContainer>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
      product: state.shop.products.find((product) => product.id === Number(ownProps.match.params.id)),
      current: state.shop.currentItem,
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
