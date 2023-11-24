import React from "react";
import SanityImage from "./SanityImage";
import { FaFire } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <a
      href="#"
      className="group h-full  relative bg-white block overflow-hidden"
    >
      <button className="absolute end-4 top-4 z-10 rounded-full  p-1.5 text-gray-900 transition hover:text-gray-900/75">
        <span className="sr-only">Wishlist</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      <div className="w-full h-[150px] overflow-hidden">
        <SanityImage source={product.mainImage?.asset._ref} />
      </div>

      <div className="relative  bg-white py-2">
        <span className="whitespace-nowrap bg-yellow-400  w-fit rounded-full flex flex-row justify-start items-center gap-2 px-3 py-1 text-xs font-medium">
          New
        </span>
        <h3 className="mt-4 text-sm font-medium text-gray-900">
          {product.title}
        </h3>

        <p className="mt-1.5 text-sm text-gray-700">
          {product.price &&
            product?.price[0].amount + product?.price[0].currency}
        </p>
      </div>
    </a>
  );
}

export default ProductCard;