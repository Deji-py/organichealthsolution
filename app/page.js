"use client";
import { useEffect, useState } from "react";
import client from "./client";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Perks from "./components/Perks";
import { FaCartArrowDown } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const [data, setData] = useState([]);
  const query = `*[_type == "Product"] | order(_createdAt asc){
  _id,
  title, 
  mainImage,
  price,
  slug
  }`;

  useEffect(() => {
    const fetchProducts = async () => {
      const product = await client.fetch(query);
      setData(product);
    };
    fetchProducts();
  }, []);

  return (
    <main className="max-w-[1200px] bg-white  md:w-full">
      <Hero />
      <Perks />

      <h1 className={"text-2xl font-bold text-center mt-20 mb-5"}>
        Featured Products
      </h1>
      <div className="grid p-3 md:grid-cols-2 grid-cols-3 md:gap-3 gap-5 ">
        {data?.map((product, index) => (
          <Link key={index} href={"/product/" + product.slug.current}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <button className="btn rounded border-none text-white bg-[#032127] btn-primary">
          <FaCartArrowDown size={20} /> Shop Now
        </button>
      </div>
    </main>
  );
}
