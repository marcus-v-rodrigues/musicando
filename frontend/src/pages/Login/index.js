import React, { useState, useEffect } from 'react'
import PageContainer from '../../components/Layout/PageContainer'
import Alert from '../../components/Alert'
import * as S from './styled'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/userActions'

const Login = ({ location, history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
        history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if (email && password) {
            // get return url from location state or default to home page
            dispatch(login(email, password))
        }
    }

    return (
        <PageContainer>
            <S.Title>Login</S.Title>
            {error && <Alert>{error}</Alert>}
            <S.FormBackground>
                <S.FormWrapper name='form' onSubmit={submitHandler}>

                    <S.FormGroup>
                        <S.Label htmlFor="email">
                            Email
                        <S.Field 
                            type="email" 
                            name="email" 
                            id="email"  
                            placeholder="email@dominio.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </S.Label>
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor="password">
                            Senha
                        <S.Field 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Sua senha" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        </S.Label>
                    </S.FormGroup>

                    <S.LoginWrapper>
                    
                        <S.RegisterWrapper>
                        Novo cliente?{'   '}
                            <S.RegisterLink to={'/register'}>
                                Registre-se
                            </S.RegisterLink>
                        </S.RegisterWrapper> 

                        <S.Button type='submit'>Entrar</S.Button>
                    </S.LoginWrapper>

                </S.FormWrapper>
            </S.FormBackground>
        </PageContainer>
    )
    }

export default Login
