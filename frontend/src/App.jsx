import React,{useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/Loginpopup/LoginPopUp'
import Verify from './pages/verify/Verify'
import Myorder from './pages/MyOrders/Myorder'

const App = () => {
  const [showLogin , setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className="container place-self-center justify-center mx-auto items-center sm:mx-3 w-full sm:w-[80%]">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<Myorder/>}/>
      </Routes>

    </div>
    <Footer/>
    </>
      
    
  )
}

export default App