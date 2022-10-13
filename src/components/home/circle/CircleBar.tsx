import React from 'react'
import MySkill from './myskill/MySkill'

const CircleBar = () => {
  return (
    <div className='bg-dark_gray mb-32'>
        
          <div className='grid lg:grid-cols-2 lg:items-center  lg:relative'>

                <div className='pt-16 '>
                  <img className='w-max lg:w-full' src="/assests/image/mySkill2.png" alt="" />
                </div>


                <div className='lg:absolute right-64 2xl:right-96'>
                  <MySkill/>
                </div>


          </div>
        
    </div>
  )
}

export default CircleBar