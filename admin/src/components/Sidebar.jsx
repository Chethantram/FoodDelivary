import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar w-[20%] min-h-[100vh] border-t-0 border-2 border-gray-400">
        <div className="sidebar-options flex flex-col gap-7 mt-15">
            <NavLink to='/add' className="sidebar-add border-2 ml-4  md:ml-15 justify-center rounded-l-xl border-r-0 border-gray-400 p-2 flex gap-5">
                <img src={assets.add_icon} alt="" />
                <p className='hidden md:flex'>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-list border-2  ml-4 justify-center rounded-l-xl  md:ml-15 items-center border-r-0 border-gray-400 p-2 flex gap-5">
            <img src={assets.order_icon} alt="" />
            <p className='hidden md:flex'>List Items</p>
            </NavLink>
            {/* <NavLink to='/order' className="sidebar-order border-2 justify-center rounded-l-xl  ml-4  md:ml-15 items-center border-r-0 border-gray-400 p-2 flex gap-5">
            <img src={assets.order_icon} alt="" />
            <p className='hidden md:flex'>Orders</p>
            </NavLink> */}
        </div>
    </div>
  )
}

export default Sidebar