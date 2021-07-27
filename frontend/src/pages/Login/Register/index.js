import React, { useState, useEffect } from 'react'
import PageContainer from '../../components/Layout/PageContainer'
import * as S from './styled'

import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../redux/actions/userActions'

const Register = ({ location, history }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
        history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
        setMessage('Senhas não coincidem')
        } else {
        dispatch(register(name, email, password))
        }
    }

    return (
        <PageContainer>
            <S.Title>Registrar</S.Title>
            {error && <S.Title>{error}</S.Title>}
            <S.FormBackground>
                <S.FormWrapper name='form' onSubmit={submitHandler}>

                    <S.FormGroup>
                        <S.Label htmlFor="name">
                            Nome
                        <S.Field 
                            type="name" 
                            name="name" 
                            id="name"  
                            placeholder="Seu nome" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        </S.Label>
                    </S.FormGroup>

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
                        />
                        </S.Label>
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor="confirmPassword">
                            Confirmar Senha
                        <S.Field 
                            type="password" 
                            name="confirmPassword" 
                            id="confirmPassword" 
                            placeholder="Sua senha" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        </S.Label>
                    </S.FormGroup>

                    <S.LoginWrapper>
                        <S.Button type='submit'>Entrar</S.Button>
                    </S.LoginWrapper>

                </S.FormWrapper>
            </S.FormBackground>
        </PageContainer>
    )
}

export default Register
