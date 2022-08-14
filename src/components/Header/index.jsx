import React from 'react'
import UserImg from '../../assets/br.jpg'
import { FaSearch, FaBell } from 'react-icons/fa'
import {
  BarRight,
  Container,
  WrapperUserImage,
  IconItemLink
} from './styles'
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <Container>
      <WrapperUserImage>
        <img src={UserImg} alt="user" />
      </WrapperUserImage>
      <BarRight>
        <IconItemLink to='/'>
          <FaBell size={30}/>
        </IconItemLink>
        <IconItemLink to='/'>
          <FaSearch size={30} />
        </IconItemLink>
      </BarRight>
    </Container>
  )
}
