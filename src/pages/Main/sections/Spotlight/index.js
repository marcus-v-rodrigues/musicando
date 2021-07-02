import React from 'react'
import * as S from "./styled"
import ProductItem from '../../../../components/Product/ProductItem'
import ProductWrapper from '../../../../components/Product/ProductWrapper'

const Spotlight = ({items, title}) => {
    return (
        <S.Spotlight>
                <S.Title>{title}</S.Title>
                <ProductWrapper>
                    {items.map(item => (
                        <ProductItem 
                            key={item.id} 
                            product={item}
                        />
                    ))}
                </ProductWrapper>
        </S.Spotlight>
    )
}

export default Spotlight