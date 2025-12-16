import React from 'react'
import './about.css'
import about from '../../assets/about.png'
import playicon from '../../assets/playicon.png'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about} alt="image not found" />
            <img src={playicon} alt="image not found" className='playicon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing tomorrow's leader's today</h2>
            <p>
                Embark on a transformative educational journy with our
                 universities comprehensive educational programs. our
                  cuttting-edge curriculem is designed to empower student's
                   with teh knoledge,skill and experiances needed to excel in 
                   the dynamic field of education.   
            </p>
            <p>with a focus on innovation, hand's on learning and personalized 
                mentorship,our programs prepare aspiring educators to make a 
                meaningfull impact in classroom,schools and communities.</p>
             <p>wether you aspire to become a teacher,administrator,counselor,or
                 educational leader,our diverse range of programs offers the perffect 
                 pathway to achieve your goals and unlock your full potential in shaping 
                 the future of education.</p>
        </div>
    </div>
  )
}

export default About