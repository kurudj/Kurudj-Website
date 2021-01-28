import React from 'react'
import "./App.css"
import Head from './Head'
import Middle from './Middle'
import Foot from './Foot'
import Bottom from './Bottom'
import Contact from './Contact'
import Spotify from './Spotify.png'
import Linkedin from './Linkedin.png'
import Github from './Github.png'

function App() {
  return (
    <div>
        <div id="up">
          <Contact imglink="https://open.spotify.com/artist/6iATYLZDwhVkfB3HAzBy2d?si=D1l17Du6QHSfOZBnoposZg" clss="splogos" source={Spotify} alter="Spotify"/>
          <Contact imglink="https://www.linkedin.com/in/ivankhurudzhi/" clss="linlogos" source={Linkedin} alter="Linkedin"/>
          <Contact imglink="https://github.com/kurudj" clss="gitlogos" source={Github} alter="Github"/>
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
