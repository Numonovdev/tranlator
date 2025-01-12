import React, { useContext, useState } from "react";
import lugat from "../data/lugat.json";
import { FaHeart, FaInfoCircle, FaRegHeart } from "react-icons/fa";
import { LugatContext } from "../context/LugatContext";

function Home() {

  const { datalugat, setDatalugat } = useContext(LugatContext);
  const [modal, setModal] = useState(false);

  function handleClick(uzbek, russi) {

    const existingWord = datalugat.find((item) => item.uzbek === uzbek);

    if (existingWord) {
      setDatalugat(datalugat.filter((item) => item.uzbek !== uzbek));
    } else {
      setDatalugat([...datalugat, { uzbek, russi }]);
    }
  }

  return (
    <>

      {modal && (
        
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        
          <div className="bg-white w-11/12 md:w-1/3 p-5 rounded-lg shadow-lg relative">
        
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-700 hover:text-red-600"
              onClick={() => setModal(false)}
            >
              ×
            </button>
        
            <h1 className="text-sm md:text-lg font-bold mb-4">Bugun o`rgangan so`zlarizni qo`shing</h1>
        
            <form 
            action="" 
            className="flex flex-col gap-2"
            >
            
              <input 
              className="px-3 py-1 border outline-none rounded" 
              id="uz" 
              type="text" 
              placeholder="O`zbekcha"
              />
              
              <input 
              className="px-3 py-1 border outline-none rounded" 
              type="text" 
              placeholder="Ruscha"
              />
              
              <button 
              className="w-full sm:w-1/3 lg:w-1/3 py-1 text-sm md:text-lg font-bold text-white rounded-md hover:bg-green-700 duration-500 mx-auto bg-green-600 "
              >
                Qo`shish
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="relative container mx-auto px-5 md:px-0 flex flex-col items-center gap-4 py-4 md:py-8">
        
        <button
          onClick={() => setModal(true)}
          className="flex items-center text-sm md:text-xl font-bold sm:absolute px-3 py-1 duration-500 top-3 right-5 border-4 border-blue-950 rounded hover:bg-blue-950 hover:text-white"
        >
          +
          <span className="md:flex md:text-sm">so`z qo`shish</span>
        </button>

        <h1 className="text-center text-lg md:text-2xl font-bold w-[250px] sm:w-full">
          Bizning sizga bergan odiy 20 ta so`zlar.
        </h1>

        <ul className="w-full md:w-1/3 flex flex-col gap-1">
        
          {Object.entries(lugat).map(([uzbek, russi]) => (
        
            <li
              key={uzbek}
              className="rounded px-4 py-3 border border-blue-600 flex items-center justify-between"
            >
            
              <div>
                <strong>{uzbek}</strong>: {russi}
              </div>

              <div className="flex gap-3 md:gap-4">
            
                <button 
                onClick={() => handleClick(uzbek, russi)}
                >
                
                  {datalugat.some((item) => item.uzbek === uzbek) ? (
                
                  <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
                
                <FaInfoCircle />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
