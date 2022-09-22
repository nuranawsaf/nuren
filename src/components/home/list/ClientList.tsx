import React from 'react'

const ClientList = () => {

  const clientData = [
    {
      pic: "/assests/image/client1.png",
      title: "15+",
      des: "Project Completed"
    },
    {
      pic: "/assests/image/client2.png",
      title: "10+",
      des: "Happy Clients"
    },
    {
      pic: "/assests/image/client3.png",
      title: "2+",
      des: "Years Experience"
    },
  ]

  return (
    <div className='wrapper my-60 md:my-[115px]'>
      <div className=' flex justify-between'>
        {clientData.map((item) => {
          return <div>
              <div className=' flex items-center gap-2 mx-3 md:mx-0  md:gap-24'>

                <div className=' bg-dark_gray rounded-full p-2 md:p-8'>
                  <img src={item.pic} alt="" />
                </div>

                <div className=''>
                  <h3 className='md:text-[36px] font-semibold'>{item.title}</h3>
                  <h5 className='md:text-[18px] font-normal'>{item.des}</h5>
                </div>

              </div>

          </div>
        })}
      </div>
    </div>
  )
}

export default ClientList