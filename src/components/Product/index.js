import React from 'react'
import * as S from "./styled"

const ProductWrapper = ({children}) => {

  return (
    <S.Wrapper>
        {children}
    </S.Wrapper>
  )
}

const ProductItem = ({image, name, price}) => {

    return (
      <S.Item>
          <S.ItemBackground>
              <S.ItemImage image={image}/>
          </S.ItemBackground>
          <S.ItemName>{name}</S.ItemName>
          <S.ItemPrice>R$ {price}</S.ItemPrice>
      </S.Item>
    )
  }

export {
    ProductWrapper, 
    ProductItem
}