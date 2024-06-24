import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'


const App = () => {
  return (
    
    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
      <Routes>
          <Route pate='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
