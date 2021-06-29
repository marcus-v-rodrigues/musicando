import React from 'react'
import * as S from "./styled"

import links from './links'

const Navbar = () => {

  return (
    <S.Navbar>

        <S.Logo to={'/'}/>

        <S.MenuWrapper>
          {links.map((link, index) => (
            <S.MenuButton to={link.url}>{link.label}</S.MenuButton>
          ))}
        </S.MenuWrapper>

        <S.RightWrapper>    
            <S.Sign to={'/login'} >Entrar</S.Sign>
        </S.RightWrapper>

        <S.Menu/>

    </S.Navbar>
  )
}

export default Navbar