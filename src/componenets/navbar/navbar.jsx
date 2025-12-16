import React, { useEffect, useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
    const [steky,setsteky]=useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>50?setsteky(true):setsteky(false)

        })
    },[])
  return (
    <nav className={`container ${steky? 'dark-nav':''}`}>
        <img src={logo} alt="the image not found" className='logo' />
        <ul>
            <li>HOME</li>
            <li>Program</li>
            <li>About us</li>
            <li>campus</li>
            <li>testimonials</li>
            <li> <button className='btn'>contact us</button> </li>
        </ul>
    </nav>
  )
}

export default Navbar