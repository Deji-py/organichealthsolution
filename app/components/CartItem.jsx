"use client";
import React, { useContext } from "react";
import SanityImage from "./SanityImage";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart } = useContext(CartContext);
  return (
    <>
      <div class=" w-full flex flex-row justify-start items-center gap-2 bg-white shadow p-3">
        <div className="w-[20%]">
          <SanityImage source={item.mainImage.asset._ref} />
        </div>
        <div className="flex-1">
          <h2 className="text-[12px]">{item.title}</h2>
          <div>
            <h3 className="text-xs mt-1  font-bold text-gray-500">
              {item.selectedPrice?.category}
              {item.selectedPrice?.amount + item.selectedPrice?.currency}
            </h3>
          </div>
          <div onClick={() => removeFromCart(item)}>
            <button className="text-red-500 mt-2 underline">Remove</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
