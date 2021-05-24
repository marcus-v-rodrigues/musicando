import React from 'react'
import * as S from "./styled"

const Image = ({photo}) => {

    return (
      <S.Image image={`/images/bigphoto${photo}.png`}></S.Image>
    )
}

export default Image