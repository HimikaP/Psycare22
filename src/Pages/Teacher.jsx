import React from 'react'
import BarChart from '../components/BarChart'

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import './teacher.css'


const Teacher = () => {
  return (
    <div>
      <NavBar text="Teacher DashBoard" />
      <SideBar />
      
      <section className='small-section'><BarChart /></section>
      <section className='small-section'>sdafsadfsadfas</section>

      <Footer style={{marginLeft:"20vw",width:"80vw"}}/>
    </div>
  )
}

export default Teacher