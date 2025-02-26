import React from 'react'
import { assets } from '../../src/assets/assets';

const Navbar = () => {
  return (
    <div className='flex justify-between p-3 mx-15'>
        <div className="logo">
         <h3 className='text-orange-600 text-center font-bold text-3xl'>CTR</h3>
        <h3 className='text-md font-medium'>Admin Panel</h3>
        </div>
        <div className="profile">
            <img className="size-13" src={assets.profile_image} alt="" />
        </div>
    </div>
  )
}

export default Navbar