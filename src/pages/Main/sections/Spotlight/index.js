import React from 'react'
import * as S from "./styled"
import {ProductWrapper, ProductItem} from 'components/Product' 

const items = [
  {
    id: 1,
    image: '/images/guitar1.png',
    name: 'Guitarra Stratocaster',
    price: 'R$ 1060,00'
  },
  {
    id: 2,
    image: '/images/guitar2.png',
    name: 'Guitarra Land',
    price: 'R$ 2000,00'
  },
  {
    id: 3,
    image: '/images/guitar3.png',
    name: 'Guitarra Tagima',
    price: 'R$ 830,00'
  },
  {
    id: 4,
    image: '/images/guitar4.png',
    name: 'Guitarra Stinberg',
    price: 'R$ 1500,00'
  }
]

const Spotlight = () => {
    return (
        <S.Spotlight>
            <S.Wrapper>
                <S.Title>Destaques</S.Title>
                <ProductWrapper>
                    {items.map(item => (
                        <ProductItem 
                            key={item.id} 
                            image={item.image} 
                            name={item.name} 
                            price={item.price}
                        />
                    ))}
                </ProductWrapper>
            </S.Wrapper>
        </S.Spotlight>
    );
}

export default Spotlight;