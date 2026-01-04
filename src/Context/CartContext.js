import { createContext, useContext, useState } from "react";
import data from "../data";

const cartContext = createContext();

export function useValue() {
  const value = useContext(cartContext);
  return value;
}

function CustomCartProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);

  function handleAdd(i) {
    const item = data.find((item) => item.id === i);
    setTotal((prev) => prev + item.price);
    setItem((prev) => prev + 1);
  }

  function handleRemove(i) {
    const item = data.find((item) => item.id === i);
    if (total <= 0) {
      return;
    }
    setTotal((prev) => prev - item.price);
    setItem((prev) => prev - 1);
  }

  return (
    <cartContext.Provider value={{ total, item, handleAdd, handleRemove }}>
      {children}
    </cartContext.Provider>
  );
}

export default CustomCartProvider;
