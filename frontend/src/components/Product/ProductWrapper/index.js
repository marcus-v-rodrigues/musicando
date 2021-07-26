import React from 'react'
import * as S from "./styled"

const ProductWrapper = ({children}) => {

    return (
      <S.Wrapper>
          {children}
      </S.Wrapper>
    )
}

export default ProductWrapper