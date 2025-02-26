import React,{useState} from 'react'
import axios from 'axios';
import { assets } from '../assets/assets'
import { toast } from 'react-toastify';

const Add = ({url}) => {
    
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad",
    });

    const onChangeHandler=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}));
    }
    const onSubmitHandler=async(event)=>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', Number(data.price));
        formData.append('category', data.category);
        formData.append('image',image);
        const response = await axios.post(`${url}/api/food/add/`,formData);
        if (response.data.success) {
            setData({
                name:"",
                description:"",
                price:"",
                category:"Salad",
            });
            setImage(false);
            toast.success(response.data.message);
            
        }
        else{
            toast.error(response.data.message);
        }
    }
   
  return (
    <div className=' md:p-13 w-[80%] '>
        <form className='flex flex-col gap-8 my-10 md:my-0 mx-7 md:mx-0' onSubmit={onSubmitHandler}>
 
        <div className="add-images flex flex-col gap-4">
            <p>Upload Image</p>
            <label htmlFor="image">
                <img className='cursor-pointer bg-contain w-20' src={image ? URL.createObjectURL(image):assets.upload_area} alt="" />
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' name="image" hidden required />
        </div>
        <div className="add-name flex flex-col gap-3 w-[70vw] md:w-md">
            <p>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" className='outline-none border-2 border-gray-400 h-10 p-4 rounded-lg' required placeholder='Name here' name='name' />
        </div>
        <div className="add-description flex flex-col gap-3">
            <p>Product Description</p>
            <textarea  onChange={onChangeHandler} value={data.description} rows="6" className='outline-none border-2 w-[70vw] md:w-md border-gray-400 p-4 rounded-lg' required placeholder='Write the comment here' name='description'></textarea>
        </div>
        <div className="add-category-price flex gap-5 md:gap-8">
            <div className="category flex flex-col gap-3">
            <p>Category</p>
            <select  onChange={onChangeHandler} value={data.category} required className=' cursor-pointer outline-none border-2 border-gray-400 h-10 p-1 w-35 rounded-lg' name="category">
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
            </select>
            </div>
            <div className="add-price flex flex-col gap-3">
            <p>Price</p>
            <input  onChange={onChangeHandler} value={data.price} required className=' cursor-pointer outline-none border-2 border-gray-400 h-10 p-1 w-35 rounded-lg' type="number" name="price" placeholder='$20' />
        </div>
            
        </div>
        
        <button className='text-center cursor-pointer  text-white rounded-xl bg-orange-600 h-10 max-w-25' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Add