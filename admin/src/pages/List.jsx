import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {
  const [list, setList] = useState([]);
  const fetchList = async ()=> {
    const response  = await axios.get(`${url}/api/food/list`);
    
    if (response.data.success) {
      setList(response.data.data);
      
    } else {
      toast.error(response.data.message);
    }
  
    
    
  }

  const removeItem = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
    
  }
  
  useEffect(async() => {
    await fetchList();
  }, [])
  
  return (
    <div className='p-3 md:p-8 mx-auto flex flex-col gap-3'>
      <h2 className='text-2xl font-bold'>All Food List</h2>
      <div className="list-title bg-gray-200 border-2 border-gray-400 grid grid-cols-5 font-medium text-sm md:text-lg gap-7 md:gap-45 p-3 ">
        <h2>Image</h2>
        <h2>Name</h2>
        <h2>Category</h2>
        <h2>Price</h2>
        <h2>Action</h2>
      </div>
      
      <div className="list-content flex flex-col ">
        {list.map((item,index)=>{
          return(
            <div>
            <div className='grid grid-cols-5 border-b-2 border-gray-400 h-15 items-center gap-5 text-sm md:text-md md:gap-45 mx-3' key={item._id}>
              <img className='h-12' src={`${url}/images/`+item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <h2>{item.category}</h2>
              <h2>{item.price}</h2>
              <h2 className='cursor-pointer' onClick={()=>removeItem(item._id)}>X</h2>

            </div>
            
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List