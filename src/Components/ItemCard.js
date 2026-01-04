import { useValue } from "../Context/CartContext";

function ItemCard(props) {
  const { id, name, price, qty } = props;
  const { handleAdd, handleRemove } = useValue();

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
