import { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import data from "../data";

function ItemCard(props) {
  const { id, name, price, qty } = props;
  const { total, setTotal, setItem } = useContext(cartContext);

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
    <div className="item-card">
      <h2>{name}</h2>
      <p>price:{price}</p>
      <span>{qty}</span>
      <button onClick={() => handleAdd(id)}>Add-To-Cart</button>
      <button onClick={() => handleRemove(id)}>Remove-From-Cart</button>
    </div>
  );
}

export default ItemCard;
