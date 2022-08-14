import React, { useState, useCallback } from 'react'
import ListMusicItemH from '../ListMusicItemH'
import { ListMusicH, WrapperListMusicH } from '../ListMusicItemH/styles'
import { Title, Text } from '../Paragrafy'
import { Container, } from './styles'
import FotoAlbum from '../../assets/album.png'
import { WrapperListMusicV } from '../ListMusicItemV/styles'
import ListMusicItemV from '../ListMusicItemV'
import getDatas from '../../datas'

export default function Home() {
  const [musicas, setMusicas] = useState(getDatas(FotoAlbum))

  return (
    <Container>
      <Title>Suas Musicas</Title>
      <Text >Mais Tocadas</Text>
      <WrapperListMusicH>
        <ListMusicH >
          {musicas.map((m, i) => (<ListMusicItemH key={i} musica={m} />))}
        </ListMusicH>
      </WrapperListMusicH>
      <Text>Acessa as suas musicas.</Text>
      <WrapperListMusicV style={{marginBottom: 65 + 116}}>
        {musicas.map((m, i) => (<ListMusicItemV key={i} musica={m} />))}
      </WrapperListMusicV>
    </Container>
  )
}
