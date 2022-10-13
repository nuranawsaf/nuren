import React from 'react'
import TestimonialSwiper from './swiper/TestimonialSwiper'

const Testimonial = () => {
  return (
    <div className='wrapper'>
        <div className='my-52 md:my-72'>
            <p className='text-custom text-[13px] md:text-[18px] text-center tracking-wider lg:tracking-widest'>Testimonial</p>
            <h1 className='text-center mb-16  lg:mb-[62px]'>What Client Says</h1>


            <div className=' relative'>
                <TestimonialSwiper/>

            </div>

            
        </div>
    </div>
  )
}

export default Testimonial