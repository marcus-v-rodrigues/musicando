import React from 'react'
import * as S from "./styled"

const Navbar = () => {

  return (
    <S.Navbar>

        <S.Logo href={'/'}/>

        <S.MenuWrapper>  
            <S.Menu>Acessórios</S.Menu>
            <S.Menu>Áudio</S.Menu>
            <S.Menu>Cordas</S.Menu>
            <S.Menu>Percussão</S.Menu>
            <S.Menu>Teclas</S.Menu>
            <S.Menu>Sopro</S.Menu>
            <S.Menu>Pianos</S.Menu>
        </S.MenuWrapper>

        <S.RightWrapper>    
            <S.Sign to={'/login'} >Cadastre-se</S.Sign>
            <p>ou</p>
            <S.Sign to={'/login'} >Entrar</S.Sign>
        </S.RightWrapper>

    </S.Navbar>
  )
}

export default Navbar