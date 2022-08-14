import React from 'react'
import { Title } from '../Paragrafy'
import FotoAlbum from '../../assets/album.png'
import {
  Container,
  WrapperImage,
  WrapperRight,
  Descritions,
  Controls,
  ButtonFav,
  TitleMusic,
  AuthorMussic
} from './styles'

import { Button, ButtonLink } from '../Forms'
export default function ListMusicItemV(props) {
  const { author, title } = props.musica
  return (
    <Container>
      <WrapperImage>
        <img src={FotoAlbum} alt="" />
      </WrapperImage>
      <WrapperRight>
        <Descritions>
          <TitleMusic>{title}</TitleMusic>
          <AuthorMussic>{author}</AuthorMussic>
        </Descritions>
        <Controls>
          <ButtonLink to="/" >Reproduzir</ButtonLink>
          <ButtonFav> Favoritar </ButtonFav>
        </Controls>
      </WrapperRight>
    </Container>
  )
}
