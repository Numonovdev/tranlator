import lugat from "../data/lugat.json";
import React, { createContext, useState, useEffect } from "react";

export const BarchalugatContext = createContext();

export const BarchalugatProvider = ({ children }) => {
  
  const [barchalugat, setBarchalugat] = useState([]);

  useEffect(() => {
    
    const initializeData = () => {
      try {
        const savedData = localStorage.getItem("barchalugat");

        if (savedData) {
          setBarchalugat(JSON.parse(savedData));
        } else {
          const limitedData = lugat;
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
    localStorage.setItem("barchalugat", JSON.stringify(barchalugat));
  }, [barchalugat]);
  
  console.log(barchalugat)
  return (
    <BarchalugatContext.Provider value={{ barchalugat, setBarchalugat }}>
      {children}
    </BarchalugatContext.Provider>
  );
};
