import Link from 'next/link';
import React from 'react';
import { expandMenuReducer } from '../../../../redux/slices/navbarSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/store/store';
import MenuDrawer from './MenuDrawer';
import { AiOutlineMenu } from 'react-icons/ai'

const MobileNavbar: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <nav className='block lg:hidden  py-4 relative'>
      <div className='container  flex items-center justify-between'>
        <div>
          <Link href='/'>
            <img className='w-[80%]' src='https://res.cloudinary.com/softenin/image/upload/v1663310137/nuren/logo_stuvqc.png' alt='Brand Logo' />
          </Link>
        </div>

        <div>
          <button
            onClick={() => dispatch(expandMenuReducer())}
            className='bg-transparent shadow-none p-0'
          >
            <AiOutlineMenu className='w-[35px] h-full text-white' />
          </button>
        </div>
      </div>

      <MenuDrawer />
    </nav>
  );
};

export default MobileNavbar;