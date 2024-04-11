import React from 'react'
import './MainPage.css'
import { Link } from 'react-router-dom'



export const MainPage = () => {
  return (
    <div >
      <header>
     <marquee> <img src="/images/logo.webp" alt="" /></marquee>
      </header>
      <div className="list">
      <ul>
        
        <li><Link to="/Admin">Admin</Link></li>
        <li><Link to="/Hr">Hr</Link></li>
        <li><Link to="/Student">Student</Link></li>
        <li><Link to="/Employe">Employe</Link></li>
        <li><Link to="/Finance">Finance</Link></li>
        <li><Link to="/">Home</Link></li>
      </ul>
      </div>
      
    </div>
  )
}
