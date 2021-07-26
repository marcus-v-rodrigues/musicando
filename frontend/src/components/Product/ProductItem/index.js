import React from 'react'
import * as S from "./styled"

// Redux
import { connect } from "react-redux"
import {
  loadCurrentItem,
} from "../../../redux/actions/cartActions"

const ProductItem = ({ product, loadCurrentItem }) => {

    const locatedPrice = product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    return (
      <S.Item to={`product/${product.id}`} onClick={() => loadCurrentItem(product)}>
        <S.ItemBackground>
            <S.ItemImage image={product.image}/>
        </S.ItemBackground>
        <S.ItemName>{product.name}</S.ItemName>
        <S.ItemPrice>{locatedPrice}</S.ItemPrice>
      </S.Item>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  }
}

export default connect(null, mapDispatchToProps)(ProductItem)