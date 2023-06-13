// import { useState } from 'react'
import "../public/styles/styles.css"
import Header from "./components/Header"
import Todos from "./components/Body"
import { useState } from "react"

function App() {
  const [showNav, SetShowNav] = useState(true);
  function changeNavShow() {
    showNav ? SetShowNav(false) : SetShowNav(true);
    console.log(showNav);
  }
  return (
    <>
      <Header
        css={ "relative" } 
        showNav= { showNav }
        onclick= {changeNavShow}
      />
      <Todos 
        showNav={showNav}
        onclick={changeNavShow}
      />
    </>
  )
}

export default App