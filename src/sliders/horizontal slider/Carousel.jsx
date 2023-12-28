import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { IoMdHeart } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowRight, MdChevronLeft  } from "react-icons/md";


import "@smastrom/react-rating/style.css";
import { addToFev, addToLocalStorage } from "../../localstorage/localstorage";

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
//   console.log(windowWidth)

const handleAddToCart = (id) => { 
  addToLocalStorage(id)
 }
 const handleAddToFev = (id) => { 
  addToFev(id)
  }

  const nextSlide = () => {
    setCurrentIndex(0);
  };
  const middle = () => {
    setCurrentIndex(1);
  };
  
  const prevSlide = () => {
    setCurrentIndex(2);
  };
//   console.log(currentIndex, "and", currentIndex)

  return (
    <div className=" flex flex-col justify-center">
        <div className="w-full px-5">
        <div className="  flex gap-3 justify-between items-center w-full border-b-2">
            <h3 className=" text-2xl font-medium border-b-2 border-b-[#ff6106]">BEST SELLER</h3>
            <div className=" flex gap-2">
            <button onClick={prevSlide} className=" flex justify-center items-center rounded-full focus:w-7 active:w-7 focus:ease-in w-3 h-3 bg-[#ff6106] text-white"></button>
            <button onClick={middle} className=" flex justify-center items-center rounded-full focus:w-7 active:w-7 w-3 h-3 bg-[#ff6106] text-white"></button>
            <button onClick={nextSlide} className=" flex justify-center items-center rounded-full focus:w-7 active:w-7 w-3 h-3 bg-[#ff6106] text-white"></button>
            </div>
        </div>
        </div>
    <div className="carousel px-5 mx-auto ">
      <div className=" grid grid-cols-1 grid-rows-3 overflow-hidden p-10 justify-center items-center">
        { (data
          ?.slice(currentIndex * 3, (currentIndex + 1) * 3 )
          .map((item, index) => (
            <div key={index}>
              {/* Render single card */}
              <div className="card lg:card-side bg-base-100 lg" onMouseEnter={() => setshowAddToCartBtn(index)} onMouseLeave={() =>  setshowAddToCartBtn(null) }>
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
                      className={` lg:w-48 w-28 h-28 lg:h-48 ${
                        imgStyle == index && "opacity-40 border-2"
                      }`}
                    />
                    {hoveredIndex === index && (
                      <div className="absolute h-10 top-1/2 left-1/2 transform justify-center -translate-x-1/2 -translate-y-1/2 flex gap-4 z-10">
                        <button onClick={() => handleAddToFev(item.id)} className=" lg:w-9 lg:h-9 w-6 h-6 flex justify-center items-center hover:text-[#ff6106] focus:outline-none bg-gray-200 rounded-full font-medium">
                          <IoMdHeart className=" font-bold" />
                        </button>
                        <button className="lg:w-9 lg:h-9 w-6 h-6 flex justify-center items-center hover:text-[#ff6106] focus:outline-none bg-gray-200 rounded-full font-medium">
                          <TfiReload className=" font-bold" />
                        </button>
                        <button className="lg:w-9 lg:h-9 w-6 h-6 flex justify-center items-center hover:text-[#ff6106] focus:outline-none bg-gray-200 rounded-full font-medium">
                          <IoSearchOutline className=" font-bold" />
                        </button>
                      </div>
                    )}
                  </figure>
                </div>
                <div className=" border absolute left-0 top-0 w-14 h-14 flex justify-center items-center rounded-full bg-[#ff6106] text-white outline-none border-none">
                  <p>-{item.discount}%</p>
                </div>
                <div className="card-body justify-center w-full">
                <Rating
                    style={{ maxWidth: 90 }}
                    value={item.rating}
                    readOnly
                  />
                  <h2 className="card-title text-center">{item.title}</h2>
                    <p className=" text-[#ff6106] text-xl font-medium">
                      ${item.discounted_price}
                    </p>
                  <p className=" text-gray-500 text-xl font-medium line-through">
                      ${item.price}
                    </p>
                  <div className=" flex justify-between">
                  <button onClick={() => handleAddToCart(item)} className={` bg-slate-600 rounded-lg hover:opacity-40 active:opacity-20 px-5 text-white py-1 text-xs ${showAddtoCartBtn === index && "block" || "hidden"}`}> Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          )))         
        }
      </div>
    </div>
    </div>
  );
};

export default Carousel;
