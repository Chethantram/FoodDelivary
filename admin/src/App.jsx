import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes,Route} from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Order from './pages/Order';
import { ToastContainer } from 'react-toastify';

const App = () => {
   const url = 'http://localhost:8000';
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content flex">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url = {url}/>}></Route>
          <Route path='/list' element={<List url = {url}/>}></Route>
          {/* <Route path='/order' element={<Order url = {url}/>}></Route> */}
        </Routes>
      </div>
      
    </div>
  )
}

export default App