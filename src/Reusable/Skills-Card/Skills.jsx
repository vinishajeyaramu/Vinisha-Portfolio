import React from 'react'
import "./Skills.css"
const Skills = (props) => {
    console.log(props)
  return (
    <>
    <div className='skill-props'>
        <div className='skill-head'><span><p className='skill-icon'>{props.icons}</p></span><p>{props.header}</p></div>
    </div>
    </>
  )
}

export default Skills