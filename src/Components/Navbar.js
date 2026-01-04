import { useValue } from "../Context/CartContext";

function Navbar() {
  const { total, item } = useValue();
  return (
    <div className="navbar">
      <div className="left">
        <h2>Shopie</h2>
        <img
          src="https://cdn-icons-png.flaticon.com/128/14624/14624732.png"
          alt="logo-img"
        />
      </div>
      <div className="right">
        <div className="cart-items">cart-items {item}</div>
        <div className="Total-price">Total {total}</div>
      </div>
    </div>
  );
}

export default Navbar;
