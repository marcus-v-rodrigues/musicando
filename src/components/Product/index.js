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
          <S.ItemText>{name}</S.ItemText>
          <S.ItemText>{price}</S.ItemText>
      </S.Item>
    )
  }

export {
    ProductWrapper, 
    ProductItem
}