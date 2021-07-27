import React, { useEffect } from 'react'

import Hero from './sections/Hero'
import Spotlight from './sections/Spotlight'
import Image from '../../components/Image'

//import products from '../../data/products'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../redux/actions/productActions'

const Main = () => {

  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { products } = productList

  useEffect(() => {
      dispatch(listProducts())
  }, [dispatch])

  const isNew = product => product.category === 'Teclas'
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

export default Main
