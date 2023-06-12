// import { useState } from 'react'
import "../public/styles/styles.css"
import Header from "./components/Header"
import Todos from "./components/Body"

function App() {
  return (
    <>
      <Header
        css={
          ""
        } 
      />
      <Todos />
    </>
  )
}

export default App