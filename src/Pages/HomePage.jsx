import React from 'react'
import NavBar from '../components/NavBar'
import './homepage.css'
const HomePage = () => {
  return (<div>
      <NavBar text="PsyCare"/>
    <section>
      <div class="left">
        <h2>Before they sold out readymade gluten</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          fugiat aliquid rem est culpa voluptatem molestiae molestias, aliquam
          natus doloribus vel sint earum nobis rerum doloremque! Ab ut
          temporibus incidunt!
        </p>
        <div class="buttons">
          <a href="/">Login</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
      <div class="right">
        <img src="//unsplash.it/600/600" alt="" />
      </div>
    </section>
    </div>
  )
}

export default HomePage