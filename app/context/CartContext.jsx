"use client";

import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  total: 0,
  orderTypeList: [],
  setOrderType: () => {},
  orderType: {},
  setCart: () => {},
});

function CartProvider({ children }) {
  // Initialize the cart state with the data from localStorage or an empty array
  const [cart, setCart] = useState(() => {
    try {
      // Use dynamic import to load localStorage on the client side
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Error parsing cart data:", error);
      return [];
    }
  });

  const [total, setTotal] = useState(0);

  const orderTypeList = [
    "Payment on delivery within Accra, Kumasi, Techiman, Sunyani, Tamale, Bolgatanga, and Wa",
    "Payment before delivery to all other locations. ",
  ];
  const [orderType, setOrderType] = useState(orderTypeList[0]);

  useEffect(() => {
    let totalPrice = 0;
    cart.map((item) => {
      totalPrice += item.selectedPrice?.amount;
    });
    setTotal(totalPrice);
  }, [cart]);

  useEffect(() => {
    // Save the current cart to localStorage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (cartItem) => {
    // Check if the item is already in the cart
    const newItem = cart.find((item) => item._id === cartItem._id);

    if (!newItem) {
      // If not, add it to the cart
      setCart((prevCart) => [...prevCart, cartItem]);
      return;
    }
  };

  const removeFromCart = (item) => {
    // Remove the item from the cart based on its _id
    setCart((prevCart) =>
      prevCart.filter((product) => product._id !== item._id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        total,
        orderType,
        setOrderType,
        orderTypeList,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
