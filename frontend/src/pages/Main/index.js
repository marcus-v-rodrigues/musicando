import React from 'react'

import Hero from './sections/Hero'
import Spotlight from './sections/Spotlight'
import Image from '../../components/Image'

//import products from '../../data/products'

// Redux
import { connect } from 'react-redux'

const Main = ({ products }) => {
  const isNew = product => product.id >= 19
  const novidades = products.filter(isNew)

  const isGood = product => product.category === 'Cordas'
  const destaques = products.filter(isGood)

  return (
    <>
      <Hero/>
      <Spotlight title={'Novidades'} items={novidades}/>
      <Image photo={1}/>
      <Spotlight title={'Destaques'} items={destaques}/>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(Main)
