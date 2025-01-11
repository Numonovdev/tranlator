import React from "react";
import { FiAlignLeft } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router";
import Navbar from "./Navbar";
function Header() {
  return (
    <div className="w-full bg-gradient-to-t from-blue-950 to-blue-900 pt-5">
      
      <div className="container mx-auto px-5 md:px-0 flex justify-between items-center text-2xl md:text-4xl font-bold text-white">
        
        <div className="flex gap-4 md:gap-10 items-center">
          
          <FiAlignLeft />
          <h1>Translator</h1>
        </div>
        
        <div>
          
          <Link to="/like" className="hover:text-red-700 duration-700">
            <FaHeart />
          </Link>
        </div>
      </div>
      <Navbar/>
    </div>
  );
}

export default Header;
