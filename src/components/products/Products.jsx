import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Products = () => {
  const [products, setProducts] = useState();
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
            <figure
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative overflow-hidden"
            >
              <img
                src={product.img}
                alt="Movie"
                className=" w-48 h-w-48 hover:opacity-40 hover:border-2"
              />
              <div className=" border absolute left-0 top-0 w-14 h-14 flex justify-center items-center rounded-full bg-[#ff6106] text-white">
                <p>-{product.discount}%</p>
              </div>
              {hoveredIndex === index && (
            <div className="absolute h-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 z-10">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none">
                Button 1
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none">
                Button 2
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none">
                Button 3
              </button>
            </div>
          )}
            </figure>
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
      {/* <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={products[0].img}
          alt="Movie"
          className=" w-36 h-36"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Products;
