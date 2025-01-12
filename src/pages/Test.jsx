import React, { useState } from "react";
import lugat from "../data/lugat.json"; 

function Test() {
  const [savolSoz, setSavolsoz] = useState(null); 
  const [variantlar, setVariantlar] = useState([]);
  const [togrisoz, setTogrisoz] = useState(""); 
  const [yaxshi, setYaxshi]=useState(0)
  const [yomon, setYomon]=useState(0)

  function filtirsavol(){
    const barchalugatlar = Object.entries(lugat);
    const randomIndex = Math.floor(Math.random() * barchalugatlar.length);
    const [uzbekchasi, ruscha] = barchalugatlar[randomIndex]; 

    let notogrisozlar = barchalugatlar
      .filter(([key]) => key !== uzbekchasi)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3) 
      .map(([, value]) => value); 

    const variatsozlar = [...notogrisozlar, ruscha].sort(() => 0.5 - Math.random());

    setSavolsoz(uzbekchasi); 
    setTogrisoz(ruscha); 
    setVariantlar(variatsozlar); 
  };

  function tekshirish(javob){
    
    if (javob === togrisoz) {
      setYaxshi(yaxshi+1)
      alert("To'g'ri!");
    } else {
      setYomon(yomon+1)
      alert("Noto'g'ri, to'g'ri javob: " + togrisoz);
    }
    
    filtirsavol(); 
  };

  React.useEffect(() => {
  
    filtirsavol();
  }, []);

  return (
    <div className="w-full bg-black/10 min-h-screen absolute top-0 pt-44 -z-10">
      <div className="container mx-auto py-2 md:py-5 flex flex-col items-center gap-3 md:gap-6">
    
        <h1 className="text-center text-xl md:text-3xl font-bold flex items-center gap-1">Ruscha {">"} O'zbekcha Test</h1>
    
        {savolSoz && (
    
          <div className="flex flex-col gap-3 shadow-md p-5 md:p-10  rounded">
          
            <p className="text-lg md:text-2xl">
          
              <span className="text-red-600 font-bold">Savol:</span> <strong>{savolSoz}</strong> ning tarjimasi qaysi?
            </p>
          
            <div className="flex flex-wrap gap-3 justify-between mt-4 md:mt-16">
          
              {variantlar
              .map((variantText, index) => (
              
              <button 
              key={index} 
              onClick={() => tekshirish(variantText)} 
              className="text-lg font-bold w-full flex items-center justify-center py-2 sm:w-1/3 bg-purple-600  text-white"
              >
              
                  {variantText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="text-sm md:text-xl font-bold flex flex-col  gap-5 py-7 bg-blue-950 px-10">

        <p className="text-green-600">
          To`g`ri javoblar: {yaxshi}
        </p>
        
        <p className="text-red-600">
          Xatolar:  {yomon}
        </p>
      </div>
    </div>
  );
}

export default Test;
