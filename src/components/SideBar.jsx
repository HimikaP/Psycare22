import React from 'react'
import './sidebar.css'
import StudentCard from './StudentCard'
import students from '../Data'
const SideBar = () => {
  return (
    <div className='sidebar'>
        <h2>Students</h2>
        {students.map((student)=> {
           return <StudentCard name={student.name} grade={student.class} />
        } )}

    </div>
  )
}

export default SideBar