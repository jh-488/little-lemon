import React from 'react'
import "./Heading.css"

const Heading = ({title, subtitle, text, btn, image}) => {
  return (
    <>
      <div className='heading'>
        <div className='container grid2'>
          <div className='text'>
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
            <p>{text}</p>
            <button>{btn}</button>
          </div>
          <div>
            <img src={image} alt='section cover'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Heading;
