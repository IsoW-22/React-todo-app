// import { useState } from 'react'
import './styles/App.Scss'
import Header from "./components/Header"
import Todos from "./components/Body"

function App() {
  return (
    <>
      <Header />
      <Todos />
    </>
  )
}

export default App