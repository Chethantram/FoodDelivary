import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/frontend_assets/assets";
import axios from "axios";

const Myorder = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      `${url}api/order/userorder`,
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div>
      <h2>My orders</h2>
      <div className="container">
        <img src={assets.parcel_icon} alt="" />
        {data.map((order, index) => {
          return (
            <div key={index} className="my-order-item grid grid-cols-3 ">
              <p className="">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p><span>&#x25cf;</span><b>{order.status}</b></p>
            </div>
            );

            })}
      </div>
    </div>
  );
};

export default Myorder;
