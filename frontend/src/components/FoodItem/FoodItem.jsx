import React, { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, description, name, price, image }) => {
  const {cartItem,addToCart,removeFromCart,url}=useContext(StoreContext);
  return (
    <div className="w-full  m-auto shadow-gray-700 shadow-lg rounded-2xl">
      <div className="food-item-image relative">
        <img src={url+"images/"+image} alt="image" className="rounded-t-2xl w-full" />
        {!cartItem[id] ? (
          <img 
            className="absolute w-10 bottom-5 right-5 rounded-3xl cursor-pointer"
            onClick={() => {addToCart(id)}}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="flex items-center  absolute bottom-5 right-5 p-1 gap-3 bg-white rounded-3xl">
            <img className="w-8"  onClick={()=>{removeFromCart(id)}} src={assets.remove_icon_red} alt="" />
            <p className="text-sm">{cartItem[id]}</p>
            <img className="w-8" onClick={()=>{addToCart(id)}} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className="food-item-info p-5">
        <div className="food-item-rating flex justify-between items-center ">
          <p className="text-xl font-medium">{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="text-sm my-2 text-gray-600">{description}</p>
        <p className="text-lg text-green-500">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
