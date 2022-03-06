import React from 'react'
import { NavBar } from './components'
import { About, Footer, Header, Skills, Testimonials, Work } from './containers'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <NavBar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App