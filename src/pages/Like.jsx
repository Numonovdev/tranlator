import React, { useContext } from "react";
import { LugatContext } from "../context/LugatContext";
import 
{ 
  FaHeart, 
  FaInfoCircle, 
  FaRegHeart 
} from "react-icons/fa";

function Like() {

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

    <div className="container mx-auto px-5 py-8">
    
      <h1 className="text-center text-xl font-bold mb-4">Saqlangan So'zlar</h1>

      {
      datalugat && 
      datalugat.length > 0 ? (
        
        <ul className="w-full md:w-1/3 mx-auto flex flex-col gap-2">         
          {
          datalugat.map(({ uzbek, russi }, index) => (
            
            <li
              key={index}
              className="px-4 py-3 border border-blue-600 flex items-center justify-between"
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
      ) : (
        <p className="text-center text-red-500">Hozircha saqlangan so‘z yo‘q.</p>
      )}
    </div>
  );
}

export default Like;
