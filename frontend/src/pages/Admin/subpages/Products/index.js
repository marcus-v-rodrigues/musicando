import React, { useEffect } from 'react'

import { ButtonLink } from 'components/Button'
import Alert from 'components/Alert'
import PageContainer from '../../../../components/Layout/PageContainer'
import ProductsItem from './ProductsItem'

import { useDispatch, useSelector } from 'react-redux'
import { listProducts, deleteProduct, createProduct } from 'redux/actions/productActions'
import { PRODUCT_CREATE_RESET } from 'redux/constants/productConstants'

import * as S from './styled'

const Products = ({ history, match }) => {

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products, page, pages } = productList

    const productDelete = useSelector((state) => state.productDelete)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = productDelete

    const productCreate = useSelector((state) => state.productCreate)
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        product: createdProduct,
    } = productCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET })

        if (!userInfo || !userInfo.isAdmin) {
        history.push('/login')
        }

        if (successCreate) {
        history.push(`/admin/product/${createdProduct._id}/edit`)
        } else {
        dispatch(listProducts('', pageNumber))
        }
    }, [
        dispatch,
        history,
        userInfo,
        successDelete,
        successCreate,
        createdProduct,
        pageNumber,
    ])

    const deleteHandler = (id) => {
        if (window.confirm('Tem certeza?')) {
        dispatch(deleteProduct(id))
        }
    }

    const createProductHandler = () => {
        dispatch(createProduct())
    }


    return (
        <PageContainer>
            <S.Title>Produtos</S.Title>
            {error && <Alert>{error}</Alert>}
            <S.Container>
                <S.Wrapper>
                    {products && products.map((product) => (
                        <ProductsItem onDelete={() => deleteHandler(product._id)} key={product._id} product={product} />
                    ))}
                </S.Wrapper>

                <S.Panel>
                    <S.PanelTitle>Cadastrar novo produto</S.PanelTitle>
                    <ButtonLink to={'/register'}>Cadastrar</ButtonLink>
                </S.Panel>
            </S.Container>
        </PageContainer>
    )
}

export default Products