import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Myswiper.css';
import { Pagination } from 'swiper/modules';
import logo_1 from "../../Assets/Images/Tutor.jpg"
import logo_3 from '../../Assets/Images/Tutor1.jpg'
import logo_2 from "../../Assets/Images/Tutor2.jpg"
const Myswipers = () => {
  const testimonials = [
    {
      description:
        "I collaborated with Vinisha on a full-stack project, and they demonstrated great attention to detail in both the frontend and backend components. Their ability to quickly adapt and learn new technologies stood out.",
      name: 'Chinraj',
      title: 'Python FullStack Developer',
      img:logo_1
    },
    {
      description:
        "Vinisha was instrumental in creating a scalable backend for our application. Their understanding of RESTful APIs and database optimization is remarkable!",
      name: 'Athi Rooban',
      title: 'Backend Engineer',
      img:logo_2
    },
    {
      description:
        "Vinisha's ability to transform design ideas into functional frontend components is exceptional. Always a pleasure to work with!",
      name: 'Saravana Priyan',
      title: 'Frontend Developer',
      img:logo_3
    }
  ];

  return (
    <div className='swiper-div'>
   <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="test-description">
              <p>{testimonial.description}</p>
              <div className="prof-img">
                <img src={testimonial.img} alt="profile" />
              </div>
              <div className="test-profile">
                <p className="test-profname">{testimonial.name}</p>
                <p className="test-prof">{testimonial.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
  )
}

export default Myswipers