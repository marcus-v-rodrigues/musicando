import React from 'react'

import GlobalStyles from '../../styles/GlobalStyles'
import Navbar from '../Navbar'
import Footer from '../Footer'
import * as S from './styled'

const Layout = ({children}) => {

    return (
        <>
            <GlobalStyles/>
            <Navbar/>
            <S.Container>
                {children}
            </S.Container>
            <Footer/>
        </>
    )
}

export default Layout