// contexts/BrandsContext.js
import React, { createContext, useContext, useState } from "react";

// Create a Context
const BrandsContext = createContext();

// Create a Provider
export const BrandsProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);

  // Add a new brand (example)
  const addBrand = (brand) => {
    setBrands((prevBrands) => [...prevBrands, brand]);
  };

  return (
    <BrandsContext.Provider value={{ brands, addBrand }}>
      {children}
    </BrandsContext.Provider>
  );
};

// Custom hook to use Brands context
export const useBrands = () => {
  const context = useContext(BrandsContext);
  if (!context) {
    throw new Error("useBrands must be used within a BrandsProvider");
  }
  return context;
};
