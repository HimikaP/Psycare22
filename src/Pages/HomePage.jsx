import React from 'react'
import NavBar from '../components/NavBar'
import './homepage.css'
const HomePage = () => {
  return (<div>
      <NavBar text="PsyCare"/>
    <section>
      <div class="left">
        <h2>PsyCare</h2>
        <p>
          Paving the path for towards inclusive technology , better adaptability and fostering an overall holsitic approach to tech
        </p>
        <div class="buttons">
          <a href="/who">Login</a>
          <a href="/who">Sign Up</a>
        </div>
      </div>
      <div class="right">
        <img src="//unsplash.it/500/500" alt="" />
      </div>
    </section>
    </div>
  )
}

export default HomePage