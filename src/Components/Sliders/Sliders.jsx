import React from 'react'
import "./Sliders.css"
import logotest from "../../Assets/Images/Tutor.jpg"
const Sliders = () => {
  return (
    <>
    <div className='slider'>
        <div className='test-description'>
        "I collaborated with Vinisha on a full-stack project, and they demonstrated in 
        great problem-solving skills and attention to 
        detail in both the frontend and backend components. Their ability 
        to quickly adapt and learn new technologies stood out."
       
        <div className='prof-img'>
           <img  src={logotest} alt="" />
        </div>
        <div className='test-profile'>
            <p className='test-profname'>Chinraj</p>
                <p className='test-prof'> Python FullStack Developer</p>
        </div>
        <div className='test-btn'>
          <span><button></button></span>
          <button></button>
          <button></button>
        </div>
        </div>
    
    </div>
    </>
  )
}

export default Sliders