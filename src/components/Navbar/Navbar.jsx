import { NavLink } from 'react-router-dom';
import { CgShoppingCart } from "react-icons/cg";
import { VscHeart } from "react-icons/vsc";
import { useEffect, useState } from 'react';
import { getFromLocalStorage, getFromLocalStorageFev } from '../../localstorage/localstorage';


const Navbar = () => {
const [cartItems, setcatItems] = useState(0)
const [fevItems, setFevItems] = useState(0)
  useEffect(() => { 
    const updateCartItems = () => {
      const items = getFromLocalStorage();
      setcatItems(items.length);
    };

    // Call the updateCartItems function every second
    const intervalId = setInterval(updateCartItems, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
   },[])
  useEffect(() => { 
    const updateFevItem = () => {
      const items = getFromLocalStorageFev();
      setFevItems(items.length);
    };

    // Call the updateFevItem function every second
    const intervalId = setInterval(updateFevItem, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
   },[])

    const navlinks = <>
    <li><NavLink to={'/'}>Vartical Slider</NavLink></li>
    <li><NavLink to={'/horizontal-slider'}>Horizontal Slider</NavLink></li>
    <li><NavLink to={'/cart'}><CgShoppingCart className=' text-2xl'/><span className=' absolute right-0 top-0 bg-pink-600 rounded-full text-white text-xs p-1 font-medium'>+{cartItems}</span></NavLink></li>
    <li><NavLink ><VscHeart className=' text-2xl'/><span className=' absolute right-0 top-0 bg-pink-600 rounded-full text-white text-xs p-1 font-medium'>+{fevItems}</span></NavLink></li>
    <li><a href="https://drive.google.com/drive/folders/1UFyC05uMgshtO8uA5fKHiKpz_hLlI7TA?usp=sharing" target='_blank'>Explanation Video</a></li>
    </>
    return (
<div className="navbar  bg-slate-50">
  <div className="navbar-start lg:hidden">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
  </div>
  <div className=' flex justify-center items-center w-full '>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
  </div>
</div>
    );
};

export default Navbar;