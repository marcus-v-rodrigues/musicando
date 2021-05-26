import React from 'react'

import Hero from './sections/Hero'
import Releases from './sections/Releases'
import Spotlight from './sections/Spotlight'
import Image from '../../components/Image'

const Main = () => {
  return (
    <>
      <Hero/>
      <Releases/>
      <Image photo={1}/>
      <Spotlight/>
    </>
  )
}

export default Main
