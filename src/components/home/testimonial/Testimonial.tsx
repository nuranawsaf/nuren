import React from 'react'

const Testimonial = () => {
  return (
    <div className='wrapper'>
        <div className='my-52 md:my-72'>
            <p className='text-custom text-[13px] md:text-[18px] text-center tracking-wider lg:tracking-widest'>Testimonial</p>
            <h1 className='text-center mb-16 md:mb-[162px]'>What Client Says</h1>
            <div className='bg-dark_gray md:relative pt-32 md:pt-[214px]'>
                <div className=' flex justify-center md:absolute md:-top-1/4 md:left-0 w-full'>
                    <img className='bg-custom rounded-full p-6' src="/assests/image/testi1.png" alt="" />
                </div>
                <p className='text-[13px] md:text-[16px] pt-32 md:pt-[30px] text-justify px-8 md:px-[79px] md:text-center'>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                <h4 className='mt-12 md:mt-24 text-center pb-12 md:pb-40 md:text-[25px]'>Harry Paul- <span className='text-custom font-semibold'>Assts. Manager</span></h4>
            </div>
        </div>
    </div>
  )
}

export default Testimonial