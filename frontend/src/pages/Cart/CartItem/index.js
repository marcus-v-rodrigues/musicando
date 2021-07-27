import React, { useState } from 'react'
import * as S from './styled'

import { Button } from 'components/Button'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../../redux/actions/cartActions'

const CartItem = ({ item }) => {

    const dispatch = useDispatch()

    const locatedPrice = item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <S.Wrapper>

            <S.Background>
                <S.Image image={item.image}/>
            </S.Background>

            <S.Content>

                <S.Details>
                    <S.ItemName>{item.name}</S.ItemName>
                    <S.ItemPrice>{locatedPrice}</S.ItemPrice>
                </S.Details>

                <S.Actions>
                    <S.ItemQuantity>
                        <label htmlFor="quantity">Quantidade</label>
                        <S.InputQuantity
                            max={item.countInStock}
                            min={1}
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={item.quantity}
                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                        />
                    </S.ItemQuantity>
                    <Button onClick={() => removeFromCartHandler(item.product)}>Remover</Button>
                </S.Actions>

            </S.Content>

        </S.Wrapper>
    )
}

export default CartItem
