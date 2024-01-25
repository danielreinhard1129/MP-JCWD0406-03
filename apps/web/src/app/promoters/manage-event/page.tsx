import React from 'react'
import SideBar from '../components/SideBar'
import ManageEvent from './components/ManageEvent'

const ManageEventPage = () => {
  return (
    <div className='flex'>
        <SideBar />
        <ManageEvent />
    </div>
  )
}

export default ManageEventPage