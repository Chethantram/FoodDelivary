import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'



const FoodDisplay = ({category}) => {
    const {food_list} =useContext(StoreContext);
  return (
    <div className='mt-10 sm:mt-20'>
        <h2 className='text-3xl md:p-0 p-3 font-bold'>Top Dishes Near You</h2>
        <div className="food-display mt-5 sm:mt-10 gap-17 grid-cols-1 p-3 sm:grid-cols-2 lg:grid-cols-3 grid mx-auto my-auto">
            {food_list.map((item,index)=>{
              if (category==="All" || category===item.category) {
                return <FoodItem key={item._id} id={item._id} name={item.name} price = {item.price} description={item.description} image={item.image} />
                
              }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay