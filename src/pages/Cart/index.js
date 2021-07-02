import React, { useState, useEffect } from 'react'
import PageContainer from '../../components/Layout/PageContainer'
import * as S from './styled'

import { connect } from 'react-redux'

const Cart = ({ cart }) => {

    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        let items = 0
        let price = 0

        cart.forEach((item) => {
        items += item.qty
        price += item.qty * item.price
        })

        setTotalItems(items)
        setTotalPrice(price)
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])

  return (
    <PageContainer>
        <S.Title>Carrinho</S.Title>
        <S.CartContainer>

            <S.Wrapper>

            </S.Wrapper>

            <S.Summary>
                <S.SummaryTitle>Lista de Compras</S.SummaryTitle>
                <S.SummaryInfo>
                    <S.SummaryItems>itens</S.SummaryItems>
                    <S.SummaryTotal>R$</S.SummaryTotal>
                </S.SummaryInfo>
                <S.CartButton>Comprar</S.CartButton>
            </S.Summary>
            
        </S.CartContainer>
    </PageContainer>
  )
}

const mapStateToProps = (state) => {
    return {
      cart: state.shop.cart,
    }
  }
  
  export default connect(mapStateToProps)(Cart)
