import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const { totalCartAmount, food_list, cartItem,url, token } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });

  const onChangeHandle = (events) => {
    const name = events.target.name;
    const value = events.target.value;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
  const place_Order = async (events) => {
    events.preventDefault();
    let orderItem = [];
    food_list.map((item) => {
      if (cartItem[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItem[item._id];
        orderItem.push(itemInfo);
      }
    });
    let orderData = {
      address:data,
      items:orderItem,
      amount:totalCartAmount()+2
 
    }
    let response = await axios.post(`${url}api/order/place`,orderData,{headers:{token}});
    if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
      
    }
    else{

      alert("error")
    }
  };

  return (
    <form
      onSubmit={place_Order}
      className="flex justify-between gap-20 w-full mt-25"
    >
      <div className="place-order-left w-[50%] flex flex-col gap-8 ">
        <h2 className="text-2xl font-bold">Delivery Information</h2>
        <div className="form-info flex gap-5 w-full">
          <input
            required
            name="firstName"
            onChange={onChangeHandle}
            value={data.firstName}
            className="form-input w-1/2 "
            type="text"
            placeholder="FirstName"
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandle}
            value={data.lastName}
            className="form-input w-1/2 "
            type="text"
            placeholder="LastName"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandle}
          value={data.email}
          className="form-input w-full"
          type="email"
          placeholder="email"
        />
        <input
          required
          name="street"
          onChange={onChangeHandle}
          value={data.street}
          className="form-input w-full"
          type="text"
          placeholder="Street"
        />
        <div className="form-info flex gap-5">
          <input
            required
            name="city"
            onChange={onChangeHandle}
            value={data.city}
            className="form-input w-1/2"
            type="text"
            placeholder="City"
          />
          <input
            required
            name="state"
            onChange={onChangeHandle}
            value={data.state}
            className="form-input w-1/2"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="form-info flex gap-5">
          <input
            required
            name="zipcode"
            onChange={onChangeHandle}
            value={data.zipcode}
            className="form-input w-1/2"
            type="number"
            placeholder="Zipcode"
          />
          <input
            required
            name="country"
            onChange={onChangeHandle}
            value={data.country}
            className="form-input w-1/2"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          name="phone"
          onChange={onChangeHandle}
          value={data.phone}
          className="form-input w-full"
          type="number"
          placeholder="Phone"
        />
      </div>

      <div className="place-order-right w-[50%]">
        <div className="cart-total w-full flex flex-col gap-5 ">
          <h2 className="text-2xl font-bold">Cart Total</h2>
          <div className="cart-total-details flex justify-between w-3/4">
            <p>SubTotal</p>
            <p>${totalCartAmount()}</p>
          </div>
          <hr className="text-gray-500 w-3/4" />
          <div className="cart-total-details flex justify-between w-3/4">
            <p>Delivery Fee</p>
            <p>${totalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr className="text-gray-500 w-3/4" />
          <div className="cart-total-details flex justify-between w-3/4">
            <p className="font-medium">Total</p>
            <p className="font-medium">
              ${totalCartAmount() === 0 ? 0 : totalCartAmount() + 2}
            </p>
          </div>
          <div className="cart-button">
            <button
              type="submit"
              className="bg-orange-500 h-12 rounded-3xl text-white  w-1/2"
            >
              Proceed To Payment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
