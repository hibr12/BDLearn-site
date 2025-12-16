import React from 'react'
import './campus.css'
import gallery1 from '../../assets/gallery1.png'
import gallery2 from '../../assets/gallery2.png'
import gallery3 from '../../assets/gallery3.png'
import gallery4 from '../../assets/gallery4.png'
import whitearrow from '../../assets/whitearrow.png'
const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
        <img src={gallery1} alt="image not found" />
        <img src={gallery2} alt="image not found" />
        <img src={gallery3} alt="image not found" />
        <img src={gallery4} alt="image not found" />
        </div>
        <button className='dark-btn'>See More <img src={whitearrow} alt="image not found" className='arrowimg'/></button>
    </div>
  )
}

export default Campus
