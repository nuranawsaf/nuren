import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface MenuItemProps {
  link: {
    id: number;
    title: string;
    href: string;
  };
}

const MenuItem: React.FC<MenuItemProps> = ({ link }) => {
  return (
    <motion.li
      className='text-theme-gray-2 mb-28'
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={link.href}>
        <span className='text-5xl'>{link.title}</span>
      </Link>
    </motion.li>
  );
};

export default MenuItem;