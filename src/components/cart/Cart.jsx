import { AiFillDelete, AiFillCreditCard } from "react-icons/ai";
// import { getFromLocalStorage } from "../LocalStorage/Localstorage";
import {  useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { getFromLocalStorage } from "../../localstorage/localstorage";

const Cart = () => {
  const [toRender, setToRender] = useState(false);
  const products = getFromLocalStorage();
  const [showAll, setShowAll] = useState(false);

  
  const handleRender = ()=>{
    setToRender(!toRender)
  }

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  const toDisplay = !showAll ? products?.slice(0, 4) : products;
  let totalPrice = 0;
  let tex = 0;
  products?.forEach((product) => {
    totalPrice += product.price;
    tex += totalPrice * 0.02;
  });

  return (
    <div className=" my-10 px-5">
      <div className="flex lg:flex-row flex-col-reverse justify-center gap-4">
        <div className="px-3 grid grid-cols-2">
          {toDisplay?.map((item) => (
            <div key={item.id}>
            {/* Render single card */}
            <div className="card lg:card-side bg-base-100 ">
              <div>
                <figure
                  className="relative overflow-hidden"
                >
                  <img
                    src={item.img}
                    alt="Movie"
                    className={`  w-28 h-28 `}
                  />
                </figure>
              </div>
              <div className=" border absolute text-xs left-0 top-0 w-9 h-9 flex justify-center items-center rounded-full bg-[#ff6106] text-white outline-none border-none">
                <p>-{item.discount}%</p>
              </div>
              <div className="card-body w-full">
              <Rating
                  style={{ maxWidth: 50 }}
                  value={item.rating}
                  readOnly
                />
                <h2 className="card-title text-xs lg:text-base">{item.title}</h2>
                  <p className=" text-[#ff6106] text-sm font-medium">
                    ${item.discounted_price}
                  </p>
                <p className=" text-gray-500 text-xs lg:text-sm font-medium line-through">
                    ${item.price}
                  </p>
              </div>
            </div>
          </div>          ))}
        </div>
        <div className="bg-[#ff99004d] lg:w-1/3 h-5/6 rounded-xl my-5">
          <div className="px-5">
            <h4 className="text-xl font-bold py-4">Order Summary</h4>
            <p className="py-2">Selected Item:{products?.length} </p>
            <p className="py-2">Total Price: ${totalPrice}</p>
            <p className="py-2">Tex: ${tex}</p>
            <h4 className=" text-lg font-bold py-2">
              Grand Total: ${totalPrice  + tex}{" "}
            </h4>
          </div>
          <div className="flex flex-col gap-3">
            <button className="btn btn-accent text-slate-50">
              Clear Cart <AiFillDelete></AiFillDelete>
            </button>
            <button className="btn btn-primary ">
              Check Out <AiFillCreditCard></AiFillCreditCard>{" "}
            </button>
          </div>
        </div>
      </div>
      { products?.length > 3 &&
      
      
        (!showAll ? <div className="flex justify-center my-6">
        <button onClick={handleShowAll} className="btn btn-warning">
          Show All
        </button>
        </div>
         : <div className="flex justify-center my-6">
         <button onClick={handleShowAll} className="btn btn-warning">
           Show less
         </button>
         </div>)
    || ''

      }
    </div>
  );
};

export default Cart;