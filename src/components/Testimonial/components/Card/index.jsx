import React from 'react'

function Card(props) {
  const { feedback, avatar, name, jobTitle, quoteMark } = props
  return (
    <div className="card-wrapper">
      {quoteMark && <img src={quoteMark} alt="quote mark" className="quote-mark" />}
      <div className="inner-wrapper">
        <p className="feedback">{feedback}</p>

        <div className="customer">
          <img src={avatar} alt="avatar" className="avatar" />
          <div className="info">
            <h4 className="name">{name}</h4>
            <div className="job-title">{jobTitle}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
