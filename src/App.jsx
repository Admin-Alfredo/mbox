import { useState } from 'react'
import Header from './components/Header'
import Router from './Router'
import { GlobalStyles } from './styles/global'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router/>
      <GlobalStyles/>
    </>

  )
}

export default App
