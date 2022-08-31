import React from 'react'
import accessAnywhere from 'images/icon-access-anywhere.svg'
import security from 'images/icon-security.svg'
import collaboration from 'images/icon-collaboration.svg'
import anyFile from 'images/icon-any-file.svg'
import './style.scss'

function Service() {
  return (
    <section className="Service">
      <div className="container">
        <div className="service-wrapper">
          <img src={accessAnywhere} alt="access anywhere" className="service-icon" />
          <h2>Access your files, anywhere</h2>
          <p>
            The ability to use a smartphone, tablet, or computer to access your account means your
            files follow you everywhere.
          </p>
        </div>
        <div className="service-wrapper">
          <img src={security} alt="security" className="service-icon" />
          <h2>Security you can trust</h2>
          <p>
            2-factor authentication and user-controlled encryption are just a couple of the secuirty
            features we allow to help secure your files.
          </p>
        </div>
        <div className="service-wrapper">
          <img src={collaboration} alt="real-time collaboration" className="service-icon" />
          <h2>Real-time collaboration</h2>
          <p>
            Securely share files and folders with friends, family and colleagues for live
            collaboration. No email attachments required.
          </p>
        </div>
        <div className="service-wrapper">
          <img src={anyFile} alt="any file" className="service-icon" />
          <h2>Store any type of file</h2>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has you covered allowing
            for all file types to be securely stored and shared.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Service
