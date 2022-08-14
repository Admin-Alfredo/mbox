import React from 'react'
import { IconItemLink } from '../Header/styles'
import { FaUser, FaHeart, FaAlignJustify } from 'react-icons/fa'
import { Container } from './styles'
import { Heart, QueueMusic } from '../IconsPlayer'


export default function FooterBar() {
  return (
    <Container>
      <IconItemLink to='/' style={{ width: 'auto' }}><Heart /> </IconItemLink>
      <IconItemLink to='/' style={{ width: 'auto' }}><QueueMusic /></IconItemLink>
    </Container>
  )
}
