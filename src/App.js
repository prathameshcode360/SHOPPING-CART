import { useState } from "react";
import Items from "./Components/Items";
import Navbar from "./Components/Navbar";
import cartContext from "./Context/CartContext";

function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  // const [quantity, setQuntity] = useState(0);
  return (
    <div className="App">
      <cartContext.Provider value={{ total, setTotal, item, setItem }}>
        <Navbar />
        <Items />
      </cartContext.Provider>
    </div>
  );
}

export default App;
