import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Like from "./pages/Like";
import BarchaLugat from "./pages/BarchaLugat";
import NotFound from "./pages/NotFound";
import { LugatProvider } from "./context/LugatContext";
import { BarchalugatProvider } from "./context/BarchalugatContext";

function App() {
  return (
    <BarchalugatProvider>
      <LugatProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/like" element={<Like />} />
          <Route path="/words" element={<BarchaLugat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LugatProvider>
    </BarchalugatProvider>
  );
}

export default App;
