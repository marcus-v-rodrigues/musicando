import React from 'react'
import * as S from "./styled"

const ProductWrapper = ({children}) => {

  return (
    <S.Wrapper>
        {children}
    </S.Wrapper>
  )
}

const ProductItem = ({id, image, name, price}) => {

    const locatedPrice = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    return (
      <S.Item to={`product/${id}`}>
          <S.ItemBackground>
              <S.ItemImage image={image}/>
          </S.ItemBackground>
          <S.ItemName>{name}</S.ItemName>
          <S.ItemPrice>{locatedPrice}</S.ItemPrice>
      </S.Item>
    )
  }

export {
    ProductWrapper, 
    ProductItem
}