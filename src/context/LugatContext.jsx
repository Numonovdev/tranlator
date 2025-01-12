import React, { createContext, useState, useEffect } from "react";

export const LugatContext = createContext();

export const LugatProvider = ({ children }) => {
  
    const [datalugat, setDatalugat] = useState(() => {
    const savedData = localStorage.getItem("datalugat");
  
    return savedData ? JSON.parse(savedData) : [];
});

useEffect(() => {

    localStorage.setItem("datalugat", JSON.stringify(datalugat));
  
}, [datalugat]);

return (

    <LugatContext.Provider value={{ datalugat, setDatalugat }}>
        {children}
    </LugatContext.Provider>
  );
};
