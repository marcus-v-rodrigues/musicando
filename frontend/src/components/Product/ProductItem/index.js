import React from 'react'
import * as S from "./styled"

// Redux

const ProductItem = ({ product }) => {

    const locatedPrice = product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    return (
      <S.Item to={`product/${product._id}`}>
        <S.ItemBackground>
            <S.ItemImage image={product.image}/>
        </S.ItemBackground>
        <S.ItemName>{product.name}</S.ItemName>
        <S.ItemPrice>{locatedPrice}</S.ItemPrice>
      </S.Item>
    )
}

export default ProductItem