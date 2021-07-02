import React from 'react'
import * as S from './styled'

const CartItem = ({ item }) => {

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
                            value={item.quantity}
                        />
                    </S.ItemQuantity>
                    <S.ItemButton>Remover</S.ItemButton>
                </S.Actions>

            </S.Content>

        </S.Wrapper>
    )
}

export default CartItem
