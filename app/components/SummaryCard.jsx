import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function SummaryCard() {
  const { total, cart } = useContext(CartContext);

  if (cart.length === 0) {
    return <></>;
  }
  return (
    <div className=" w-full bg-gray-100 dark:bg-gray-900 h-full">
      <div className="flex flex-col lg:h-screen h-auto  -mt-8 justify-between overflow-y-auto">
        <div></div>
        <div>
          <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
            <p className="text-lg leading-normal text-gray-800 dark:text-white">
              Total
            </p>
            <p className="text-lg font-bold leading-normal text-right text-gray-800 dark:text-white">
              {total} <span className="text-gray-500 text-sm">GHC</span>
            </p>
          </div>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className=" btn bg-black w-full text-white"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
