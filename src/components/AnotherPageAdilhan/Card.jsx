import React from 'react'


const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.src} alt="" />
      <h4>{props.heading}</h4>
      <p> {props.text}</p>
    </div>
  )
}

export default Card
