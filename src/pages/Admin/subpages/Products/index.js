import React from 'react'
import { connect } from 'react-redux'

import { Button } from 'components/Button'
import PageContainer from '../../../../components/Layout/PageContainer'
import ProductsItem from './ProductsItem'

import * as S from './styled'

const Products = ({ products }) => {
    return (
        <PageContainer>
            <S.Title>Produtos</S.Title>

            <S.Container>
                <S.Wrapper>
                    {products.map((product) => (
                        <ProductsItem key={product.id} product={product} />
                    ))}
                </S.Wrapper>

                <S.Panel>
                    <S.PanelTitle>Criar novo produto</S.PanelTitle>
                    <Button onClick={() => alert('Função ainda não implementada')}>Criar</Button>
                </S.Panel>
            </S.Container>
           
        </PageContainer>
    )
}

const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
    }
}

export default connect(mapStateToProps)(Products)