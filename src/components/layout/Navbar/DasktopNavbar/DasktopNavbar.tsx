import Link from 'next/link';
import React, { useState } from 'react'
import { navdata as data } from '../navdata';
import { useRouter } from 'next/router'

const DasktopNavbar = () => {
  const [active , setActive]=useState(0)

  return (
    <div className=''>
        <nav className='px-[10rem] py-24 hidden lg:block'>
      <div className='  flex items-center justify-between'>
        <div>
          <Link href='/'>
            <img src='https://res.cloudinary.com/softenin/image/upload/v1663310137/nuren/logo_stuvqc.png' alt='Brand Logo' />
          </Link>
        </div>

        <div className='flex items-center gap-36  '>
          {data.map((item, index) => {
            return item.type === 'link' ? (
              <Link  key={index} href={item.href}>
                <a className={`${active === index ? "text-custom text-[3.2rem]" : "white"}`} onClick={()=> setActive(index)} href="">
                      {item.title}
                </a>
              </Link>
            ) : (
              <button> {item.title}</button>
            );
          })}
        </div>
      </div>
    </nav>
    </div>
  )
}

export default DasktopNavbar