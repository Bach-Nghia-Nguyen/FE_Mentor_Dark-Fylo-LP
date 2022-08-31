import React from 'react'
import Card from './components/Card'
import Signup from './components/Signup'
import { clients } from './data'
import './style.scss'

function Testimonial() {
  return (
    <section className="Testimonial">
      {clients.map((client) => (
        <Card
          key={client.id}
          feedback={client.feedback}
          avatar={client.avatar}
          name={client.name}
          jobTitle={client.jobTitle}
          quoteMark={client.quoteMark}
        />
      ))}
      <Signup />
    </section>
  )
}

export default Testimonial
