import React from 'react'
import "./Navbar.css";
import logo from "../../Assets/Images/vini1.jpg"
import { BsBrightnessHigh } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { CgVercel } from "react-icons/cg";
import { IoLogoGithub } from "react-icons/io";
import { PiLinkedinLogo } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";
import ServicesCard from "../../Reusable/Card/ServicesCard"
import { TfiHtml5 } from "react-icons/tfi";
import { AiOutlinePython } from "react-icons/ai";
import { BsDatabaseFill } from "react-icons/bs";
import { FaGitSquare } from "react-icons/fa";
import Funfact from "../../Reusable/Funfacts/Funfact"
import { BiSolidAlbum } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { AiOutlineFileDone } from "react-icons/ai";
import Sliders from "../../Components/Sliders/Sliders"
import Skills from "../../Reusable/Skills-Card/Skills"
import { MdOutlineWorkHistory } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import companylogo from "../../Assets/Images/reilance.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { MdOutlineList } from "react-icons/md";
import { PiToolboxBold } from "react-icons/pi";
import { FaLanguage } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import { BiMessageAltEdit } from "react-icons/bi";
import { useState } from 'react';
import Work1 from "../../Reusable/WorksCard/Work1 Card/Work1"
import workimg from "../../Assets/Images/work1-1.jpg"
import workimg2 from "../../Assets/Images/work2.jpg"
import workimg3 from "../../Assets/Images/work3.jpg"
import workimg4 from "../../Assets/Images/work4.jpg"
import workimg5 from "../../Assets/Images/work5.jpg"
import workimg6 from "../../Assets/Images/work6.jpg"
import workimg7 from "../../Assets/Images/work7.jpg"
import workimg8 from "../../Assets/Images/work8.jpg"
import { useRef } from 'react';
import { RiMenu4Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import resume from '../../Assets/Images/Vinisha_Jeyaramu (1)_page-0001.jpg'



const Navbar = () => {
  const aboutref=useRef(null)
  const resumeref=useRef(null)
  const workref=useRef(null)
  const contactref=useRef(null)
  function movedata(data) {
    console.log(data);
    data.current.scrollIntoView({
      behavior:"smooth",
      block:"start"
    })
    
  }
  const [open, setopen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(false);



  const validate = () => {
    let formErrors = {};

    // Validate Full Name
    if (!formData.fullName.trim()) {
      formErrors.fullName = 'Full Name is required';
    }

    // Validate Email
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }

    // Validate Message
    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
    }

    return formErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(formErrors);
      setSubmitted(false);
    }
  };
  function openprofile(params) {
    setopen(!open)
  }
  const scrollToContact = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  const [isImageVisible, setIsImageVisible] = useState(false);
  
  const toggleImageVisibility = () => {
      setIsImageVisible(!isImageVisible);
  }
  const toggleImageInvisibility=()=>{
    setIsImageVisible(false);

  }
  return (
    <>
     <div className='main'>
      <div className='main1'>
        <div className='navleft'>
          <div className='nav'>
            <div className='navcheck'>
              <div className='navcheck1'>
              <h1>vinisha</h1>
              <p>Full Stack developer</p>
              </div>
              <div className='screen-mode1'>
              <BsBrightnessHigh  className='screen-mode12' />
            <RiMenu4Fill  className='screen-mode12' onClick={openprofile}/>

            </div>
            </div>
            <div className='screen-mode'>
              <BsBrightnessHigh />
            </div>
            <div className='menu-list'>
              <div className='menu about' onClick={()=>movedata(aboutref)}><FaRegUser className='nav-icon'/>About</div>          
              <div className='menu' onClick={()=>movedata(resumeref)}><FaRegListAlt className='nav-icon' />Resume</div>
              <div className='menu' onClick={()=>movedata(workref)}><FaRegEye className='nav-icon'/>Works</div>
              <div className='menu' onClick={()=>movedata(contactref)}><FaTelegramPlane className='nav-icon'/>Contact</div>
            </div>
          </div> 
          <div className='image-background'>
          </div>
          <div className='img-scroll'>
            <div className='imgs'></div>
          </div>
           
          <div className={open?"profile-overview1":'profile-overview'}>
            <div className='profile-image'>
            <img src={logo} alt="" />

            <p className='background-circle'/>
            <p className='name'>Vinisha Jeyaramu</p>
            <p className='posting'>Front-end Developer</p>
            <div className='profile-icons'>
              <a href="https://vercel.com/vinishajeyaramus-projects"><CgVercel className='prof-icon'/></a>
              <a href="https://github.com/vinishajeyaramu"><IoLogoGithub className='prof-icon' /></a>
              <a href="https://www.linkedin.com/in/vinishajeyaramu/"><PiLinkedinLogo className='prof-icon' /></a>
              <a href="https://wa.me/7010556736"><FaWhatsapp className='prof-icon' /></a>
            </div>
            </div>
            <div className='cv-section'>
               <div className='cv-download cv-hover'><button onClick={toggleImageVisibility}>{isImageVisible} CV<PiReadCvLogoFill className='download-icon' /></button> 
             </div>
               <div className='cv-contact cv-hover' onClick={() => scrollToContact(contactref)} ><button>Contact Me <FaTelegramPlane /></button></div>
            </div>
            <div className='image-background-1'></div>
          <div className='img-scroll'>
            <div className='imgs'></div>
          </div>
          </div>
        </div>
        <div className='navright'>
          <div className='about-section' ref={aboutref}>About Me
            <p className=' font-circle'></p>
          </div>
          <div className='profile-summary'>
            <p className='summary'>Hello! I’m Vinisha Jeyaramu.<br/>
            Back-end & Frond-end developer from Theni, Tamilnadu. I have rich experience in 
            react, also I am good at javascript. I love to talk with you about our 
            unique.
            <p className='personal-info1'>Age<p>.</p><p>.</p><p>.</p><p>.</p><span>22</span></p>
            <p className='personal-info2'>Freelance<p>.</p><p>.</p><p>.</p><p>.</p><span>Available</span></p>
            <p className='personal-info3'>Residence<p>.</p><p>.</p><p>.</p><p>.</p><span>Theni</span></p>
            <p className='personal-info4'>Address<p>.</p><p>.</p><p>.</p><p>.</p><span>Theni,TN</span></p></p>
          </div>
          <div className='services'>My Services
            <p className=' font-circle-1'></p>
          </div>
          <div className='services-prop'>
            <ServicesCard 
            
            icons={<TfiHtml5 className='ch'/>}
            title="Front-end"
            description="
                 Modern and mobile-ready website
                 that will help you reach all of 
                 your marketing."
            />
            <ServicesCard 
            
            icons={<AiOutlinePython className='ch'/>}
            title="Back-end"
            description="
                 Modern and mobile-ready website
                 that will help you reach all of 
                 your marketing."
            />
            <ServicesCard 
            
            icons={<BsDatabaseFill className='ch'/>}
            title="Data Base"
            description="
                  Modern and mobile-ready website
                  that will help you reach all of 
                   your marketing."
            />
            <ServicesCard 
            
            icons={<FaGitSquare className='ch'/>}
            title="Git & Git-hub "
            description="
                    Modern and mobile-ready website
                    that will help you reach all of 
                    your marketing."
            />
          </div>
          <div className='testimonials'>Testimonials
          <p className=' font-circle-3'></p>
          </div>
          <div>
            <Sliders/>
          </div>
          <div className='facts'>Fun Facts
            <p className=' font-circle-2'></p>
          </div>
          <div className='fact-prop'>
              <Funfact
              icons={<BiSolidAlbum className='ch1'/>}
              wordings="100+ Albums Listened"
              />
              <Funfact
              icons={<BiLogoJavascript className='ch1'/>}
              wordings="1,000 +  Lines Written"
              />
              <Funfact
              icons={<AiOutlineFileDone className='ch1'/>}
              wordings="10+ Bucket Lists Done"
              />
            </div>
          
            <div className='resume-section' ref={resumeref}>Resume
              <p className='resume-font-circle'></p>
            </div>
            <div className='intern'>
              <div className='intern-head'><span><MdOutlineWorkHistory  className='intern-icon'/></span><p>Internship</p></div>
              <div className='side-border'><p className='border-dot'></p>
              <p className='duration'>Dec 2023-March-2024</p>
              <p className='intern-role'>Software Testing Engineer</p>
              <p className='company-name'>Reliance Nippon Life Insurance <img src={companylogo} alt="" /></p>
              <p className='work-description'>Collaborate with creative and development teams to ensure software quality.</p>
              <div className='recommend'>RECOMMENDATION <span><MdKeyboardArrowRight/></span></div>
              </div>
            </div>
            <div className='education'>
              <div className='edu-head'><span><FaGraduationCap className='edu-icon' /></span><p>Education</p></div>
              <div className='side-border'><p className='border-dot'></p>
              <p className='edu-duration'>May-2024</p>
              <p className='univercity-name'>Code Purple Academy</p>
              <p className='edu-role'>FullStack Web Development with Python</p>
              <p className='clg-description'>Code Purple Academy,Coimbatore,Tamilnadu</p>
              <div className='certification'>CERTIFICATION <span><MdKeyboardArrowRight/></span></div>
              
              <div><p className='border-dot-1'></p>
              <p className='edu-duration-1'>2020-2024</p>
              <p className='univercity-name'>Sengunthar Engineering College</p>
              <p className='edu-role'>B.E.CS</p>
              <p className='clg-description'>Senguthar Engineering College,Tiruchengode,Namakkal,Tamilnadu</p>
              <div className='certification'>CERTIFICATION <span><MdKeyboardArrowRight/></span></div>
              </div>
              </div>
              
              </div>
              <div className='skill'>Skills
                <p className='s-font-circle'></p>
              </div>
            <div className='skill-prop'>
              <div className='coding'>
              <Skills
              icons={<FaCode className='ch-2' />}
              header="CODING"/>
              <div className='progress-main'>
               <div className='progress-div-1'>
               <div>
               <p className='progress-circle-1'>75%</p>
               <p className='progress-head'>React/<br/>JavaScript</p>
               </div>
               <div>
               <p className='progress-circle-2'>90%</p>
               <p className='progress-head'>HTML/CSS</p>
               </div>
               </div>
               <div  className='progress-div-1'>
               <div>
               <p className='progress-circle-3'>60%</p>
               <p className='progress-head'>Python/<br/>MYSQL</p>
               </div>
               <div>
               <p className='progress-circle-4'>60%</p>
               <p className='progress-head'>Node.js</p>
               </div>
               </div>
               </div>
               </div>
              <div className='knowledge'>
              <Skills
              icons={<MdOutlineList className='ch-2' />}
              header="KNOWLEDGE"
              />
              <div className='knowledge-div'>
              <p><span><MdOutlineDoneOutline /></span> Version control/Git</p>
              <p><span><MdOutlineDoneOutline /></span> Responsive,mobile friendly design</p>
              <p><span><MdOutlineDoneOutline /></span> React Development</p>
              <p><span><MdOutlineDoneOutline /></span> Client-side Scripting</p>
              <p><span><MdOutlineDoneOutline /></span> RESTful API Development</p>
              <p><span><MdOutlineDoneOutline /></span> HTML, CSS, jQuery</p>
              <p><span><MdOutlineDoneOutline /></span> Software Testing</p>
              <p><span><MdOutlineDoneOutline /></span> Database Management</p>
              </div>
              </div>
              <div className='tools-main'>
              <Skills
              icons={<PiToolboxBold className='ch-2' />}
              header="TOOLS"
              />
              <div className='tools-div'>
                <div >
                <p >JavaScript</p>
                <p className='line-1'></p>
                <p className=' line1'></p>
                </div>
                <div>
                <p>React</p>
                <p className='line-2'></p>
                <p className='line2'></p>
                </div>
                <div>
                <p>Node</p>
                <p className='line-3'></p>
                <p className='line3'></p>
                </div>
                <div>
                <p>Python</p>
                <p className='line-4'></p>
                <p className='line4'></p>
                </div>
              </div>
              </div>
              <div>
              <Skills
              icons={<FaLanguage className='ch-2' />}
              header="LINGUISTICS"/>
              <div className='lang-div'>
                <p>Tamil</p>
                <div className='l-div'>
                <p className='l-circle'></p>
                <p className='l-circle'></p>
                <p className='l-circle'></p>
                <p className='l-circle'></p>
                <p className='l-circle'></p>
                <p className='l-circle'></p>
                <p className='l-circle'></p>
                <p className='l-circle'></p>
                <p className='l-circle'></p>
                <p className='l-circle'></p>
                </div>
              </div>
              <div className='lang-div'>
                <p>English</p>
                <div className='l-div'>
                <p className='l-circle'></p>
                <p className='l-circle'></p>
                <p className='l-circle'></p>
                <p className='l-circle'></p>
                <p className='l-circle'></p>
                <p className='l-circle'></p>
                <p className='l-circle-1'></p>
                <p className='l-circle-1'></p>
                <p className='l-circle-1'></p>
                <p className='l-circle-1'></p>
                </div>
              </div>
              <div className='lang-div'>
                <p>Hindi</p>
                <div className='l-div'>
                <p className='l-circle'></p>
                <p className='l-circle'></p>
                <p className='l-circle-1'></p>
                <p className='l-circle-1'></p>
                <p className='l-circle-1'></p>
                <p className='l-circle-1'></p>
                <p className='l-circle-1'></p>
                <p className='l-circle-1'></p>
                <p className='l-circle-1'></p>
                <p className='l-circle-1'></p>
                </div>
              </div>
              </div>
            </div>
           <div className='works' ref={workref}>Works
              <p className='w-font-circle'></p>
            </div>
            <div className='work-div'>
            <div className='w-div-1'>
            <div className='card-1'>
              <img src={workimg} alt="" />
                <Work1
                title="Web App"
                media="Gallery"
                />
              </div>
              <div className='card-2'>
              <img src={workimg2} alt="" />
              <Work1
                title="Web App"
                media="Gallery"
                />
              </div>
              <div className='card-3'>
              <img src={workimg3} alt="" />
              <Work1
                title="Web App"
                media="Gallery"
                />
              </div>
              <div className='card-4'>
              <img src={workimg4} alt="" />
              <Work1
                title="Web App"
                media="Gallery"
                />
              </div>
            </div>
            <div className='w-div-2'>
            <div className='card-5'>
            <img src={workimg5} alt="" />
              <Work1
                title="Web App"
                media="Gallery"
                />
              </div>
              <div className='card-6'>
              <img src={workimg6} alt="" />
              <Work1
                title="Web App"
                media="Gallery"
                />
              </div>
              <div className='card-7'>
              <img src={workimg7} alt="" />
              <Work1
                title="Web App"
                media="Gallery"
                />
              </div>
              <div className='card-8'>
              <img src={workimg8} alt="" />
              <Work1
                title="Web App"
                media="Gallery"
                />
              </div>
            </div>
            </div>
            <div className='contact' ref={contactref}>Get in touch
              <p className='c-font-circle'></p>
            </div>
            <div className='address'>
            <div className='g-map'><iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2858.622898905012!2d77.64110587325429!3d10.14726077048713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07438fed36b551%3A0x3aca91c132235da0!2sPallivasal%20Street%2C%20Devadanapatti%2C%20Tamil%20Nadu%20625602!5e1!3m2!1sen!2sin!4v1730876715510!5m2!1sen!2sin" ></iframe></div>
            <p className='personal-info-1'>Address<p>.</p><p>.</p><p>.</p><p>.</p><span>Theni,TN</span></p>
            <p className='personal-info-2'>Phone<p>.</p><p>.</p><p>.</p><p>.</p><span>+91 7010556736</span></p>
            <p className='personal-info-3'>E-mail<p>.</p><p>.</p><p>.</p><p>.</p><span>vinishajeyaramu@gmail.com</span></p>
            <p className='personal-info-4'>Freelance<p>.</p><p>.</p><p>.</p><p>.</p><span>Available</span></p>
          
            </div>
            <div className='c-form'>Contact Form 
              <p className='c-form-font-circle'></p>
            </div>
           <div className='details'>
           <form action="" className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className='detail-1'>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder='Full Name'
          value={formData.fullName}
          onChange={handleChange}
          className={errors.fullName ? 'error' : ''}
        />
        
        <input
          type="email"
          id="email"
          name="email"
          placeholder='E-mail'
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        
        </div>
        <div className='required-err'>
          {errors.fullName && <p className="error-message">{errors.fullName}</p>}
          {errors.email && <p className="error-message-1">{errors.email}</p>}
          </div>
                <div className='msg'>
        <textarea
          id="message"
          name="message"
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'error' : ''}
        />
        {errors.message && <p className="error-message">{errors.message}</p>}
        </div>

        <div className='send-btn'>
        <button type="submit">Send Message<BiMessageAltEdit className='msg-icon' /></button>
        {submitted && <p className="success-message">Thank you for your message. It has been sent.</p>}
        </div>
            </form>
            
           </div>
           
           
            </div>
        
             <div className={isImageVisible? "r-divs":'r-div'}>
           <button  className="r-btn-cls" onClick={toggleImageVisibility} ><MdOutlineClose className='cls-icon'/></button>
           <div className='r-div1'>
           <img src={resume} alt="" className='resume-img'/>

           </div>
            </div>
          
        </div>
      </div>
    </>
  )
}

export default Navbar