import React from 'react'
import Blocklist from '../../components/Blocklist'
import FriendList from '../../components/FriendList'
import FriendRequest from '../../components/FriendRequest'
import JoinGroup from '../../components/JoinGroup'
import Search from '../../components/Search'
import Sidebar from '../../components/Sidebar'
import UserList from '../../components/UserList'

const Home = () => {
  return (
 <div className='md:flex md:flex-wrap justify-between'>
    <div className='w-full lg:w-[150px] xl:w-[150px]'>
      <Sidebar/>
    </div>
    <div className='md:w-[50%] xl:w-[25%]'>
      <Search/>
      <JoinGroup/>
      <FriendRequest/>
    </div>
    <div className='md:w-[50%] xl:w-[25%]'>
      <FriendList/>
      <JoinGroup/>
    </div>
    <div className='md:w-[50%]  xl:w-[25%]'>
      <UserList/>
      <Blocklist/>
    </div>
 </div>
  )
}

export default Home