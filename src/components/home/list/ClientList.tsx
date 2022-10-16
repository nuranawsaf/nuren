import React from 'react'
import { motion, useTime, useTransform } from "framer-motion";

const ClientList = () => {

  const clientData = [
    {
      pic: "/assests/image/client1.png",
      title: "15+",
      des: "Project Completed"
    },
    {
      pic: "/assests/image/client2.png",
      title: "10+",
      des: "Happy Clients"
    },
    {
      pic: "/assests/image/client3.png",
      title: "2+",
      des: "Years Experience"
    },
  ]

  return (
    <div className='wrapper my-60 md:my-[115px]'>
      <div className=' lg:flex justify-between  '>
        {clientData.map((item) => {
          
          const time = useTime();
          const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

          return <div className=' mb-16 lg:mb-0 '>
              <div className=' flex items-center gap-12 mx-3 md:mx-0  md:gap-24'>

                <motion.div style={{ rotate }} className=' bg-dark_gray rounded-full p-2 md:p-8 '>
                  <img src={item.pic} alt="" />
                </motion.div>

                <div className=''>
                  <h3 className='text-[28px] lg:text-[36px] font-semibold'>{item.title}</h3>
                  <h5 className='lg:text-[18px] font-normal'>{item.des}</h5>
                </div>

              </div>

          </div>
        })}
      </div>
    </div>
  )
}

export default ClientList