import { useValue } from "../Context/CartContext";

function CartModal() {
  const { cart, total, handleReset, toggle } = useValue();
  console.log(cart);

  return (
    <div className="cart-container">
      <div className="corner-buttons">
        <div className="left">
          <button onClick={handleReset}>Clear</button>
        </div>
        <div className="right">
          <button onClick={toggle}>Close</button>
        </div>
      </div>
      <div className="cart-items">
        <div className="cart-table">
          <table>
            <thead>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price </th>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.qty * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="cart-total">
        <div className="total-price">{total}</div>
      </div>
    </div>
  );
}

export default CartModal;
