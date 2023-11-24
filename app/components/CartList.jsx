import React, { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";

function CartList() {
  const { cart } = useContext(CartContext);
  return (
    <div className=" flex flex-col justify-start items-start gap-2">
      {cart && cart.map((item, key) => <CartItem key={key} item={item} />)}
    </div>
  );
}

export default CartList;
