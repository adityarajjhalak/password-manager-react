import { useState } from 'react'
import React from 'react'
import './App.css'
import Manager from './Components/Manager.jsx'
import Navbar from './Components/Navabr.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  

  return (
    <>
    <Navbar />
    <div className='min-h-[80vh]'>
      <Manager/>
      </div>
      <Footer/>
    </>
  )
}

export default App
