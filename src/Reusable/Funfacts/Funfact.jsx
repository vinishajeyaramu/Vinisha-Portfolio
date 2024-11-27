import React from 'react'
import "./Funfact.css"
const Funfact = (props) => {
  console.log(props);
  return (
    <>
    <div className='fun-props'>
        <span><p className='facts-icon'>{props.icons}</p></span>
        <p className='fun-wordings'>{props.wordings}</p>
    </div>
    </>
  )
}

export default Funfact