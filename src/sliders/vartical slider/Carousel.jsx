import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { IoMdHeart } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowRight, MdChevronLeft  } from "react-icons/md";


import "@smastrom/react-rating/style.css";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [imgStyle, setImgStyle] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showAddtoCartBtn, setshowAddToCartBtn] = useState(null)

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  console.log(windowWidth)

  const nextSlide = () => {
    if (windowWidth < 1280) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(data.length / 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(data.length / 4));
    }
  };
  
  const prevSlide = () => {
    if (windowWidth < 1280) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(data.length / 1)) % Math.ceil(data.length / 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(data.length / 4)) % Math.ceil(data.length / 4));
    }
  };

  return (
    <div className="carousel px-5 ">
        <div className=" flex justify-center items-center">
      <button onClick={prevSlide} className="flex justify-center items-center rounded-full lg:w-14 lg:h-14 bg-[#ff6106] text-white"><MdChevronLeft className=" font-bold text-3xl" /></button>
        </div>
      <div className=" grid lg:grid-cols-2 overflow-hidden p-10 justify-center items-center">
        {windowWidth < 1280 ? (data
          ?.slice(currentIndex , (currentIndex + 1) )
          .map((item, index) => (
            <div key={index}>
              {/* Render single card */}
              <div className="card lg:card-side bg-base-100" onMouseEnter={() => setshowAddToCartBtn(index)} onMouseLeave={() =>  setshowAddToCartBtn(null) }>
                <div>
                  <figure
                    onMouseEnter={() => {
                      setHoveredIndex(index), setImgStyle(index);
                    }}
                    onMouseLeave={() => {
                      setHoveredIndex(null), setImgStyle(null);
                    }}
                    className="relative overflow-hidden"
                  >
                    <img
                      src={item.img}
                      alt="Movie"
                      className={` lg:w-48 lg:h-48 ${
                        imgStyle == index && "opacity-40 border-2"
                      }`}
                    />
                    {hoveredIndex === index && (
                      <div className="absolute h-10 top-1/2 left-1/2 transform justify-center -translate-x-1/2 -translate-y-1/2 flex gap-4 z-10">
                        <button className=" w-9 h-9 flex justify-center items-center hover:text-[#ff6106] focus:outline-none bg-gray-200 rounded-full font-medium">
                          <IoMdHeart className=" font-bold" />
                        </button>
                        <button className="w-9 h-9 flex justify-center items-center hover:text-[#ff6106] focus:outline-none bg-gray-200 rounded-full font-medium">
                          <TfiReload className=" font-bold" />
                        </button>
                        <button className="w-9 h-9 flex justify-center items-center hover:text-[#ff6106] focus:outline-none bg-gray-200 rounded-full font-medium">
                          <IoSearchOutline className=" font-bold" />
                        </button>
                      </div>
                    )}
                  </figure>
                </div>
                <div className=" border absolute left-0 top-0 w-14 h-14 flex justify-center items-center rounded-full bg-[#ff6106] text-white outline-none border-none">
                  <p>-{item.discount}%</p>
                </div>
                <div className=" border absolute right-0 top-0 w-14 h-14 flex flex-col justify-center items-center rounded-full outline-none border-none">
                <p className=" text-gray-500 text-sm font-medium line-through">
                      ${item.price}
                    </p>
                    <p className=" text-[#ff6106] text-sm font-medium">
                      ${item.discounted_price}
                    </p>
                  </div>
                <div className="card-body justify-center w-full">
                  <h2 className="card-title text-center">{item.title}</h2>
                  <p className=" text-justify">{item.description}</p>
                  <div className=" flex justify-between">
                  <Rating
                    style={{ maxWidth: 90 }}
                    value={item.rating}
                    readOnly
                  />
                  <button className={` bg-slate-600 rounded-lg hover:opacity-40 active:opacity-20 px-5 text-white py-1 text-xs ${showAddtoCartBtn === index && "block" || "hidden"}`}> Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          )))
          : (data
            ?.slice(currentIndex * 4, (currentIndex + 1) * 4)
            .map((item, index) => (
              <div key={index}>
                {/* Render single card */}
                <div className="card card-side bg-base-100 h-72"  onMouseEnter={() => setshowAddToCartBtn(index)} onMouseLeave={() =>  setshowAddToCartBtn(null) }>
                  <div>
                    <figure
                      onMouseEnter={() => {
                        setHoveredIndex(index), setImgStyle(index);
                      }}
                      onMouseLeave={() => {
                        setHoveredIndex(null), setImgStyle(null);
                      }}
                      className="relative overflow-hidden"
                    >
                      <img
                        src={item.img}
                        alt="Movie"
                        className={` w-52 h-full ${
                          imgStyle == index && "opacity-40 border-2"
                        }`}
                      />
                      {hoveredIndex === index && (
                        <div className="absolute h-10 top-1/2 left-1/2 transform justify-center -translate-x-1/2 -translate-y-1/2 flex gap-4 z-10">
                          <button className=" w-9 h-9 flex justify-center items-center hover:text-[#ff6106] focus:outline-none bg-gray-200 rounded-full font-medium">
                            <IoMdHeart className=" font-bold" />
                          </button>
                          <button className="w-9 h-9 flex justify-center items-center hover:text-[#ff6106] focus:outline-none bg-gray-200 rounded-full font-medium">
                            <TfiReload className=" font-bold" />
                          </button>
                          <button className="w-9 h-9 flex justify-center items-center hover:text-[#ff6106] focus:outline-none bg-gray-200 rounded-full font-medium">
                            <IoSearchOutline className=" font-bold" />
                          </button>
                        </div>
                      )}
                    </figure>
                  </div>
                  <div className=" border absolute left-0 top-0 w-14 h-14 flex justify-center items-center rounded-full bg-[#ff6106] text-white outline-none border-none">
                    <p>-{item.discount}%</p>
                  </div>
                  <div className="card-body ">
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
                    <div className=" flex justify-center items-center">
                    <button className={` bg-slate-600 rounded-lg hover:opacity-40 active:opacity-20 px-5 text-white py-1 ${showAddtoCartBtn === index && "block" || "hidden"}`}> Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            )))
        }
      </div>
      <div className=" flex justify-center items-center">
      <button onClick={nextSlide} className=" flex justify-center items-center rounded-full lg:w-14 lg:h-14 bg-[#ff6106] text-white"><MdKeyboardArrowRight className=" text-3xl font-bold"/></button>
      </div>
    </div>
  );
};

export default Carousel;
