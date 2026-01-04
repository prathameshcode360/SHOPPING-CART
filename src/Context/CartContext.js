import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export function useValue() {
  const value = useContext(cartContext);
  return value;
}

function CustomCartProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <cartContext.Provider value={{ total, setTotal, item, setItem }}>
      {children}
    </cartContext.Provider>
  );
}

export default CustomCartProvider;
