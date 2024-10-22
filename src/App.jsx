import React from 'react'
import NavBar from './components/NavBar'
import Home from './sections/Home'
import About from './sections/About'
import Services from './sections/Services'
import Contact from './sections/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <main className='max-w-7xl mx-auto '>
     
      <NavBar/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
