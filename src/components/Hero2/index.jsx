import React from 'react'
import stayProductive from 'images/illustration-stay-productive.png'
import arrow from 'images/icon-arrow.svg'
import './style.scss'

function Hero2() {
  return (
    <section className="Hero2">
      <img src={stayProductive} alt="illustration stay productive" className="stay-productive" />

      <div className="info">
        <h1 className="heading">Stay productive, wherever you are</h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you covered for all of
          your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues for live
          collaboration. No email attachments required.
        </p>
        <div className="hyperlink">
          <a href="#fylo" className="fylo-link">
            <span>See how Fylo works</span>
            <img src={arrow} alt="arrow" className="arrow-icon" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero2
