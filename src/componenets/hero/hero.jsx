import React from 'react'
import './hero.css'
import darkarrow from '../../assets/darkarrow.png'
const Hero = () => {
  return (

    <div className='hero'>
        <div className="text-container">
        <div className="hero-text">
            <h1 className='topic'>we ensure better education for a better wolrd</h1>
            <p className='discription'>our cutting-edge curriculem is desinged to empower students with the knowledge,skills and experiance needed to excel in the dynamic field of education </p>
            <button className='btn'>explore more <img src={darkarrow} alt="image not found" /></button>
            </div>
        </div>
    </div>
  )
}

export default Hero