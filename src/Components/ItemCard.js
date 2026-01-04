function ItemCard(props) {
  const { id, name, price, qty } = props;
  return (
    <div className="item-card">
      <h2>{name}</h2>
      <p>price:{price}</p>
      <span>{qty}</span>
      <button>Add-To-Cart</button>
      <button>Remove-From-Cart</button>
    </div>
  );
}

export default ItemCard;
