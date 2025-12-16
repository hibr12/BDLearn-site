import React from 'react'
import './programs.css'
import program1 from '../../assets/program1.png'
import program2 from '../../assets/program2.png'
import program3 from '../../assets/program3.png'
const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program1} alt="image not found" />
            </div>
            <div className="program">
            <img src={program2} alt="image not found" />
            </div>
            <div className="program">
            <img src={program3} alt="image not found" />
            </div>
        
    </div>
  )
}

export default Programs