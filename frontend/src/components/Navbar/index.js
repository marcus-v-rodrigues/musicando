import React, { useState, useEffect } from 'react'

import { ButtonLink, Button } from 'components/Button'

import * as S from "./styled"

import links from './links'

import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/actions/userActions'

const Navbar = () => {

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.quantity
    })

    setCartCount(count)
  }, [cartItems, cartCount])


  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <S.Navbar>

        <S.Logo to={'/'}/>

        <S.MenuWrapper>
          {links.map((link, index) => (
            <S.MenuButton to={link.url}>{link.label}</S.MenuButton>
          ))}
        </S.MenuWrapper>

        <S.RightWrapper userInfo={userInfo}>
            <S.Cart to={'/cart'}>
                <S.CartImage/>
                <S.CartCounter>{cartCount}</S.CartCounter>
            </S.Cart>
            {userInfo ? (
              <>
                <S.NameUser>{userInfo.name}</S.NameUser>
                <Button onClick={logoutHandler}>Logout</Button>
              </>
            ) : (
              <ButtonLink to={'/login'}>Entrar</ButtonLink>
            )}
            
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

export default Navbar