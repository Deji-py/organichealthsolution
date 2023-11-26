import React from "react";
import {
  FaBusAlt,
  FaCartArrowDown,
  FaMoneyBill,
  FaShippingFast,
} from "react-icons/fa";
import logo from "../../public/logo.png";
import wave from "../../public/wave.png";
import { RiCustomerService2Fill } from "react-icons/ri";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

function Perks() {
  const perks = [
    {
      icon: <FaShippingFast size={25} color="#04D585" />,
      title: "Fast Shipping",
      detail: "We Offer quick delivery",
    },
    {
      icon: <RiCustomerService2Fill size={25} color="#04D585" />,
      title: "Customer Care Service",
      detail: "Quick support on point",
    },
    {
      icon: <MdVerified size={25} color="#04D585" />,
      title: "Certified Organic",
      detail: "100% Guaranteed",
    },
    {
      icon: <FaMoneyBill size={25} color="#04D585" />,
      title: "Huge Savings",
      detail: "At Lowest Prices",
    },
  ];
  return (
    <>
      <Image src={wave} className="w-full md:block hidden  md:-mt-60" />
      <div className=" md:-mt-10 mt-10  bg-[#f4f9f8] py-10">
        <div className="text-center flex flex-col justify-center items-center gap-3 font-bold text-2xl px-10">
          <Image src={logo} className="w-[150px]" />
          <h1 className="my-5 ">
            We Sell the Best Herbal Products on the Planet
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <button className="btn rounded border-none text-[#032127] mb-10 bg-[#04D585] btn-primary">
            <FaCartArrowDown size={20} /> Shop Now
          </button>
        </div>
        <div className="flex flex-col justify-start text-gray-100 items-center bg-[#07181b] gap-2 p-2">
          {perks.map((item, index) => (
            <div
              className="p-5  flex flex-row justify-between items-center  w-full bg-[#032127]"
              key={index}
            >
              <div>
                <h2 className="py-1 font-bold">{item.title}</h2>
                <p className="text-[12px] text-gray-300">{item.detail}</p>
              </div>
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Perks;
