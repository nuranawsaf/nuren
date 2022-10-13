import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion'

const HeroBanner = () => {

  const icons = [
    {
      icon: "/assests/icons/facebook.png",
      href: "https://www.facebook.com/nurenawsaf/"
    },
    {
      icon: "/assests/icons/twitter.png",
      href: "https://twitter.com/NuranAwsaf"
    },
    {
      icon: "/assests/icons/linkedin.png",
      href: "https://www.linkedin.com/in/nuran-awsaf-b1428a13a/"
    },
    
  ]

  return (
        <div className='bg-dark_gray wrapper'>
          <div className="grid lg:grid-cols-2  ">
                  <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1.5 }}
                  className='py-52 2xl:py-[167px]  '>
                        <p className='text-custom text-[13px] md:text-[18px] tracking-wide lg:tracking-wider 2xl:tracking-widest'>WELCOME TO MY WORLD</p>
                        <h1>Hi, I’m <motion.span animate={{ color: '#1B9DB1', }} className='text-white ' >Nuren Awsaf</motion.span></h1>
                        <h4 className='2xl:text-[24px] tracking-wide'>A DEVELOPER.</h4>
                        <p className='mt-[26px] text-[13px] md:text-[16px] text-justify 2xl:text-left leading-loose lg:w-[98%] 2xl:w-[68%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                        <div className='mt-8 md:mt-52'>
                              <h4 className='text-[18px]'>FIND WITH ME</h4>
                              <div className=' flex gap-12 mt-8 md:mt-36'>
                                {icons.map((item, index) => {
                                  return <>
                                        <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ rotate: 360, scale: 1 }}
                                        transition={{
                                          type: "spring",
                                          stiffness: 260,
                                          damping: 20,
                                        }}
                                         key={index} className='bg-gradient-to-r from-gray-800 to-gray-700 rounded-3xl p-8 md:p-12 border-[1.8px] border-gray-700'>
                                            <Link href="">
                                              <a  target="_blank"  href={item.href}><img className='h-[16px] 2xl:h-[32px] cursor-pointer'  src={item.icon} alt="" /></a>
                                            </Link>
                                        </motion.div>
                                  </>
                                })}
                              </div>
                      </div>
                    </motion.div>

                  <div className=' lg:flex lg:justify-end lg:items-end'>
                        <div className=' lg:w-[75%] '>
                              <img src="/assests/image/hero-pic-min.png" alt="" />
                        </div>
                  </div>
          </div>
        </div>
  )
}

export default HeroBanner
