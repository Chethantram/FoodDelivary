import React,{useContext, useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/frontend_assets/assets';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");
  const {totalCartAmount,token,setToken}=useContext(StoreContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");

  }
  
  return (
    <nav className='w-full flex items-center mx-auto  sm:mx-3  gap-18 justify-between sm:justify-center  p-3 sm:gap-40 sm:p-3'>
       
        <div className="logo items-center">
       <Link to='/'> <h3 className='text-orange-600 font-bold text-3xl'>CTR</h3></Link>
        </div>
        <div className="nav-list items-center">
        <ul className='sm:flex sm:gap-18  gap-5 hidden text-blue-950 cursor-pointer'>
            <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#mobile-app' onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile-App</a>
            <a href='#contact-us' onClick={()=>setMenu("Contact Us")} className={menu==="Contact Us"?"active":""}>Contact Us</a>
        </ul>
        </div>
        

        <div className='flex sm:gap-13 gap-5  items-center cursor-pointer'>
        <div className="search flex text-2xl items-center">
            
            <FaSearch />
        </div>
        <div className="nav-shop text-3xl flex items-center 
        ">
          <Link to="/cart"><div className="search relative"><FaShoppingBag /></div></Link>
          {totalCartAmount()===0?"":<div className="dot absolute bg-red-500 h-2 w-2 top-4 right-27 sm:right-73  sm:top-4 rounded-2xl"></div>}
        
        </div>
        <div className="button">
          {!token?<button onClick={()=>setShowLogin(true)} className='outline-blue-950 outline-2 py-3  px-4 rounded-3xl hover:bg-blue-950 transition-all duration-300 hover:text-white '>Signin</button>:
          <div className='profile relative '>
            <img src={assets.profile_icon} className='hover:flex hover:flex-col' alt="" />
            <ul id='dropdown' className=' drop-down cursor-pointer  '>
              <li className='flex gap-2 p-2 hover:text-red-300 '><img className='size-5' src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li className='flex gap-2 p-2 hover:text-red-300'> <img className='size-5 ' src={assets.logout_icon} alt="" /><p onClick={logout}>Logout</p></li>
            </ul>
            </div>}
            
        </div>
        </div>

    </nav>
  )
}

export default Navbar