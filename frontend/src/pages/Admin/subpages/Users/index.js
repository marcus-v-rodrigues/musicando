import React, { useEffect } from 'react'

import { ButtonLink } from 'components/Button'
import Alert from '../../../../components/Alert'
import PageContainer from 'components/Layout/PageContainer'
import UsersItem from './UsersItem'

import { useDispatch, useSelector } from 'react-redux'
import { listUsers, deleteUser } from 'redux/actions/userActions'

import * as S from './styled'

const Users = ({ history }) => {

    const dispatch = useDispatch()

    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector((state) => state.userDelete)
    const { success: successDelete } = userDelete

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers())
        } else {
            history.push('/')
        }
    }, [dispatch, history, userInfo, successDelete])

    const deleteHandler = (id) => {
        if (window.confirm('Tem certeza?')) {
          dispatch(deleteUser(id))
        }
      }

    return (
        <PageContainer>
            <S.Title>Usuários</S.Title>
            {error && <Alert>{error}</Alert>}
            <S.Container>
                <S.Wrapper>
                    {users && users.map((user) => (
                        <UsersItem onDelete={() => deleteHandler(user._id)} key={user._id} user={user} />
                    ))}
                </S.Wrapper>

                <S.Panel>
                    <S.PanelTitle>Cadastrar novo usuário</S.PanelTitle>
                    <ButtonLink to={'/register'}>Cadastrar</ButtonLink>
                </S.Panel>
            </S.Container>
        </PageContainer>
    )
}

export default Users