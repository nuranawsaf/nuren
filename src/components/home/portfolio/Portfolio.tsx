import React from 'react'

const Portfolio = () => {

    const portfolioData = [
        {
            pic: "/assests/image/port1.png",
            title: "Musician"
        },
        {
            pic: "/assests/image/port2.png",
            title: "Hekto Commerce"
        },
        {
            pic: "/assests/image/port3.png",
            title: "Arafat Hosen"
        }
    ]

  return (
    <div className='wrapper  pt-72'>
        <div>
            <p className='text-custom text-[13px] 2xl:text-[18px] text-center tracking-tighter lg:tracking-widest'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
            <h1 className='text-center mb-16 2xl:mb-32'>My Portfolio</h1>
            <div className='grid lg:grid-cols-3 gap-32 2xl:gap-52'>
                {portfolioData.map((item) => {
                    return <div className=' 2xl:h-[655px] flex justify-center'>
                        <div>
                        <div className='2xl:h-[527px]'>
                            <img src={item.pic} alt="" />
                        </div>
                        <div className='bg-dark_gray py-12 2xl:py-[42px]'>
                            <h5 className='text-[16px] 2xl:text-[30px] text-center'>{item.title}</h5>
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