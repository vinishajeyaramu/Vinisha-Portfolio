import React from 'react'
import "./Work1.css"
const Work1 = (props) => {
  return (
    <>
    <div className='work'>
        <p className='work-title'>{props.title}</p>
        <p className='media'>{props.media}</p>
        {/* <img src={props.img1}/> */}
    </div>
    </>
  )
}

export default Work1