import data from "../data";
import ItemCard from "./ItemCard";

function Items() {
  return (
    <div className="items">
      {data.map((item, index) => (
        <ItemCard
          key={index}
          id={item.id}
          name={item.name}
          price={item.price}
          qty={item.qty}
        />
      ))}
    </div>
  );
}

export default Items;
