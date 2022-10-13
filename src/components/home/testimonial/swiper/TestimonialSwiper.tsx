import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";


import "swiper/css";
import 'swiper/css/autoplay';


const TestimonialSwiper = () => {

  const clientSay = [
    {
      pic: "/assests/image/testi1.png",
      des: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
      name: "Harry Paul-",
      position: "Assts. Manager"
    },
    {
      pic: "/assests/image/testi2.png",
      des: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
      name: "John Smith-",
      position: "Deputy Directer"
    },
    {
      pic: "/assests/image/testi3.png",
      des: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
      name: "Tom Holland-",
      position: "Spider Man"
    },
  ]


  return (
    <Swiper
        spaceBetween={30}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction:false
        }}
        className="mySwiper"
      >
    {
      clientSay.map((slide) => (
        <SwiperSlide>
          <div className='lg:h-[475px] flex  items-end'>

              <div className='bg-dark_gray items-end h-[515px]  lg:h-[375px]'>
                  <div className='lg:pt-80 '>
                      <p className='text-[13px] md:text-[16px] py-12 md:pt-[130px] text-justify px-8 md:px-[79px] md:text-center'>{slide.des}</p>
                      <h4 className='mt-12 md:mt-24 text-center pb-12 md:pb-40 md:text-[25px]'>{slide.name}<span className='text-custom font-semibold'>{slide.position}</span></h4>
                  </div>

                  
                  <div className='  md:absolute  top-0 flex justify-center w-full'>
                      <div className=' w-max pb-16 lg:pb-0'>
                        <img className='bg-custom rounded-full p-6 ' src={slide.pic} alt="" />
                      </div>
                  </div>
              </div>

              
          </div>
        </SwiperSlide>
      ))
    }
        
      </Swiper>
  )
}

export default TestimonialSwiper