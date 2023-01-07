import React, { useEffect, useState } from 'react'
import {FaHome} from 'react-icons/fa'
import {TbMessage2} from 'react-icons/tb'
import {IoMdNotifications} from 'react-icons/io'
import {MdSettingsSuggest} from 'react-icons/md'
import {BiLogOut} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {BiDotsVertical} from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { userLoginInfo } from '../slices/userSlice'

const Sidebar = () => {
    let dispatch=useDispatch()
    let [dropshow,setDropdshow]=useState(true)
    useEffect(()=>{
        function scrollwidth(e){
            if(window.innerWidth <1024){
                setDropdshow(false)
            }else{
                setDropdshow(true)
            }
          
        }
        scrollwidth()
        window.addEventListener('resize',scrollwidth)
    })
    let handleLogout=()=>{
        dispatch(userLoginInfo(null))
        localStorage.removeItem('userInfo')
    }
    let handleDot=()=>{
        setDropdshow(!dropshow)
    }
  return (
    <div className='w-full bg-primary lg:h-screen lg:rounded-br-3xl '>
       <div className='xl:p-5 flex justify-start lg:block text-center '>
        <div className='w-[90px] h-[90px] rounded-full overflow-hidden mx-auto'>
            <img src="images/profile.png" alt=""/>
        </div>
        <div>
            <h2 className='font-ub text-2xl text-white font-bold mt-5'>JOOOO.....</h2>
        </div>
        {/* ===icon === */}
        <div>
            <BiDotsVertical onClick={handleDot} className='text-2xl mt-8 font-white lg:hidden'/>
        </div>
        {/* =====icon===== */}
        {dropshow &&
        <div className=' flex w-full justify-center z-[50] h-24 lg:h-0 items-center  bg-primary lg:bg-transparent lg:block absolute top-[90px] left-0 lg:relative gap-x-5 lg:gap-0'>
             <div className=" relative z-[1] after:bg-white after:w-0  lg:after:w-[130px]  after:h-[80px] after:content-[''] after:rounded-tl-2xl after:absolute after:top-[-20px] after:left-0  after:z-[-1]  before:content-[''] before:absolute before:top-[-19px] md:before:right-0 xl:before:right-[-20px] before:bg-primary lg:before:w-3 before:h-[80px] before:rounded-bl-3xl before:rounded-tl-3xl mt-0 lg:mt- 10">
            <FaHome className='text-4xl mx-auto'/>
        </div>
        <div className="  relative z-[1] after:bg-none after:w-[130px] after:h-[80px] after:content-[''] after:rounded-tl-2xl after:absolute after:top-[-20px] after:left-0  after:z-[-1]  before:content-[''] before:absolute before:top-[-19px] before:right-[-20px] before:bg-none before:w-3 before:h-[80px] before:rounded-bl-3xl before:rounded-tl-3xl mt-0 lg:mt-20">
            <TbMessage2 className='text-4xl mx-auto text-white'/>
        </div>
        <div className=" relative z-[1] after:bg-none after:w-0  lg:after:w-[130px] after:h-[80px] after:content-[''] after:rounded-tl-2xl after:absolute after:top-[-20px] after:left-0  after:z-[-1]  before:content-[''] before:absolute before:top-[-19px] before:right-[-20px] before:bg-none before:w-3 before:h-[80px] before:rounded-bl-3xl before:rounded-tl-3xl mt-0 lg:mt-20">
            <IoMdNotifications className='text-4xl mx-auto text-white'/>
        </div>
        <div className="relative z-[1] after:bg-none after:w-0  lg:after:w-[130px] after:h-[80px] after:content-[''] after:rounded-tl-2xl after:absolute after:top-[-20px] after:left-0  after:z-[-1]  before:content-[''] before:absolute before:top-[-19px] before:right-[-20px] before:bg-none before:w-3 before:h-[80px] before:rounded-bl-3xl before:rounded-tl-3xl mt-0 lg:mt-20">
            <MdSettingsSuggest className='text-4xl mx-auto text-white'/>
        </div>
        <div className=" relative z-[1] after:bg-none after:w-0  lg:after:w-[130px]  after:h-[80px] after:content-[''] after:rounded-tl-2xl after:absolute after:top-[-20px] after:left-0  after:z-[-1]  before:content-[''] before:absolute before:top-[-19px] before:right-[-20px] before:bg-none before:w-3 before:h-[80px] before:rounded-bl-3xl before:rounded-tl-3xl mt-0 lg:mt-20">
            <Link to='/login'>
            <BiLogOut onClick={handleLogout} className='text-4xl mx-auto text-white'/>
            </Link>
        </div>
        </div>
        }
       

       </div>
    </div>
  )
}

export default Sidebar