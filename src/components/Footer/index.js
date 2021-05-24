import React from 'react'
import * as S from "./styled"

const Footer = () => {

    return (
        <S.Footer>
            <S.Upper>
                <S.Column>
                    <S.Title>Produtos</S.Title>
                    <S.Item>Acessórios</S.Item>
                    <S.Item>Áudio</S.Item>
                    <S.Item>Cordas</S.Item>
                    <S.Item>Percussão</S.Item>
                    <S.Item>Teclas</S.Item>
                    <S.Item>Sopro</S.Item>
                    <S.Item>Pianos</S.Item>
                </S.Column>
                <S.Column>
                    <S.Title>Suporte</S.Title>
                    <S.Item>Atendimento ao Cliente</S.Item>
                    <S.Item>Dúvidas frequentes</S.Item>
                    <S.Item>Como comprar</S.Item>
                    <S.Item>Entregas e Frete</S.Item>
                    <S.Item>Troca e devolução</S.Item>
                </S.Column>
                <S.Column>
                    <S.Title>Empresa</S.Title>
                    <S.Item>Quem somos?</S.Item>
                    <S.Item>Carreiras</S.Item>
                    <S.Item>Imprensa</S.Item>
                    <S.Item>Produtos</S.Item>
                </S.Column>
                <S.Column>
                    <S.Title>Privacidade e Termos</S.Title>
                    <S.Item>Termos e condições de navegação</S.Item>
                    <S.Item>Políticas de Privacidade</S.Item>
                </S.Column>

                <S.Payment>
                    <p>Formas de pagamento</p>
                    <S.Mastercard/>
                    <S.Visa/>
                    <S.Elo/>
                    <S.Pix/>
                    <S.Boleto/>
                </S.Payment>
            </S.Upper>
            <S.Bottom>
                <S.Brazil/>
                <S.Description>
                    Musicando LTDA - CNPJ/MF nº 03.266.470/0001-90 Inscrição Estadual 559.206.931.274<br/>
                    Endereço: Rua Santa Quitéria, Santa Mônica - Galpão 1 - Camaragibe/PE, CEP 54767-260<br/>
                    Atendimento ao cliente: atendimentoaocliente@musicando.com | 0800 5698 1234
                </S.Description>
            </S.Bottom>
        </S.Footer>
    )
}

export default Footer