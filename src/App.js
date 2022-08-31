import Footer from 'components/Footer'
import Header from 'components/Header'
import Hero1 from 'components/Hero1'
import Hero2 from 'components/Hero2'
import Service from 'components/Service'
import Testimonial from 'components/Testimonial'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import './App.scss'

function App() {
  return (
    <div className="AppContainer">
      <Header />
      <Hero1 />
      <Service />
      <Hero2 />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
