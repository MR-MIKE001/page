import React from 'react'
import './portfolio.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import sidebar from '../../img/sidebar.png'
import ecom from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import music from '../../img/musicapp.png'

import 'swiper/css'

function Portfolio() {
  return (
    <div className='portfolio'>
       
        <div className='mike'>recent projects</div>
        <div className='mike'>portfolio</div>

        <Swiper 
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className='.portfolio-slider'>
        
        <SwiperSlide>
            <img src={hoc} alt=''/>
           </SwiperSlide>
           
           <SwiperSlide>
            <img src={sidebar} alt=''/>
           </SwiperSlide>
           <SwiperSlide>
            <img src={ecom} alt=''/>
        </SwiperSlide>
           
           
           <SwiperSlide>
            <img src={music} alt=''/>
           </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio