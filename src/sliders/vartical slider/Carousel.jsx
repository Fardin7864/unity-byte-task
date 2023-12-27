import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { IoMdHeart } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";

import "@smastrom/react-rating/style.css";

const Carousel = ({data}) => {
    console.log(data)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [imgStyle, setImgStyle] = useState(null)

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(data.length / 4));
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(data.length / 4)) % Math.ceil(data.length / 4));
    };
  
    return (
<div className="carousel">
      <button onClick={prevSlide}>Previous</button>
      <div className="carousel-inner">
        {data?.slice(currentIndex * 4, (currentIndex + 1) * 4).map((item, index) => (
          <div key={index} className="">
            {/* Render single card */}
            <div className="card card-side bg-base-100 ">
            <div>
              <figure
                onMouseEnter={() =>{ setHoveredIndex(index), setImgStyle(true)}}
                onMouseLeave={() => {setHoveredIndex(null), setImgStyle(false)}}
                className="relative overflow-hidden"
              >
                <img src={item.img} alt="Movie" className={` w-48 h-w-48 ${imgStyle == true && "opacity-40 border-2" }`}/>
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
              <p>-{item.discount}%</p>
            </div>
            <div className="card-body justify-center w-1/2 ">
              <Rating
                style={{ maxWidth: 90 }}
                value={item.rating}
                readOnly
              />
              <h2 className="card-title">{item.title}</h2>
              <div className=" flex">
                <p className="w-1/5 text-[#ff6106] text-xl font-medium">
                  ${item.discounted_price}
                </p>
                <p className="w-full text-gray-500 text-xl font-medium line-through">
                  ${item.price}
                </p>
              </div>
              <p>{item.description}</p>
            </div>
          </div>

          </div>
        ))}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
    );
};

export default Carousel;