import React from "react";
import Marquee from "react-fast-marquee";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function DetailMarquee() {
  return (
    <Marquee className="p-4 text-[14px] bg-[#032127] text-white">
      <div className="ml-10 gap-2 flex flex-row justify-start items-center">
        <FaMapMarkerAlt />
        <p>11 Maseru Street, East Legon, Accra.</p>
      </div>
      <div className=" gap-2 ml-10 flex flex-row justify-start items-center">
        <FaPhone />
        <p>(+233) 0546349695 / 0201720832</p>
      </div>
    </Marquee>
  );
}

export default DetailMarquee;
