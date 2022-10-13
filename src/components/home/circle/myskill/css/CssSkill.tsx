import React from 'react'

const CssSkill = () => {
  return (
    <div className='  skill '>
        <div className='outer'>
            <div className='inner'>
                <div id="number">
                    100%
                </div>
            </div>
        </div>

        <svg className='circle-svg' xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
              
               <stop offset="0%" stop-color="#16B3CB" />
               <stop offset="100%" stop-color="#127F97" />
               
            </linearGradient>
         </defs>
         <circle cx="64" cy="64" r="55" stroke-linecap="round" />
        </svg>
    </div>
  )
}

export default CssSkill