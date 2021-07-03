import React, { useState, useEffect } from 'react'

import { ButtonLink } from 'components/Button'

import * as S from "./styled"

import links from './links'

import { connect } from 'react-redux'

const Navbar = ({ cart }) => {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity
    })

    setCartCount(count)
  }, [cart, cartCount])

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
                <S.CartCounter>{cartCount}</S.CartCounter>
            </S.Cart>
            <ButtonLink to={'/login'}>Entrar</ButtonLink>
        </S.RightWrapper>
        
        <S.MobileWrapper>
          <S.CartMobile to={'/cart'}>
                  <S.CartImage/>
                  <S.CartCounter>{cartCount}</S.CartCounter>
          </S.CartMobile>

          <S.Menu/>
        </S.MobileWrapper>

    </S.Navbar>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  }
}

export default connect(mapStateToProps)(Navbar)