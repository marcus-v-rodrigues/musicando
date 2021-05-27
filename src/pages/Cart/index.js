import React from 'react'

import * as S from './styled'

const Cart = () => {
  return (
    <S.Container>
        <S.Title>Carrinho</S.Title>
        <S.CartWrapper>
            <S.ProductList>
                <S.Product>

                    <S.Image/>

                    <S.Details>
                        <S.Name>Guitarra Les Paul</S.Name>
                        <S.Description>
                            A guitarra Les Paul é uma das mais icônicas da história. 
                            Criado pela Gibson em parceria com o músico Les Paul, o modelo promoveu uma verdadeira revolução no campo da música, 
                            seja por seu timbre típico ou pelo design que transmite a imagem de luxo.
                        </S.Description>
                    </S.Details>

                    <S.Information>
                        <S.Price>R$ 1120,00</S.Price>
                        <S.Quantity>1</S.Quantity>
                        <S.Total>R$ 1120,00</S.Total>
                    </S.Information>

                </S.Product>
            </S.ProductList>
            <S.Button>Comprar</S.Button>
        </S.CartWrapper>
    </S.Container>
  )
}

export default Cart
