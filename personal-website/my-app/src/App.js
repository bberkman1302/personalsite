import React from 'react'
import Intro from "./Components/Introduction/Intro"
import About from "./Components/Project/Project"
import Contact from "./Components/Contact/Contact"
import "./App.css";
import Nav from "./Components/Nav"


const App = () => {
  return (
    <div className = "App">
      <Nav></Nav>
      <div className = "Main">

        <div id = "Intro">
          <Intro></Intro>
        </div>

        <div id = "Project">
          <About></About>
        </div>

        <div id = "Contact">
          <Contact></Contact>
        </div>
      </div>
    </div>
  )
}

export default App


