import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart, incrementQuantity, decrementQuantity } from "../utils/cartSlice";
import "./style.css";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Assign a price to each item (for demo, use id * 10 + 49)
  const itemsWithPrice = cartItems.map(item => ({
    ...item,
    price: (item.id * 10 + 49)
  }));
  const total = itemsWithPrice.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link to="/">
            <button className="btn btn-primary">Go to Shop</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {itemsWithPrice.map((item) => (
              <div className="cart-item fade-in" key={item.id}>
                <img
                  className="cart-item-image"
                  src={`https://picsum.photos/seed/${item.id}/100/75`}
                  alt={item.title}
                />
                <div className="cart-item-details">
                  <h2 className="cart-item-title">{item.title}</h2>
                  <div className="cart-item-price">${item.price}</div>
                  <div className="cart-qty-bar">
                    <button className="btn btn-qty" onClick={() => dispatch(decrementQuantity(item.id))}>−</button>
                    <span className="cart-qty">{item.quantity || 1}</span>
                    <button className="btn btn-qty" onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                  </div>
                </div>
                <button className="btn btn-danger" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-total-bar">
            <span className="cart-total-label">Total:</span>
            <span className="cart-total-value">${total}</span>
            <button className="btn btn-danger" onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart; 