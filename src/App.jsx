import React from 'react'
import Navbar from './componenets/navbar/navbar'
import Hero from './componenets/hero/hero'
import Programs from './componenets/programs/programs'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="cotainer">
        <Programs/>
      </div>
      
    </div>
  )
}

export default App