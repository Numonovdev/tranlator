import lugat from "../data/lugat.json";
import React, { createContext, useState, useEffect } from "react";

export const BarchalugatContext = createContext();

export const BarchalugatProvider = ({ children }) => {
  const [barchalugat, setBarchalugat] = useState([]);

  useEffect(() => {
    const initializeData = () => {
      try {
        // LocalStorage'dan ma'lumotni olish
        const savedData = localStorage.getItem("barchalugat");

        if (savedData) {
          setBarchalugat(JSON.parse(savedData));
        } else {
          // Agar localStorage bo'sh bo'lsa, JSON fayldan lug'atni yuklash
          const limitedData = lugat.slice(0, 10); // Faqat 10 ta elementni olish
          localStorage.setItem("barchalugat", JSON.stringify(limitedData));
          setBarchalugat(limitedData);
        }
      } catch (error) {
        console.error("Lugatlarni yuklashda xatolik yuz berdi:", error);
      }
    };
    initializeData();
  }, []);
  
  useEffect(() => {
    // Har safar `barchalugat` o'zgarsa, localStorage'ga saqlaymiz
    localStorage.setItem("barchalugat", JSON.stringify(barchalugat));
  }, [barchalugat]);
  
  console.log(barchalugat)
  return (
    <BarchalugatContext.Provider value={{ barchalugat, setBarchalugat }}>
      {children}
    </BarchalugatContext.Provider>
  );
};
