import Link from 'next/link';
import React from 'react'

const HeroBanner = () => {

  const icons = [
    {
      icon: "/icons/facebook.png",
      href: "https://www.facebook.com/nurenawsaf/"
    },
    {
      icon: "/icons/twitter.png",
      href: "https://twitter.com/NuranAwsaf"
    },
    {
      icon: "/icons/linkedin.png",
      href: "https://www.linkedin.com/in/nuran-awsaf-b1428a13a/"
    },
    
  ]

  return (
        <div className='bg-dark_gray px-[2rem] lg:px-[20rem] '>
          <div className="lg:grid lg:grid-cols-2  ">
                  <div className='py-52 lg:py-[167px] '>
                        <p className='text-custom text-[13px] md:text-[18px] tracking-wider lg:tracking-widest'>WELCOME TO MY WORLD</p>
                        <h1 className='text-[28px] md:text-[60px]'>Hi, I’m <span className='text-custom'>Nuren Awsaf</span></h1>
                        <h4 className='lg:text-[24px]'>A DEVELOPER.</h4>
                        <p className='mt-[26px] text-[13px] md:text-[16px] text-justify lg:text-left leading-loose lg:w-[68%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                        <div className='mt-8 md:mt-52'>
                              <h4 className='text-[18px]'>FIND WITH ME</h4>
                              <div className=' flex gap-12 mt-8 md:mt-36 '>
                                {icons.map((item, index) => {
                                  return <>
                                        <div key={index} className='bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-8 md:p-12 border-[1.8px] border-gray-700'>
                                            <Link href="">
                                              <a  target="_blank"  href={item.href}><img className='h-[16px] md:h-[32px] cursor-pointer'  src={item.icon} alt="" /></a>
                                            </Link>
                                        </div>
                                  </>
                                })}
                              </div>
                      </div>
                    </div>

                  <div className=' lg:flex lg:justify-end '>
                        <div className=' lg:w-[75%] '>
                              <img src="/image/hero-pic-min.png" alt="" />
                        </div>
                  </div>
          </div>
        </div>
  )
}

export default HeroBanner
