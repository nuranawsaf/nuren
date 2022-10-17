import * as React from 'react';
import { motion } from 'framer-motion';
import { links } from '../navdata';
import MenuItem from './MenuItem';
import Link from 'next/link';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation: React.FC = () => {
  return (
    <motion.ul
      className='absolute top-0 right-0 z-30 w-screen md:w-full px-8 h-full bg-dark_gray'
      variants={variants}
    >
      <Link href='/'>
          <div className='cursor-pointer flex items-center gap-x-2 py-4'>
            <img
              src='https://res.cloudinary.com/softenin/image/upload/v1663310137/nuren/logo_stuvqc.png'
              alt='Black Rectangular Shape'
            />
          </div>
      </Link>

      <div className=' mt-12'>
      {links.map((link) => (
        <MenuItem  link={link} key={link.id} />
      ))}
      </div>
    </motion.ul>
  );
};

export default Navigation;