import { createContext, useContext, useState } from "react";
import CartModal from "../Components/CartModal";

const cartContext = createContext();

export function useValue() {
  const value = useContext(cartContext);
  return value;
}

function CustomCartProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);

  function toggle() {
    setShow(!show);
  }

  function handleAdd(product) {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].qty += 1;
      setCart(newCart);
      setTotal((prev) => prev + product.price);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      setTotal((prev) => prev + product.price);
    }
    setItem((prev) => prev + 1);
  }

  function handleRemove(product) {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index === -1) return;

    const updatedCart = [...cart];
    const currentItem = updatedCart[index];

    if (currentItem.qty > 1) {
      updatedCart[index] = {
        ...currentItem,
        qty: currentItem.qty - 1,
      };
    } else {
      updatedCart.splice(index, 1);
    }

    setCart(updatedCart);
    setTotal((prev) => prev - product.price);
    setItem((prev) => prev - 1);
  }

  function handleReset() {
    setTotal(0);
    setItem(0);
    setCart([]);
  }

  return (
    <cartContext.Provider
      value={{
        total,
        item,
        handleAdd,
        handleRemove,
        handleReset,
        toggle,
        cart,
      }}>
      {show ? <CartModal toggle={toggle} /> : children}
    </cartContext.Provider>
  );
}

export default CustomCartProvider;
