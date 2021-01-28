import React from 'react'
import Headshot from './Headshot.jpg'

function Head() {
  return (
    <div id="secel">
        <img src={Headshot} className="head"alt="Logo"/>
        <h1>hi, i'm Ivan!</h1>
        <hr id="line" width="700" />
        <a href="mailto:khurudzhi@wisc.edu"><button class="btn_contactMe">Contact Me</button></a>
        <a href="/resume.pdf" download><button class="btn_contactMe">My Resume</button></a>
        <p id="intro">I am a sophomore at the University of Wisconsin-Madison.<br />
          I am studying Computer Science and Mathematics.<br />
          My interests include:
          <ul>
            <li><em>data science</em></li>
            <li><em>machine learning</em></li>
            <li><em>software security</em></li>
            <li><em>software development</em></li>
          </ul>
        </p>
    </div>
  )
}

export default Head
