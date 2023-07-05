

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {FaShoppingCart} from "react-icons/fa"


const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#products",
    display: "Products",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#search",
    display: "Search",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className=" text-3xl font-bold text-[darkcyan]">O-Store</h1>
      <ul className="hidden md:flex">
        {NAV__LINK.map((item, index) => (
          <Link href={item.path} key={index}>
            <li className="p-4 ">{item.display}</li>
          </Link>
        ))}
      </ul>
      <div className="flex text-3xl font-bold text-[darkcyan]">
        <p className="p-4">
          <AiOutlineSearch size={30} />
        </p>
        <p className="p-4">
          <FaShoppingCart size={30} />
        </p>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed z-10 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <h1 className="w-full text-3xl font-bold text-[darkcyan] m-4">
          NavBar
        </h1>
        <ul className="p-4 uppercase text-[darkcyan]">
          {NAV__LINK.map((item, index) => (
            <Link href={item.path} key={index}>
              <li className="p-4 border-b border-gray-600">{item.display}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
