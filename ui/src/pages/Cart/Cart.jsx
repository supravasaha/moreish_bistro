import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } =
    useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart-area">
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p className="text-white">Title</p>
            <p className="text-white">Items</p>
            <p className="text-white">Price</p>
            <p className="text-white">Quantity</p>
            <p className="text-white">Total</p>
            <p className="text-white">Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={index}>
                  <div className="cart-items-title cart-items-item">
                    <img src={url + "/images/" + item.image} alt="item image" />
                    <p className="text-white">{item.name}</p>
                    <p className="text-white">${item.price}</p>
                    <p className="text-white">{cartItems[item._id]}</p>
                    <p className="text-white">
                      ${item.price * cartItems[item._id]}
                    </p>
                    <p
                      className="text-white cross"
                      onClick={() => removeFromCart(item._id)}
                    >
                      x
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2 className="text-white font-semibold">Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p className="text-white">Subtotal</p>
                <p className="text-white">${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p className="text-white">Delivery Fee</p>
                <p className="text-white">
                  ${getTotalCartAmount() === 0 ? 0 : 2}
                </p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b className="text-white">Total</b>
                <b className="text-white">
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </b>
              </div>
            </div>
            <button className="primary-btn" onClick={() => navigate("/order")}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
