import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";

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

  const { ref, inView } = useInView({ threshold: 0.5 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      duration: 2,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        type: "spring",
        bounce: 1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0
    }
  };

  return (
        <div className='bg-dark_gray wrapper'>
          <div className="grid lg:grid-cols-2  ">
                  <motion.div 
                  className='py-52 2xl:py-[167px]  '>
                        <p className='text-custom text-[13px] md:text-[18px] tracking-wide lg:tracking-wider 2xl:tracking-widest'>WELCOME TO MY WORLD</p>
                        <motion.h1  
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                        exit="hidden"
                        variants={container}
                        data-splitting=""
                        >
                          Hi, I’m 
                          
                          <motion.span variants={item} className="char text-custom" data-char="N"> N</motion.span>
                          <motion.span variants={item} className="char text-custom" data-char="u">u</motion.span>
                          <motion.span variants={item} className="char text-custom" data-char="r">r</motion.span>
                          <motion.span variants={item} className="char text-custom" data-char="e">e</motion.span>
                          <motion.span variants={item} className="char text-custom" data-char="n">n</motion.span>
                          <motion.span variants={item} className="char text-custom" data-char="A"> A</motion.span>
                          <motion.span variants={item} className="char text-custom" data-char="w">w</motion.span>
                          <motion.span variants={item} className="char text-custom" data-char="s">s</motion.span>
                          <motion.span variants={item} className="char text-custom" data-char="a">a</motion.span>
                          <motion.span variants={item} className="char text-custom" data-char="f">f</motion.span>

                        </motion.h1>


                        <motion.h4 
                        className='2xl:text-[24px] tracking-wide'
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                        exit="hidden"
                        variants={container}
                        data-splitting=""
                        >
                          <motion.span variants={item} className="char " data-char="A">A</motion.span>
                          <motion.span variants={item} className="char " data-char="D"> D</motion.span>
                          <motion.span variants={item} className="char " data-char="E">E</motion.span>
                          <motion.span variants={item} className="char " data-char="V">V</motion.span>
                          <motion.span variants={item} className="char " data-char="E">E</motion.span>
                          <motion.span variants={item} className="char " data-char="L">L</motion.span>
                          <motion.span variants={item} className="char " data-char="O">O</motion.span>
                          <motion.span variants={item} className="char " data-char="P">P</motion.span>
                          <motion.span variants={item} className="char " data-char="E">E</motion.span>
                          <motion.span variants={item} className="char " data-char="R">R</motion.span>

                        </motion.h4>


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
                        <motion.div 
                          className=' lg:w-[75%]'
                          initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              default: {
                                delay: 0.2,
                                duration: 0.5,
                                ease: [0, 0.71, 0.2, 1.01]
                              },
                              scale: {
                                type: "spring",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001
                              }
                            }}
                        >
                              <img src="/assests/image/hero-pic-min.png" alt="" />
                        </motion.div>
                  </div>
          </div>
        </div>
  )
}

export default HeroBanner
