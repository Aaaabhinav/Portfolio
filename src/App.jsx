import { useState } from 'react'
import Navbar from './navbar'
import Beams from './Beams'
import Projects from './Projects'
import About from './About'
import Contacts from './Contacts'
import Home from './Home'

import './App.css'

function App() {
  return (
    <>
      {/* Background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
        }}
      >
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={9}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>

      {/* Content */}
      <Navbar />
      <div id="Home" style={{ scrollMarginTop: '25vh' }}><Home /></div>
      
      <div id="About" style={{ scrollMarginTop: '10vh' }}><About /></div>
      
      <div id="Projects" style={{ scrollMarginTop: '10vh' }}><Projects /></div>
      <div id="Contact" style={{ scrollMarginTop: '10vh' }}><Contacts /></div>
    </>
  )
}

export default App
