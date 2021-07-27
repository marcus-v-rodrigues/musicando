import React from 'react'

import { Button } from 'components/Button'
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as S from './styled'

const UsersItem = ({ user }) => {

    return (
        <S.Wrapper>

            <S.Background>
                <S.Image image={user.picture}/>
            </S.Background>

            <S.Content>

                <S.Details>
                    <S.ItemInfo>ID: {user._id}</S.ItemInfo>
                    <S.ItemInfo>E-mail: {user.email}</S.ItemInfo>
                    <S.ItemInfo>
                        Admin: {user.isAdmin ? (
                                    <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }}/>
                                ) : (
                                    <FontAwesomeIcon icon={faTimesCircle} style={{ color: 'red' }}/>
                                )}
                    </S.ItemInfo>
                </S.Details>

                <S.Actions>
                    <Button onClick={() => alert('Função ainda não implementada')}>Remover</Button>
                    <Button onClick={() => alert('Função ainda não implementada')}>Editar</Button>
                </S.Actions>

            </S.Content>

        </S.Wrapper>
    )
}

export default UsersItem