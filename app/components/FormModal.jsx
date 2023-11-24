"use client";
import React, { useContext, useRef, useState } from "react";
import { MdSend, MdWhatsapp } from "react-icons/md";
import { BsX } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import Link from "next/link";

function FormModal() {
  const [fullname, setFullname] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Location, setLocation] = useState("");
  const [Date, setDate] = useState("");
  const linkref = useRef();
  const closeref = useRef();
  const { cart, orderType, total } = useContext(CartContext);

  let allProducts = "";
  cart.map(
    (item) =>
      (allProducts += item.selectedPrice.category + "-" + item.title + ",")
  );

  const messageTemplate = `*Fullname*: ${fullname} %0a*Phone number* ${PhoneNumber} %0a*Products:* ${allProducts.toLowerCase()} %0a*Location:* ${
    !Location ? "No Location" : Location
  } %0a*Date*: ${Date}%0a*Total*:${total}GHC `;

  const handleSubmit = () => {
    linkref.current.click();
    closeref.current.click();
  };

  return (
    <dialog id="my_modal_1" className="modal p-2">
      <a
        ref={linkref}
        className="hidden"
        target="_blank"
        href={`https://wa.me/+233593965054/?text=${messageTemplate}`}
      />
      <div className="modal-box p-2 w-full">
        <div className="w-full flex flex-col justify-end items-end">
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button
                ref={closeref}
                className=" -mt-5 w-10 h-10 flex flex-col justify-center items-center  rounded-md bg-red-100 shadow-none text-red-600"
              >
                <BsX size={20} />
              </button>
            </form>
          </div>
        </div>
        <div className="p-3 flex flex-col justify-start items-start">
          <div className="w-[60%]">
            <h2 className="font-bold text-sm underline">Delivery Type</h2>
            <div className=" text-xs">{orderType.slice(0, 50) + "..."}</div>
          </div>
          <p className="py-3">You are about to order-</p>
          <div className="flex flex-row justify-start gap-2 items-center">
            {cart.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="bg-teal-800 text-xs text-green-200 px-2 w-fit rounded-full  p-1"
              >
                {item.title.length > 20
                  ? item.title.toLowerCase().slice(0, 20) + "..."
                  : item.title.toLowerCase()}
              </div>
            ))}
            {cart.length > 2 && (
              <p className="text-xs">and {cart.length - 2} other</p>
            )}
          </div>
          <div className=" flex flex-row justify-between items-center">
            <div className=" mt-5 flex-1">
              <p className="text-xs">Total</p>
              <h2 className="font-bold text-lg -mt-1">{total}GHC</h2>
            </div>
          </div>
        </div>
        <hr />
        <div className="modal-action">
          <div class="relative z-10 flex flex-col items-start justify-start p-2 w-full bg-white  rounded-xl">
            <h4 class="w-full text-xl font-medium leading-snug">
              Fill the Form
            </h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              class="relative w-full mt-6 space-y-8"
            >
              <div class="relative">
                <label class="absolute text-sm px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">
                  Full Name
                </label>
                <input
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                  type="text"
                  class="block w-full px-4 py-3 mt-2 text-sm placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
              </div>
              <div class="relative">
                <label class="absolute px-2 text-sm ml-2 -mt-3 font-medium text-gray-600 bg-white">
                  Active Phone Number
                </label>
                <input
                  value={PhoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  type="number"
                  class="block w-full px-4 py-3 mt-2 text-sm placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
              </div>
              <div class="relative">
                <label class="absolute px-2 ml-2 text-sm -mt-3 font-medium text-gray-600 bg-white">
                  {"Delivery Address / Location (City/Town)"}
                </label>
                <input
                  value={Location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  class="block w-full px-4 py-3 mt-2 text-sm placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
              </div>
              <div class="relative">
                <label class="absolute px-2 ml-2 text-sm -mt-3 font-medium text-gray-600 bg-white">
                  {"Date/Day For Delivery"}
                </label>
                <input
                  value={Date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  type="date"
                  class="block w-full px-4 py-3 mt-2 text-sm placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                />
              </div>
              <div class="relative">
                <Link href={"/thankyou"}>
                  <button
                    onClick={handleSubmit}
                    className="btn rounded w-full border-none text-[#032127]  bg-[#04D585] btn-primary"
                  >
                    <MdSend size={20} /> Complete Order
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default FormModal;
