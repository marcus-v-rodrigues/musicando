import React, { useState } from 'react'
import * as S from './styled'

import { Button } from 'components/Button'
import { connect } from 'react-redux'

import {
    adjustItemQuantity,
    removeFromCart,
  } from '../../../redux/actions/cartActions'

const CartItem = ({ item, adjustQuantity, removeFromCart }) => {

    const [input, setInput] = useState(item.quantity)

    const onChangeHandler = (e) => {
        setInput(e.target.value)
        adjustQuantity(item.id, e.target.value)
    };
    const locatedPrice = item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

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
                            min="1"
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={input}
                            onChange={onChangeHandler}
                        />
                    </S.ItemQuantity>
                    <Button onClick={() => removeFromCart(item.id)}>Remover</Button>
                </S.Actions>

            </S.Content>

        </S.Wrapper>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      adjustQuantity: (id, value) => dispatch(adjustItemQuantity(id, value)),
      removeFromCart: (id) => dispatch(removeFromCart(id)),
    }
  }

export default connect(null, mapDispatchToProps)(CartItem)
