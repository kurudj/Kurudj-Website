import React from 'react'
import "./App.css"
import Head from './Head'
import Middle from './Middle'
import Foot from './Foot'
import Bottom from './Bottom'
import Spotify from './Spotify.png'
import Linkedin from './Linkedin.png'
import Github from './Github.png'

function App() {
  return (
    <div>
        <div id="up">
          <img src={Spotify} className="splogos" alt="Spotify" />
          <img src={Linkedin} className="linlogos" alt="Linkedin"/>
          <img src={Github} className="gitlogos" alt="Github"/>
          <p id="title">this is my personal website</p>
        </div>
        <Head />
        <Middle />
        <Foot />
        <Bottom />
    </div>
  )
}

export default App
