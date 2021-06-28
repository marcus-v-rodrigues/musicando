import React from 'react'
import * as S from "./styled"

const Navbar = () => {

  return (
    <S.Navbar>

        <S.Logo href={'/'}/>

        <S.MenuWrapper>  
            <S.MenuButton>Acessórios</S.MenuButton>
            <S.MenuButton>Áudio</S.MenuButton>
            <S.MenuButton>Cordas</S.MenuButton>
            <S.MenuButton>Percussão</S.MenuButton>
            <S.MenuButton>Teclas</S.MenuButton>
            <S.MenuButton>Sopro</S.MenuButton>
            <S.MenuButton>Pianos</S.MenuButton>
        </S.MenuWrapper>

        <S.RightWrapper>    
            <S.Sign to={'/login'} >Cadastre-se</S.Sign>
            <p>ou</p>
            <S.Sign to={'/login'} >Entrar</S.Sign>
        </S.RightWrapper>

        <S.Menu/>

    </S.Navbar>
  )
}

export default Navbar