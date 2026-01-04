function CartModal({ toggle }) {
  return (
    <div className="cart">
      <div className="corner-buttons">
        <div className="left">
          <button>Clear</button>
        </div>
        <div className="right">
          <button onClick={toggle}>Close</button>
        </div>
      </div>
      <div className="cart-items"></div>
      <div className="footer">
        <div className="total-price">Total:500</div>
        <div className="total-items">Total-Items:6</div>
      </div>
    </div>
  );
}

export default CartModal;
