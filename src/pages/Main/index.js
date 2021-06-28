import React from 'react'

import Hero from './sections/Hero'
import Spotlight from './sections/Spotlight'
import Image from '../../components/Image'

const Novidades = [
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

const Destaques = [
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

const Main = () => {
  return (
    <>
      <Hero/>
      <Spotlight title={'Novidades'} items={Novidades}/>
      <Image photo={1}/>
      <Spotlight title={'Destaques'} items={Destaques}/>
    </>
  )
}

export default Main
