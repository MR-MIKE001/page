import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import prof1 from '../../img/profile1.jpg'
import prof2 from '../../img/profile2.jpg'
import prof3 from '../../img/profile3.jpg'
import prof4 from '../../img/profile4.jpg'
import  Pagination  from 'swiper'
import './testimonial.css'
import 'swiper/css'
import 'swiper/css/pagination'

function testimonial() {
  const clients=[
    {
      img:prof1,
      reviews:"Computing as a profession; software engineering code of conduct; types of organizations affected by computers; sociological impacts of computers; individual and computers; computers as an audit tool; computers in banking; Computer base information system and telecommunication; Computers in Consultancy services; Computers in design and construction; Computer in Education; Computers and Electrical Engineering; Computers in Local Government; Computers in Government; Computers in Insurance; Computers as aids to lawyers; Computers and "
    },
    {
      img:prof2,
      reviews:" of computers; individual and computers; computers as an audit tool; computers in banking; Computer base information system and telecommunication; Computers in Consultancy services; Computers in design and construction; Computer in Education; Computers and Electrical Engineering; Computers in Local Government; Computers in Government; Computers in Insurance; Computers as aids to lawyers; Computers and "
    },
    {
      img:prof3,
      reviews:" computers; individual and comanking; Computer base information system and telecommunication; Computers in Consultancy services; Computers in design and construction; Computer in Education; Computers and Electrical Engineering; Computers in Local Government; Computers in Government; Computers in Insurance; Computers as aids to lawyers; Computers and "
    },
    {
      img:prof4,
      reviews:"y computers; sociological impacts of computers; individual and computers; computers as an audit tool; computers in banking; Computer base information system and telecommunication; Computers in Consultancy services; Computers in design and construction; Computer in Education; Computers and Electrical Engineering; Computers in Local Government; Computers in Government; Computers in Insurance; Computers as aids to lawyers; Computers and "
    }
  ]
  return (
    <div className='t-wrapper'>
     <div className='t-heading'>
     <span>client always get </span>
     <span>exceptional work</span>
     <span>from me...</span>
     <div className='blur t-blur' style={{background:"var(--purple)"}}></div>
     <div className='blur t-blur2 ' style={{background:'skyblue'}}></div>
     </div>
   {/* slider */}
   <Swiper
   modules={{Pagination}}
   slidesPerView={1}
   pagination={{clickable:true}}
    style={{width:"700px"}}>
     {clients.map((client,index)=>{
      return(
        <SwiperSlide className='testimonial' key={index}>
          <img src={client.img} alt=''/>
           <span>{client.reviews}</span>
        </SwiperSlide>
      )

     })}
   </Swiper>
   
    </div> 
  )
}

export default testimonial