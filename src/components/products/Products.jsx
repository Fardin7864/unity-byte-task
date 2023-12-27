import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { IoMdHeart } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";

import "@smastrom/react-rating/style.css";

const Products = () => {
  const [products, setProducts] = useState();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imgStyle, setImgStyle] = useState(null)
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //   console.log(products[0]);
  //  const product = products[0]
  return (
    <>
      <div className=" grid grid-cols-2 gap-5">
        {products?.map((product, index) => (
          <div key={product.title} className="card card-side bg-base-100 ">
            <div>
              <figure
                onMouseEnter={() =>{ setHoveredIndex(index), setImgStyle(index)}}
                onMouseLeave={() => {setHoveredIndex(null), setImgStyle(null)}}
                className="relative overflow-hidden"
              >
                <img src={product.img} alt="Movie" className={` w-48 h-w-48 ${imgStyle == index && "opacity-40 border-2" }`}/>
              {hoveredIndex === index && (
                <div className="absolute h-10 top-1/2 left-1/2 transform justify-center -translate-x-1/2 -translate-y-1/2 flex gap-4 z-10">
                  <button className=" w-9 h-9 flex justify-center items-center hover:text-[#ff6106] focus:outline-none bg-gray-200 rounded-full font-medium">
                    <IoMdHeart className=" font-bold"/>
                  </button>
                  <button className="w-9 h-9 flex justify-center items-center hover:text-[#ff6106] focus:outline-none bg-gray-200 rounded-full font-medium">
                    <TfiReload className=" font-bold"/>
                  </button>
                  <button className="w-9 h-9 flex justify-center items-center hover:text-[#ff6106] focus:outline-none bg-gray-200 rounded-full font-medium">
                    <IoSearchOutline className=" font-bold"/>
                  </button>
                </div>
              )}
              </figure>
            </div>
            <div className=" border absolute left-0 top-0 w-14 h-14 flex justify-center items-center rounded-full bg-[#ff6106] text-white outline-none border-none">
              <p>-{product.discount}%</p>
            </div>
            <div className="card-body justify-center w-1/2 ">
              <Rating
                style={{ maxWidth: 90 }}
                value={product.rating}
                readOnly
              />
              <h2 className="card-title">{product.title}</h2>
              <div className=" flex">
                <p className="w-1/5 text-[#ff6106] text-xl font-medium">
                  ${product.discounted_price}
                </p>
                <p className="w-full text-gray-500 text-xl font-medium line-through">
                  ${product.price}
                </p>
              </div>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
