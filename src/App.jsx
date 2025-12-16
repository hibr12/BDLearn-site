import React from 'react'
import Navbar from './componenets/navbar/navbar'
import Hero from './componenets/hero/hero'
import Programs from './componenets/programs/programs'
import Title from './componenets/title/title'
import About from './componenets/about/About'
import Campus from './componenets/campus/campus'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="cotainer">
        <Title subTitle="Our Program" title="What We Offer"/>
        <Programs/>
        <About/>
        <Title subTitle="Gallery" title="Campus photos"/>
        <Campus/>
      </div>
      
      
    </div>
  )
}

export default App