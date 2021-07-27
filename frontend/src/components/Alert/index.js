import React, { useState } from 'react'
import * as S from './styled'

const Alert = ({children}) => {

    const [showAlert, setShowAlert] = useState(true)
    const onClick = () => setShowAlert(false)
    return (
        <>
            {showAlert && (
                <S.Box>
                    <S.Close onClick={onClick}>&times;</S.Close> 
                    <strong>Atenção! </strong> {children}
                </S.Box>
            )}
        </>
    )
} 

export default Alert
