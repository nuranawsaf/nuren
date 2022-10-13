import React from 'react';
import { HiOutlineLocationMarker,HiOutlinePhone,HiOutlineMail } from 'react-icons/hi';

const Footer = () => {

  const footerIcon = [
    {
      icon: <HiOutlineLocationMarker/> ,
      title: "Uttara 18 No Sector",
    },
    {
      icon: <HiOutlinePhone/>,
      title: "+880 1624239653"
    },
    {
      icon: <HiOutlineMail/>,
      title: "nuranawsaf712@gmail.com"
    },
  ]

  return (
    <>
    <div className='bg-white'>
        <div className='bg-dark_gray'>
        <div className='wrapper md:flex md:pt-[102px] md:pb-[58px] justify-between'>

          <div>
              <div>
                  <div className=' py-16 md:py-0'>
                    <img src="https://res.cloudinary.com/softenin/image/upload/v1663310137/nuren/logo_stuvqc.png" alt="" />
                  </div>
                  <p className='text-[13px] md:text-[16px] md:w-[669px] md:mt-[22px] text-justify md:text-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown </p>
              </div>
          </div>   

          <div>
            <h2 className='md:text-[24px] my-16 md:my-0'>Get in Touch With Us</h2>
            <div className=' md:mt-[36px] '>
              {footerIcon.map((item) => {
                return <div  className=''>
                  <div className='mb-16 md:mb-[28px]'>
                      <div className=' flex items-center gap-16 '>
                        <a href="" className='footerIcon'>{item.icon}</a>
                        <p>{item.title}</p>
                      </div>
                  </div>
                </div>
              })}
            </div>
          </div>

          <div className='flex items-center pb-12 md:pb-0'>
            <img src="/assests/image/map.png" alt="" />
          </div>
        </div>
        </div>

        <div className=' bg-gray-900'>
              <div className='wrapper mt-1'>
              <div className='py-12 md:py-28 md:flex justify-between text-center'>
                  <p>Nuren Awsaf -   © 2020 All Rights Reserved</p>
                  <p>Made with ♥ by TanjinaHemi</p>
            </div>
              </div>
        </div>
    </div>
    </>
  )
}

export default Footer
