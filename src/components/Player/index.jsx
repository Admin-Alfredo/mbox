import React from 'react'
import { useState } from 'react'
import datas from '../../datas'
import ListMusicItemV from '../ListMusicItemV'
import FotoAlbum from '../../assets/album.png'
import { Container } from './styles'
import { WrapperListMusicV } from '../ListMusicItemV/styles'

export default function Player() {
  const [musicas, setMusicas] = useState(datas(FotoAlbum))
  return (
    <Container>
      <WrapperListMusicV style={{marginBottom: 65 + 116}}>
        {musicas.map((m, i) => (<ListMusicItemV key={i} musica={m} />))}
      </WrapperListMusicV>
    </Container>
  )
}
