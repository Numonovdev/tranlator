import React, { useState } from "react";
import dictionary from "../data/lugat.json"; 
import { FaArrowRight } from "react-icons/fa";

function Test() {
  const [savolSoz, setSavolsoz] = useState(null); 
  const [variantlar, setVariantlar] = useState([]);
  const [togrisoz, setTogrisoz] = useState(""); 

  const generateQuestion = () => {
    const entries = Object.entries(dictionary);
    const randomIndex = Math.floor(Math.random() * entries.length);
    const [uzbekWord, russianTranslation] = entries[randomIndex]; 

    let otherOptions = entries
      .filter(([key]) => key !== uzbekWord)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3) 
      .map(([, value]) => value); 

    const allOptions = [...otherOptions, russianTranslation].sort(
      () => 0.5 - Math.random()
    );

    setSavolsoz(uzbekWord); 
    setTogrisoz(russianTranslation); 
    setVariantlar(allOptions); 
  };

  const checkAnswer = (answer) => {
    if (answer === togrisoz) {
      alert("To'g'ri!");
    } else {
      alert("Noto'g'ri, to'g'ri javob: " + togrisoz);
    }
    generateQuestion(); 
  };

  React.useEffect(() => {
    generateQuestion();
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
            {variantlar.map((variantText, index) => (
              <button key={index} onClick={() => checkAnswer(variantText)} className="text-lg font-bold w-full flex items-center justify-center py-2 sm:w-1/3 bg-purple-600  text-white">
                {variantText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Test;
