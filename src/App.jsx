// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/contact-page.css'
import './css/styles.css'
import Home from './views/Home'
import Contacts from './views/Contacts'
import Features from './views/Features'
import Projects from './views/Projects'

import Navbar from './components/Navbar'
import Footer from './components/Footer'



function App() {
  

  return (
    <BrowserRouter>
 
     <header>
      <Navbar />
      </header> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/features" element={<Features />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App
