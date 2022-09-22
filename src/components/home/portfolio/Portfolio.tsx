import React from 'react'

const Portfolio = () => {

    const portfolioData = [
        {
            pic: "/assests/image/port1.png",
            title: "Lighting"
        },
        {
            pic: "/assests/image/port2.png",
            title: "Interior Design"
        },
        {
            pic: "/assests/image/port3.png",
            title: "Floor Planning"
        },
        {
            pic: "/assests/image/port1.png",
            title: "Lighting"
        },
        {
            pic: "/assests/image/port2.png",
            title: "Interior Design"
        },
        {
            pic: "/assests/image/port3.png",
            title: "Floor Planning"
        },
    ]

  return (
    <div className='wrapper'>
        <div>
            <p className='text-custom text-[13px] md:text-[18px] text-center tracking-tighter lg:tracking-widest'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
            <h1 className='text-center mb-16 md:mb-32'>My Portfolio</h1>
            <div className='grid md:grid-cols-3 gap-32 md:gap-52'>
                {portfolioData.map((item) => {
                    return <div className=' md:h-[655px] flex justify-center'>
                        <div>
                        <div className='md:h-[527px]'>
                            <img src={item.pic} alt="" />
                        </div>
                        <div className='bg-dark_gray py-12 md:py-[42px]'>
                            <h5 className='text-[16px] md:text-[30px] text-center'>{item.title}</h5>
                        </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Portfolio