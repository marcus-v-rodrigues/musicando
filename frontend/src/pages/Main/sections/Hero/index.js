import React from 'react'

import * as S from './styled'

const Hero = () => {

  return (
    <S.Hero>
        <S.WrapperAction>
            <S.Title>Guitarra Les Paul</S.Title>
            <S.Button to='/product/60fe1959abdc171cc455ff79'>Comprar Agora ❯</S.Button>
        </S.WrapperAction>
    </S.Hero>
  )
}

export default Hero