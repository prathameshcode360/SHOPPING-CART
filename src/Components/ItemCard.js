import { useValue } from "../Context/CartContext";

function ItemCard(props) {
  const { id, name, price } = props;
  const { handleAdd, handleRemove } = useValue();

  return (
    <div className="item-card">
      <h2>{name}</h2>
      <p>price:{price}</p>
      <div className="card-actions">
        <button onClick={() => handleAdd({ id, name, price })}>Add</button>
        <button onClick={() => handleRemove({ id, name, price })}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
