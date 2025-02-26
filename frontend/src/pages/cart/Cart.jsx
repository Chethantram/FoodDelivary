import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import {useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, food_list, removeFromCart,totalCartAmount,url } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-15 md:mt-30 w-[95%] mx-auto">
        <div className="cart-item flex flex-col justify-center   gap-7">
          <div className="cart-title  text-gray-500 items-center justify-center  grid  grid-cols-6">
            <p>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr className="w-[95%]  text-gray-500" />
          <div className="cart-item-content  flex flex-col gap-5 ">
            {food_list.map((item, index) => {
              if (cartItem[item._id] > 0) {
                return (
                  <div key={index}>
                    <div className="grid  grid-cols-6 p-2 ">
                      <img
                        width="50px"
                        className="justify-center rounded-xl"
                        src={url+"images/"+item.image}
                        alt=""
                      />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItem[item._id]}</p>
                      <p>${item.price * cartItem[item._id]}</p>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="cursor-pointer w-7 h-7 ms-3 rounded-2xl bg-red-500 text-white"
                      >
                        X
                      </button>
                    </div>
                    <hr className="w-[95%] text-gray-500" />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      <div className="cart-bottom mt-15 md:mt-40 md:flex md:justify-between flex-reverse gap-8 ">
        <div className="cart-total w-full m-5 md:w-[50%] flex flex-col gap-5 ">
          <h2 className="text-2xl font-bold">Cart Total</h2>
          <div className="cart-total-details flex justify-between w-3/4">
            <p>SubTotal</p>
            <p>${totalCartAmount()}
            </p>
          </div>
          <hr className="text-gray-500 w-3/4" />
          <div className="cart-total-details flex justify-between w-3/4">
            <p>Delivery Fee</p>
            <p>${totalCartAmount()===0?0:2}</p>
          </div>
          <hr className="text-gray-500 w-3/4" />
          <div className="cart-total-details flex justify-between w-3/4">
            <p className="font-medium">Total</p>
            <p className="font-medium">${totalCartAmount()===0?0:totalCartAmount()+2}</p>
          </div>
          <div className="cart-button">
          <button onClick={()=>navigate('/order')} className="bg-orange-500 h-12 rounded-3xl text-white  w-1/2">
              Proceed To Checkout
            </button>
          </div>
        </div>

        <div className="cart-promo w-full mt-10 m-4 md:w-[50%]  ">
          <h2 className="md:text-lg  md:font-medium">
            Apply Promo Code,If you Have Promo code.
          </h2>
          <div className="md:flex flex flex-col gap-2 md:gap-5">
            <input
              className="md:w-3/4 w-[92%]  outline-none border-gray-400 border-2 h-10 pl-3"
              type="text"
              placeholder="Promo-Code"
            />
            <button
              className="md:w-[20%] w-[90%] h-10 rounded-3xl  text-white bg-orange-500"
              type="submit"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
