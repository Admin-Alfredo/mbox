import React, { useEffect } from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import DropdownListMusic from './components/DropdownListmMusic'
import FooterBar from './components/FooterBar'
import Header from './components/Header'
import Home from './components/Home'
import Player from './components/Player'
import PlayerControll from './components/PlayerControll'
export default function Router() {
  
  return (
    <BrowserRouter>
       <Header/>
       <PlayerControll/>
       <FooterBar/>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/player' element={<Player/>}/>
      </Routes>
    </BrowserRouter>
  )
}
