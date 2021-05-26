import React from 'react'
import * as S from "./styled"
import {ProductWrapper, ProductItem} from 'components/Product' 

const items = [
  {
    id: 1,
    image: '/images/keyboard1.png',
    name: 'Teclado Casio',
    price: 'R$ 999,90'
  },
  {
    id: 2,
    image: '/images/keyboard2.png',
    name: 'Piano Digital',
    price: 'R$ 1320,90'
  },
  {
    id: 3,
    image: '/images/keyboard3.png',
    name: 'Teclado Arranjador',
    price: 'R$ 750,90'
  },
  {
    id: 4,
    image: '/images/keyboard4.png',
    name: 'Teclado Yamaha',
    price: 'R$ 2250,90'
  }
]

const Releases = () => {
    return (
        <S.Releases>
            <S.Wrapper>
                <S.Title>Novidades</S.Title>
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
        </S.Releases>
    );
}

export default Releases;