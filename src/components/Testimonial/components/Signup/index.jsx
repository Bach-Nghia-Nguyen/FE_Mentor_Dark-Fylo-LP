import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    if (e.target.name === 'email' && e.target.value) {
      setError('')
    }
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email } = formData
    if (!email) {
      setError('Email is required')
    }
    if (email) {
      toast.success('Email is sent successfully', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  return (
    <div className="sign-up-container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h2>Get early access today</h2>
      <p>
        It only takes a minute to sign up and our free started tier is extremely generous. If you
        have any questions, our support team would be happy to help you.
      </p>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@example.com"
            className="textfield"
            value={formData.email}
            onChange={handleChange}
          />
          {error && <div className="error">Please enter a valid email address</div>}
        </div>
        <button className="submit-btn" type="submit">
          Get Started For Free
        </button>
      </form>
    </div>
  )
}

export default Signup
