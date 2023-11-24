"use client";
import React, { useContext, useEffect, useRef } from "react";
import { MdOutlineShoppingBag, MdOutlineShoppingCart } from "react-icons/md";
import logo from "../../public/logo.png";
import emptyCart from "../../public/empty-cart.png";
import Image from "next/image";
import { CartContext } from "../context/CartContext";
import CartList from "./CartList";
import SummaryCard from "./SummaryCard";

function Header() {
  const { cart, orderTypeList, orderType, setOrderType } =
    useContext(CartContext);
  const closeRef = useRef();

  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-[1500]">
        <div className="navbar-start">
          <a className=" flex flex-col justifycenter items-center ">
            <Image src={logo} className="w-[100px] ml-3" />
          </a>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            {/* <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label> */}
            {/* <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul> */}
          </div>
        </div>

        <div className="navbar-end">
          <label htmlFor="my-drawer" className="btn  btn-ghost btn-circle">
            <div className="indicator inducator-red">
              <MdOutlineShoppingBag size={20} />
              {!cart.length == 0 && (
                <span className="badge badge-xs text-white py-2 bg-red-600 indicator-item">
                  {cart.length}
                </span>
              )}
            </div>
          </label>
        </div>
      </div>
      <div className="drawer z-[2000]">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side ">
          <label
            ref={closeRef}
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu relative p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {cart.length === 0 ? (
              <div className=" absolute w-full h-[80%] left-0  flex flex-col justify-center items-center">
                <Image src={emptyCart} className="w-[80px] my-5" />
                <h2 className="text-2xl font-bold text-gray-500">Cart Empty</h2>
                <p className="text-gray-500">
                  Kindly add a new product to cart
                </p>
              </div>
            ) : (
              <>
                <h1 className=" text-2xl font-bold my-3">Your Order</h1>
                <CartList />
                <div>
                  <h2 className="font-bold mt-10">Delivery Option</h2>
                  <p className="text-[12px] mb-2 text-gray-500">
                    select your prefererd delivery option
                  </p>
                  <div className="flex border-gray-500  border-l-2 px-3 flex-col justify-start items-start gap-2">
                    {orderTypeList.map((type, index) => (
                      <div
                        onClick={() => setOrderType(type)}
                        style={{
                          border:
                            type === orderType
                              ? "1.2px solid gray"
                              : "1.2px solid transparent",
                        }}
                        key={index}
                        className="bg-white rounded-xl p-4 w-full text-xs"
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                </div>
                <SummaryCard />
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
