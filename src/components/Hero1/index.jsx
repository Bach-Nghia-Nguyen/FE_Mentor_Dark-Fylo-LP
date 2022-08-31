import React from 'react'
import illustrationIntro from 'images/illustration-intro.png'
import './style.scss'

function Hero1() {
  return (
    <section className="Hero1">
      <img src={illustrationIntro} alt="illustration intro" className="illustration-intro" />
      <h1 className="heading">All your files in one secure location, accessible anywhere.</h1>
      <p className="description">
        Fylo stores all your most important files in one secure location. Access them wherever you
        need, share and collaborate with friends family, and co-workers
      </p>
      <button className="started">Get Started</button>
    </section>
  )
}

export default Hero1
