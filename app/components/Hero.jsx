import React from "react";
import { MdOutlineStar } from "react-icons/md";
import softgel from "../../public/softgel.png";
import best from "../../public/best.png";
import { FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className=" p-3 w-full h-screen  overflow-hidden">
      <div className=" flex flex-col h-full rounded-xl text-center justify-start items-center  p-3">
        <div className="py-2">
          <h2 className="font-bold animate-charcter">TRENDING</h2>
          <h1 className=" font-bold text-2xl my-3 px-10 ">
            Permanent Natural Cure For All Forms Of Ulcers
          </h1>
          <div className="flex flex-row justify-center items-center gap-2">
            <MdOutlineStar size={15} color="orange" />
            <MdOutlineStar size={15} color="orange" />
            <MdOutlineStar size={15} color="orange" />
            <MdOutlineStar size={15} color="orange" />
            <MdOutlineStar size={15} color="orange" />
          </div>
        </div>
        <p className="text-sm my-5">
          <span className="font-bold underline">GI Vital Softgel</span> is one
          of the best proven & effective cures for all ulcers such as gastric
          reflux, Helicobacter pylori, Duodenal Ulcer, Gastric Atrophy and other
          Gastrointestinal Disorders.
        </p>

        <div className="flex flex-row mt-3 justify-center gap-3 items-center">
          <Link href={"/product/gi-vital-softgel"}>
            <button className="btn shadow-none bg-[#032127] text-white">
              <FaShoppingCart size={20} />
              Order Product
            </button>
          </Link>
        </div>
        <div className="flex flex-1 flex-row  justify-center items-start pt-10 relative">
          <Image
            src={best}
            alt="image1"
            className="w-20 z-[1000] top-5  rotate-12 right-5 absolute"
          />
          <Image
            src={softgel}
            alt="image1"
            className="h-[250px] translate-x-10 opacity-[0.5]"
          />
          <Image
            src={softgel}
            alt="image1"
            className=" object-contain h-[300px] absolute z-[800]"
          />
          <Image
            src={softgel}
            alt="image1"
            className=" h-[250px] -translate-x-10 opacity-[0.5]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
