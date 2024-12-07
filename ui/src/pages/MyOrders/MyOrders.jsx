import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets.js";
import { StoreContext } from "../../context/StoreContext";
import "./MyOrders.css";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
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
    <div className="my-orders-area">
      <div className="my-orders">
        <h2 className="text-white">My Orders</h2>
        <div className="container">
          {data.map((order, index) => {
            return (
              <div key={index} className="my-orders-order">
                <img src={assets.parcel_icon} alt="parcel_icon" />
                <p className="text-white">
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " x " + item.quantity;
                    } else {
                      return item.name + " x " + item.quantity + ", ";
                    }
                  })}
                </p>
                <p className="text-white">${order.amount}.00</p>
                <p className="text-white">Items: {order.items.length}</p>
                <p className="text-white">
                  <span className="text-white"> &#x25cf; </span> <b>{order.status}</b>
                </p>
                <button onClick={fetchOrders}>Track Order</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
