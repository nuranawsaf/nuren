import clsx from 'clsx';
import React from 'react';
import { expandMenuReducer } from '../../../../redux/slices/navbarSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/store/store';
import { navdata as data } from '../navdata';
import Link from 'next/link';


const MenuDrawer: React.FC = () => {
  const dispatch = useAppDispatch();
  const expand = useAppSelector((state) => state.navbar.expand);
  return (
    <div
      className={clsx(
        'absolute h-screen w-screen text-white bg-light_black top-0 right-0 z-10 transition-all transform ease duration-500 overflow-hidden',
        expand
          ? 'w-full opacity-1  translate-x-0'
          : 'w-0 opacity-0 translate-x-full'
      )}
    >
      <div className='container my-4 '>
        <button
          className='block ml-auto bg-transparent p-0 shadow-none text-[3rem]'
          onClick={() => dispatch(expandMenuReducer())}
        >
          X
        </button>

        <div className='' onClick={() => dispatch(expandMenuReducer())}>
          <Link href='/'>
            <img src='https://res.cloudinary.com/softenin/image/upload/v1663310137/nuren/logo_stuvqc.png' alt='Brand Logo' />
          </Link>

          <div className=' mt-8 flex flex-col gap-y-[28px] '>
            {data.map((item, index) => {
              return item.type === 'link' ? (
                <Link key={index} href={item.href}>
                  {item.title}
                </Link>
              ) : (
                <button className='w-max'>{item.title}</button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDrawer;