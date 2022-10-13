import React from 'react'
import CssSkill from './css/CssSkill'
import HtmlSkill from './html/HtmlSkill'
import JavascriptSkill from './javascript/JavascriptSkill'
import ReactSkill from './react/ReactSkill'

const MySkill = () => {
  return (
    <div className='bg-light_black py-60 2xl:py-80 px-36 2xl:px-80 mt-64 mb-44 relative  2xl:w-[994px] '>

            <div id="triangle" className='absolute top-0 left-0 rotate-90'></div>
            <div id="triangle" className='absolute bottom-0 right-0 -rotate-90'></div>


            <div>
                <h6 className='text-[18px] tracking-wide lg:tracking-wider text-custom'>Expertise Area</h6>
                <h1 className='tracking-wide'>My Skills.</h1>
            </div>


            <div className='mt-24 '>
                <div className='lg:flex  gap-16'>

                      <div className='mb-40 lg:mb-0'>
                          <div className='flex justify-center'>
                                <HtmlSkill/>
                          </div>
                          <h5 className='text-center mt-6 lg:mt-16'>HTML</h5>
                      </div>

                      <div>
                          <div className='flex justify-center'>
                                <CssSkill/>
                          </div>
                          <h5 className='text-center mt-6 lg:mt-16'>CSS</h5>
                      </div>

                      <div className='my-40 lg:my-0'>
                          <div className='flex justify-center'>
                                <JavascriptSkill/>
                          </div>
                          <h5 className='text-center mt-6 lg:mt-16'>JAVASCRIPT</h5>
                      </div>

                      <div>
                          <div className='flex justify-center'>
                                <ReactSkill/>
                          </div>
                          <h5 className='text-center mt-6 lg:mt-16'>REACT</h5>
                      </div>

                </div>
            </div>
    </div>
  )
}

export default MySkill