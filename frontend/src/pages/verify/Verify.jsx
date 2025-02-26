import React, { useContext,useEffect } from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async()=>{
        const response = await axios.post(url+"api/order/verify",{success,orderId});
        if (response.data.success) {
            navigate("/myorder")
        }
        else{
            navigate("/");
        }
    }
    
    useEffect(() => {
      verifyPayment
    }, [])
    
    

  return (
    <div className='min-h-60vh grid'>
        <div className="spinner w-25 h-25 place-self-center border-4 border-gray-500 border-t-red-500 rounded-full animate-spin duration-1000">

        </div>
    </div>
  )
}

export default Verify