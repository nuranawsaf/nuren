import Link from 'next/link';
import React, { useState } from 'react'
import { links } from '../navdata';
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
          {links.map((link) => {
            return (
              <Link  key={link.id} href={link.href}>
                <a  href="">
                      {link.title}
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
    </div>
  )
}

export default DasktopNavbar