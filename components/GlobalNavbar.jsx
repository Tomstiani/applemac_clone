import React from "react";
import { SearchIcon, ShoppingBagIcon } from "@heroicons/react/outline";

const GlobalNavbar = () => {
  return (
    <nav className="bg-gray-800 z-50 w-full navbar flex items-center">
      <div className=" w-full mx-auto flex justify-between items-center text-gray-300 max-w-5xl text-xs transition-all duration-75">
        <p className="cursor-pointer hover:text-gray-100">Store</p>
        <p className="cursor-pointer hover:text-gray-100">Mac</p>
        <p className="cursor-pointer hover:text-gray-100">iPad</p>
        <p className="cursor-pointer hover:text-gray-100">iPhone</p>
        <p className="cursor-pointer hover:text-gray-100">Watch</p>
        <p className="cursor-pointer hover:text-gray-100">AirPods</p>
        <p className="cursor-pointer hover:text-gray-100">TV & Home</p>
        <p className="cursor-pointer hover:text-gray-100">Only on Apple</p>
        <p className="cursor-pointer hover:text-gray-100">Accessories</p>
        <p className="cursor-pointer hover:text-gray-100">Support</p>
        <SearchIcon className="text-white h-4 w-4 cursor-pointer" />
        <ShoppingBagIcon className="text-white h-4 w-4 cursor-pointer" />
      </div>
    </nav>
  );
};

export default GlobalNavbar;
