import React from 'react'
import * as S from "./styled"
import {ProductWrapper, ProductItem} from 'components/Product' 

const Spotlight = ({items, title}) => {
    return (
        <S.Spotlight>
                <S.Title>{title}</S.Title>
                <ProductWrapper>
                    {items.map(item => (
                        <ProductItem 
                            key={item.id} 
                            id={item.id} 
                            image={item.image} 
                            name={item.name} 
                            price={item.price}
                        />
                    ))}
                </ProductWrapper>
        </S.Spotlight>
    )
}

export default Spotlight