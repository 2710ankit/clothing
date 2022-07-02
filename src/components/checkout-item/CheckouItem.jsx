import React from "react";
import "./CheckoutItem.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CheckouItem = ({ cartItem }) => {
  const {
    cartItems,
    addItemToCart,
    setIsCartOpen,
    removeItemFromCart,
    removeProductFromCart,
  } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeProductFromCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>

        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckouItem;
