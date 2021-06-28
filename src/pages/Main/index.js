import React from 'react'

import Hero from './sections/Hero'
import Spotlight from './sections/Spotlight'
import Image from '../../components/Image'

const Novidades = [
  {
    id: 1,
    image: '/images/keyboard1.png',
    name: 'Teclado Casio',
    price: '999.90'
  },
  {
    id: 2,
    image: '/images/keyboard2.png',
    name: 'Piano Digital',
    price: '1320.90'
  },
  {
    id: 3,
    image: '/images/keyboard3.png',
    name: 'Teclado Arranjador',
    price: '750.90'
  },
  {
    id: 4,
    image: '/images/keyboard4.png',
    name: 'Teclado Yamaha',
    price: '2250.90'
  }
]

const Destaques = [
  {
    id: 1,
    image: '/images/guitar1.png',
    name: 'Guitarra Stratocaster',
    price: '1060.00'
  },
  {
    id: 2,
    image: '/images/guitar2.png',
    name: 'Guitarra Land',
    price: '2000.00'
  },
  {
    id: 3,
    image: '/images/guitar3.png',
    name: 'Guitarra Tagima',
    price: '830.00'
  },
  {
    id: 4,
    image: '/images/guitar4.png',
    name: 'Guitarra Stinberg',
    price: '1500.00'
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
