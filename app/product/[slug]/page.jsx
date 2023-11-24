"use client";
import client from "@/app/client";
import SanityImage from "@/app/components/SanityImage";
import { CartContext } from "@/app/context/CartContext";
import { PortableText } from "@portabletext/react";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { FaCartPlus, FaMinus, FaPlus } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

function ProductPage() {
  const [data, setData] = useState();
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [ProductInCart, setProductInCart] = useState(false);
  //   const [count, setCount] = useState(0);

  const params = useParams();
  const slug = params.slug;

  const handleSelect = (index) => {
    setCurrentPrice(index);
  };

  const addItemToCart = () => {
    addToCart({ ...data, selectedPrice: data.price[currentPrice] });
  };

  const removeItemFromCart = () => {
    removeFromCart(data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (data) {
      if (cart.some((item) => item._id === data._id)) {
        setProductInCart(true);
      } else {
        setProductInCart(false);
      }
    }
  }, [data, cart]);

  const query = `*[_type == "Product" && slug.current == "${slug}"][0]{
    _id,
    title, 
    mainImage,
    price,
    slug,
    content
  }`;

  useEffect(() => {
    const fetchProducts = async () => {
      const product = await client.fetch(query);
      setData(product);
    };
    fetchProducts();
  }, [query]);

  if (!data) {
    return (
      <div className="h-[70vh] flex flex-col justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  const serializers = {
    types: {
      image: (props) => <SanityImage source={props.value.asset._ref} />,
      // Add a custom handler for the list type
    },
  };

  return (
    <div className="w-full p-3  overflow-y-scroll overflow-hidden ">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href={"/product/" + slug}>
              {slug.length > 20 ? slug.slice(0, 20) + "..." : slug}
            </a>
          </li>
        </ul>
      </div>

      {data && (
        <div>
          <div className=" my-4">
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <div className="flex flex-row justify-start items-center gap-2">
              <MdOutlineStar size={15} color="orange" />
              <MdOutlineStar size={15} color="orange" />
              <MdOutlineStar size={15} color="orange" />
              <MdOutlineStar size={15} color="orange" />
              <MdOutlineStar size={15} color="orange" />
            </div>
            <div className="flex gap-2 flex-row justify-start w-full  items-center">
              <h2 className=" p-2  rounded-r-full w-fit bg-[#032127] text-white my-5">
                Price list
              </h2>
              <div className="h-[0.5px] bg-black flex-1" />
            </div>
            <div className=" flex pr-3 w-full hidescroll overflow-x-scroll flex-row justify-start items-center gap-3">
              {data.price.map((item, index) => (
                <div
                  onClick={() => handleSelect(index)}
                  className="p-3 rounded-xl  bg-[#04D585] text-[#032127]"
                  key={index}
                >
                  <input
                    type="radio"
                    name={index}
                    className="radio bg-green-200"
                    checked={index === currentPrice}
                  />
                  <h2>{item && item.category}</h2>
                  <h2>{item && item.amount + item.currency}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full  h-[200px] border-[1.5px]  overflow-hidden rounded-xl">
            <SanityImage source={data?.mainImage} />
          </div>
          <div className="my-5">
            <PortableText components={serializers} value={data.content} />
          </div>
        </div>
      )}
      <div className="flex flex-row bg-white justify-center gap-5 items-center  fixed bottom-0 w-full text-[#032127]   shadow-xl left-0 p-5 border-t-2 rounded-t-2xl ">
        {/* <div className=" flex flex-row justify-center flex-1 items-center">
          <button className="btn">
            <FaPlus />
          </button>
          <button className="btn bg-transparent text-xl  shadow-none">0</button>
          <button className="btn">
            <FaMinus />
          </button>
        </div> */}

        {ProductInCart ? (
          <button
            onClick={removeItemFromCart}
            className="btn  w-full  bg-gray-200 text-black"
          >
            Remove From Cart
            <BsX size={20} />
          </button>
        ) : (
          <button
            onClick={addItemToCart}
            className="btn  w-full   bg-[#032127] text-[#04D585]"
          >
            Add to Cart
            <FaCartPlus size={20} />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
