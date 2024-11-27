import React from 'react'
import "./Servicescard.css"

const card = (props) => {
  console.log(props);
  
  return (
    <>
        <div className='services-props'>
          <span><p className='services-icon'>{props.icons}</p></span>
        <p className='title'>{props.title}</p>
        <p className='description'>{props.description}</p>
        </div>
    </>
)
}

export default card