import React from 'react'
import PageContainer from '../../components/Layout/PageContainer'
import * as S from './styled'

const Login = () => {
  return (
    <PageContainer>
        <S.Title>Login</S.Title>
        <S.FormBackground>
            <S.FormWrapper>

                <S.FormGroup>
                    <S.Label for="email">
                        Email
                    <S.Field type="email" name="email" id="email"  placeholder="email@dominio.com" />
                    </S.Label>
                </S.FormGroup>

                <S.FormGroup>
                    <S.Label for="password">
                        Senha
                    <S.Field type="password" name="password" id="password" placeholder="Sua senha" />
                    </S.Label>
                </S.FormGroup>

                <S.LoginWrapper>
                    <S.ForgotPassword href='#'>
                            Esqueceu sua senha?
                    </S.ForgotPassword>

                    <S.Button href="/parent">Entrar</S.Button>
                </S.LoginWrapper>

            </S.FormWrapper>
        </S.FormBackground>
    </PageContainer>
  )
}

export default Login
