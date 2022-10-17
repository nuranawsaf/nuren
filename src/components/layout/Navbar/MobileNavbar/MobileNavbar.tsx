import * as React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';

import Navigation from './Navigation';
import MenuToggle from './MenuToggle';
import Link from 'next/link';
import { useDimensions } from '../../../../utils/useDimensions';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(25px at 750px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 500,
      damping: 50,
    },
  },
};

const MobileNavbar: React.FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <nav className=' block lg:hidden py-6 '>
      <div className='wrapper'>
        {/* LOGO */}
        <Link href='/'>
          <div className='cursor-pointer flex items-center gap-x-2'>
            <img
              src='https://res.cloudinary.com/softenin/image/upload/v1663310137/nuren/logo_stuvqc.png'
              alt='Black Rectangular Shape'
            />
          </div>
        </Link>

        <motion.div
          className='absolute top-0 right-0 bottom-0 z-20'
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
        >
          <motion.div className='background' variants={sidebar}>
            <Navigation />
          </motion.div>
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </div>
    </nav>
  );
};

export default MobileNavbar;