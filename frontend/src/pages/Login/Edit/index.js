import React, { useState, useEffect } from 'react'
import PageContainer from '../../../components/Layout/PageContainer'
import Alert from '../../../components/Alert'
import * as S from '../styled'

import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUser } from 'redux/actions/userActions'
import * as userConstants from 'redux/constants/userConstants'

const Edit = ({ match, history }) => {

    const userId = match.params.id

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: userConstants.USER_UPDATE_RESET })
      history.push('/admin/users')
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }
  }, [dispatch, history, userId, user, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser({ _id: userId, name, email, isAdmin }))
  }

    return (
        <PageContainer>
            <S.Title>Editar</S.Title>
            {error && <Alert>{error}</Alert>}
            {errorUpdate && <Alert>{errorUpdate}</Alert>}
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
                        <S.Label htmlFor="isadmin">
                            É admin
                        <S.CheckField 
                            type="checkbox" 
                            name="isadmin" 
                            id="isadmin" 
                            label="É admin" 
                            checked={isAdmin}
                            onChange={(e) => setIsAdmin(e.target.checked)}
                        />
                        </S.Label>
                    </S.FormGroup>

                    <S.LoginWrapper>
                        <S.Button type='submit'>Registrar</S.Button>
                    </S.LoginWrapper>

                </S.FormWrapper>
            </S.FormBackground>
        </PageContainer>
    )
}

export default Edit