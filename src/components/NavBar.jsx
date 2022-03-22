import React from 'react'
import './navbar.css'
const NavBar = (props) => {
  return (
    <nav>
    <img src={'../public/Images/logo-psycare.png'} alt="" />
    <h1>{props.text}</h1>
    <div>
      <a href="/">LogOut</a>
    </div>
  </nav>
  )
}

export default NavBar