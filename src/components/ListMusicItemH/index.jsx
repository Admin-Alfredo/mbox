import React from 'react'
import { Container, Descritions, SubTitle, TimeTemp, WrapperImage } from './styles'

export default function ListMusicItemHorinontal(props) {
  const { title, author, duration, foto_album } = props.musica
  function formatMinute(_duration) {
    const minutos = _duration / 60
    const segundo_string = minutos.toString().match(/\.(\d+)$/)
    if(segundo_string){
      const segundos_parsed = parseInt(segundo_string[1].slice(0, 2))
      if(segundos_parsed  >= 60){
        const novo_segundos = (segundos_parsed / 60).toString().match(/\.(\d+)$/)
        if(novo_segundos){
          return `${Math.round(minutos)} min ${novo_segundos} s`
        }else{
          return `${Math.round(minutos)} min ${segundos_parsed} s`
        }
      }else{
        return `${Math.round(minutos)} min ${segundos_parsed} s`
      }
    }else{
      return `${Math.round(minutos)} min ${0} s`
    }
  }
  
  return (
    <Container>
      <WrapperImage>
        <img src={foto_album}/>
      </WrapperImage>
      <Descritions>
        <SubTitle>{title}</SubTitle>
        <TimeTemp>
         {formatMinute(duration)}
        </TimeTemp>
      </Descritions>
    </Container>
  )
}
