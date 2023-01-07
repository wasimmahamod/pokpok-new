import React from 'react'
import {BsSearch,BsThreeDotsVertical} from 'react-icons/bs';

const Blocklist = () => {
  return (
    <div className='mt-5 relative h-[300px] shadow-lg	w-full overflow-y-scroll p-5	'>
    <BsThreeDotsVertical className='absolute top-2 right-3 text-xl'/>
    <h2 className='font-poppins font-semibold text-xl mb-4'>Block List </h2>
      <div className='flex  w-full items-center gap-x-4  py-3.5 border-b '>
        <div className='w-[70px] h-[70px] '>
          <img src="images/profile.png" alt="" />
        </div>
      <div className='w-[50%]'>
      <h2 className='font-poppins font-semibold text-xl'>Tamim Iqbal</h2>
      <h2 className='font-poppins font-normal text-sm'>Hi Guys, Wassup!</h2>
      </div>
        <div >
        <button className='font-poppins font-semibold text-xl bg-primary p-2 text-white rounded-br-xl ml-5 drop-shadow-md	'>Unblock</button>
        </div>
     
    </div>

    </div>
  )
}

export default Blocklist