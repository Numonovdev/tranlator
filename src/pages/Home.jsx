import React from "react";
import lugat from "../data/lugat.json";
import { FaHeart, FaInfoCircle, FaRegHeart } from "react-icons/fa";

function Home() {
  return (
    <div className="relative container mx-auto px-5 md:px-0 flex flex-col items-center gap-4 py-4 md:py-8">
      <button className="absolute flex gap-2 -top-12 md:top-5 right-5 px-2  md:px-4 md:py-2 border-2 border-blue-600 hover:text-white duration-500 hover:bg-blue-950 font-bold text-sm md:text-xl">
        + <span className="hidden lg:flex">so`z qo`shish</span>
      </button>
      <div className=" flex flex-col items-center">
        <h1 className="text-center text-lg md:text-2xl font-bold">
          Bizning sizga bergan odiy 20 ta so`zlar.
        </h1>
        <p className=" font-medium text-red-600 text-center text-sm md:text-lg underline">
          
          Yangi o`rganyotgan so`zlaringizni qo`shish uchun{"  "}
          <span className="text-blue-600">+</span>{"  "}
          tugmasin bosing.
        </p>
        
      </div>
      <ul className="w-full md:w-1/3 flex flex-col gap-1">
        {Object.entries(lugat).map(([uzbek, russian]) => (
          <li key={uzbek} className=" px-4 py-3 border border-blue-600 flex items-center justify-between">
            
            <div>
            <strong>{uzbek}</strong>: {russian}
            </div>

            <div className="flex gap-3 md:gap-4">
            <FaHeart className="hidden"/>
            <FaRegHeart />
            <FaInfoCircle />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
