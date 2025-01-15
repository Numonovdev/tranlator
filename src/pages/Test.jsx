import React, { useContext, useState, useEffect } from "react";
import { BarchalugatContext } from "../context/BarchalugatContext";

function Test() {
  const { barchalugat, setBarchalugat } = useContext(BarchalugatContext);
  const [savolSoz, setSavolsoz] = useState(null); 
  const [variantlar, setVariantlar] = useState([]);
  const [togrisoz, setTogrisoz] = useState(""); 
  const [yaxshi, setYaxshi] = useState(0);
  const [yomon, setYomon] = useState(0);

  function filtirsavol() {
    const barchalugatlar = barchalugat;
    const randomIndex = Math.floor(Math.random() * barchalugatlar.length);
    const { uzbek: uzbekchasi, russian: ruscha } = barchalugatlar[randomIndex];

    // Noto'g'ri javoblarni olish
    let notogrisozlar = barchalugatlar
      .filter((item) => item.uzbek !== uzbekchasi) // To'g'ri javobni chiqarib tashlash
      .sort(() => 0.5 - Math.random()) // Aralashtirish
      .slice(0, 3) // Uchta noto'g'ri variant olamiz
      .map((item) => item.russian); // Faqat ruscha tarjimalar

    // Variantlarni aralashtirish
    const variatsozlar = [...notogrisozlar, ruscha].sort(() => 0.5 - Math.random());

    setSavolsoz(uzbekchasi); 
    setTogrisoz(ruscha); 
    setVariantlar(variatsozlar); 
  };

  function tekshirish(javob) {
    if (javob === togrisoz) {
      setYaxshi(yaxshi + 1);
      alert("To'g'ri!");
    } else {
      setYomon(yomon + 1);
      alert("Noto'g'ri, to'g'ri javob: " + togrisoz);
    }

    filtirsavol(); // Yangi savol olish
  };

  useEffect(() => {
    filtirsavol(); // Komponent birinchi marta yuklanganda savol olish
  }, []);

  return (
    <div className="w-full bg-black/10 min-h-screen absolute top-0 pt-44 -z-10">
      <div className="container mx-auto py-2 md:py-5 flex flex-col items-center gap-3 md:gap-6">
        <h1 className="text-center text-xl md:text-3xl font-bold flex items-center gap-1">
          Ruscha {">"} O'zbekcha Test
        </h1>

        {savolSoz && (
          <div className="flex flex-col gap-3 shadow-md p-5 md:p-10 rounded">
            <p className="text-lg md:text-2xl">
              <span className="text-red-600 font-bold">Savol:</span> <strong>{savolSoz}</strong> ning tarjimasi qaysi?
            </p>

            <div className="flex flex-wrap gap-3 justify-between mt-4 md:mt-16">
              {variantlar.map((variantText) => (
                <button
                  key={variantText} // Noyob kalit sifatida variantText ishlatilmoqda
                  onClick={() => tekshirish(variantText)}
                  className="text-lg font-bold w-full flex items-center justify-center py-2 sm:w-1/3 bg-purple-600 text-white"
                >
                  {variantText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="text-sm md:text-xl font-bold flex flex-col gap-5 py-7 bg-blue-950 px-10">
        <p className="text-green-600">To`g`ri javoblar: {yaxshi}</p>
        <p className="text-red-600">Xatolar: {yomon}</p>
      </div>
    </div>
  );
}

export default Test;
