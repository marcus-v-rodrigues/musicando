import React, { useState, useEffect } from 'react'
import { Button } from 'components/Button'
import PageContainer from '../../components/Layout/PageContainer'
import CartItem from './CartItem'
import * as S from './styled'

import { addToCart } from '../../redux/actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'

const Cart = ({ match, location, history }) => {

    const productId = match.params.id

    const quantity = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
          dispatch(addToCart(productId, quantity))
        }
    }, [dispatch, productId, quantity])

    const [totalPrice, setTotalPrice] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        let items = 0
        let price = 0

        cartItems.forEach((item) => {
        items += item.quantity
        price += item.quantity * item.price
        })

        setTotalItems(items)
        setTotalPrice(price)
    }, [cartItems, totalPrice, totalItems, setTotalPrice, setTotalItems])

    let locatedPrice = totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

  return (
    <PageContainer>
        <S.Title>Carrinho</S.Title>
        <S.CartContainer>

            <S.Wrapper>
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </S.Wrapper>

            <S.Summary>
                <S.SummaryTitle>Lista de Compras</S.SummaryTitle>
                <S.SummaryInfo>
                    <S.SummaryItems>{totalItems} itens</S.SummaryItems>
                    <S.SummaryTotal>{locatedPrice}</S.SummaryTotal>
                </S.SummaryInfo>
                <Button onClick={() => alert('Função ainda não implementada')}>Comprar</Button>
            </S.Summary>
            
        </S.CartContainer>
    </PageContainer>
  )
}
  
  export default Cart
