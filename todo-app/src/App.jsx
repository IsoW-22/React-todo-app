// import { useState } from 'react'
import './styles/App.Scss'
import Header from "./components/Header"
import Nav from "./components/nav"
import Todos from "./components/Todos"

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Todos />
    </>
  )
}

export default App