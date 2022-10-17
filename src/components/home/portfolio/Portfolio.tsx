import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {

    const { ref, inView } = useInView({ threshold: 0.5 });

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const items = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

    const portfolioData = [
        {
            pic: "/assests/image/port1.png",
            title: "Musician"
        },
        {
            pic: "/assests/image/port2.png",
            title: "Hekto Commerce"
        },
        {
            pic: "/assests/image/port3.png",
            title: "Arafat Hosen"
        }
    ]

  return (
    <div className='wrapper  pt-72'>
        <div>
            <p className='text-custom text-[13px] 2xl:text-[18px] text-center tracking-tighter lg:tracking-widest'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
            <h1 className='text-center mb-16 2xl:mb-32'>My Portfolio</h1>
            <motion.div      ref={ref}
                     variants={container}
                     initial="hidden"
                     animate={inView ? "visible" : "hidden"} className='grid lg:grid-cols-3 gap-32 2xl:gap-52'>
                {portfolioData.map((item) => {
                    return <motion.div
                     className=' 2xl:h-[655px] flex justify-center '
                
                     >
                        <div>
                        <motion.div className='2xl:h-[527px]' variants={items} >
                            <img src={item.pic} alt="" />
                        </motion.div>
                        <motion.div className='bg-dark_gray py-12 2xl:py-[42px]' variants={items}>
                            <h5 className='text-[16px] 2xl:text-[30px] text-center'>{item.title}</h5>
                        </motion.div>
                        </div>
                    </motion.div>
                })}
            </motion.div>
        </div>
    </div>
  )
}

export default Portfolio