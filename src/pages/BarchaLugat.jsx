import React, { useContext } from "react";
import { FaHeart, FaInfoCircle, FaRegHeart } from "react-icons/fa";
import { LugatContext } from "../context/LugatContext";

function BarchaLugat() {
  const { datalugat, setDatalugat } = useContext(LugatContext);

  function handleClick(uzbek, russi) {
    const existingWord = datalugat.find((item) => item.uzbek === uzbek);

    if (existingWord) {
      setDatalugat(datalugat.filter((item) => item.uzbek !== uzbek));
    } else {
      setDatalugat([...datalugat, { uzbek, russi }]);
    }
  }

  return (
    <div className="relative container mx-auto px-5 md:px-0 flex flex-col items-center gap-4 py-4 md:py-8">
      
      <h1 className="text-center text-lg md:text-2xl font-bold w-[250px] sm:w-full">
        Barcha so`zlar.
      </h1>

      <ul className="w-full md:w-1/3 flex flex-col gap-1">    
        {datalugat.length > 0 ? (
          datalugat.map(({ uzbek, russi }, index) => (
            
            <li
              key={index} 
              className="rounded px-4 py-3 border border-blue-600 flex items-center justify-between"
            >
              
              <div>
                <strong>{uzbek}</strong>: {russi}
              </div>

              <div className="flex gap-3 md:gap-4">
                
                <button onClick={() => handleClick(uzbek, russi)}>
                  {datalugat.some((item) => item.uzbek === uzbek) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>

                <FaInfoCircle />
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Hozircha so'zlar mavjud emas.
          </p>
        )}
      </ul>
    </div>
  );
}

export default BarchaLugat;
