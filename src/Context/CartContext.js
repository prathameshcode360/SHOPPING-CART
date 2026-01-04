import { createContext, useState } from "react";

export const cartContext = createContext();

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
