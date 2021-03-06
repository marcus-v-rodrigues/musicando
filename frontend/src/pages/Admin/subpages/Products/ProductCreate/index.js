import React, { useState, useEffect } from 'react'
import PageContainer from 'components/Layout/PageContainer'
import Alert from 'components/Alert'
import * as S from 'pages/Login/styled'

import { useDispatch, useSelector } from 'react-redux'
import {  createProduct } from 'redux/actions/productActions'

const ProductCreate = ({ match, history }) => {

const productId = match.params.id

const [name, setName] = useState('')
const [price, setPrice] = useState(0)
const [rating, setRating] = useState(0)
const [image, setImage] = useState('')
const [brand, setBrand] = useState('')
const [category, setCategory] = useState('')
const [countInStock, setCountInStock] = useState(0)
const [description, setDescription] = useState('')

const dispatch = useDispatch()

const productCreate = useSelector((state) => state.productCreate)
const {
  error,
  success
} = productCreate

const userLogin = useSelector((state) => state.userLogin)
const { userInfo } = userLogin

useEffect(() => {
  if (success) {
    history.push('/admin/products')
  } 
}, [dispatch, history, success])

const submitHandler = (e) => {
  e.preventDefault()
  dispatch(
    createProduct({
      _id: productId,
      user: userInfo._id,
      name,
      price,
      rating,
      image,
      brand,
      category,
      description,
      countInStock,
    })
  )
}

    return (
        <PageContainer>
            <S.Title>Criar</S.Title>
            {error && <Alert>{error}</Alert>}
                <S.FormContainer name='form' onSubmit={submitHandler}>

                    <S.FormGroup>
                        <S.Label htmlFor="name">
                            Nome
                        <S.Field 
                            type="name" 
                            name="name" 
                            id="name"  
                            placeholder="Nome do produto" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        </S.Label>
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor="price">
                            Pre??o
                        <S.Field 
                            type="number" 
                            name="price" 
                            id="price"  
                            placeholder="Pre??o do produto" 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                        </S.Label>
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor="rating">
                            Avalia????o
                        <S.Field 
                            type="number" 
                            name="rating" 
                            id="rating"  
                            placeholder="Avalia????o do produto" 
                            value={rating}
                            min={0}
                            max={10}
                            onChange={(e) => setRating(e.target.value)}
                        />
                        </S.Label>
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor="image">
                            Imagem
                        <S.Field 
                            name="image" 
                            id="image"            
                            type='text'
                            placeholder='Enter image url'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                        </S.Label>
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor="brand">
                            Marca
                        <S.Field 
                            type="text" 
                            name="brand" 
                            id="brand"  
                            placeholder="Marca do produto" 
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            required
                        />
                        </S.Label>
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor="category">
                            Categoria
                            <S.SelectField value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option value="Acess??rios">Acess??rios</option>
                                <option value="??udio">??udio</option>
                                <option value="Cordas">Cordas</option>
                                <option value="Percuss??o">Percuss??o</option>
                                <option value="Teclas">Teclas</option>
                                <option value="Sopro">Sopro</option>
                                <option value="Piano">Piano</option>
                            </S.SelectField>
                        </S.Label>
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor="description">
                            Descri????o
                        <S.Field 
                            type="textArea" 
                            name="description" 
                            id="description"  
                            placeholder="Descri????o do produto" 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                        </S.Label>
                    </S.FormGroup>

                    <S.FormGroup>
                        <S.Label htmlFor="stock">
                            Estoque
                        <S.Field 
                            type="number" 
                            name="stock" 
                            id="stock"  
                            placeholder="Estoque do produto" 
                            value={countInStock}
                            min={0}
                            onChange={(e) => setCountInStock(e.target.value)}
                            required
                        />
                        </S.Label>
                    </S.FormGroup>

                    <S.LoginWrapper>
                        <S.Button type='submit'>Criar</S.Button>
                    </S.LoginWrapper>

                </S.FormContainer>
        </PageContainer>
    )
}

export default ProductCreate