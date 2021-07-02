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
            <S.Cart to={'/cart'}>
                <S.CartImage/>
                <S.CartCounter>1</S.CartCounter>
            </S.Cart>
            <S.Sign to={'/login'} >Entrar</S.Sign>
        </S.RightWrapper>
        
        <S.MobileWrapper>
          <S.CartMobile to={'/cart'}>
                  <S.CartImage/>
                  <S.CartCounter>1</S.CartCounter>
          </S.CartMobile>

          <S.Menu/>
        </S.MobileWrapper>

    </S.Navbar>
  )
}

export default Navbar