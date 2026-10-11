import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "./CartSlice";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

export default function CartItem({ onCheckout }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="cart-page page-section">
      <div className="section-heading">
        <span className="eyebrow">YOUR SELECTION</span>
        <h1>Shopping <span>cart.</span></h1>
        <p>Your little indoor garden is coming together.</p>
      </div>
      {items.length === 0 ? (
        <div className="empty-cart">
          <span className="empty-icon"><ShoppingBag size={36} /></span>
          <h2>Your cart is waiting for some green.</h2>
          <p>Explore our collection and find a plant you'll love.</p>
          <Link className="primary-btn" to="/plants">Continue Shopping →</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img className="cart-thumb" src={item.image} alt={item.name} />
                <div className="cart-product"><h3>{item.name}</h3><p>₹{item.price} per plant</p><button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={14} /> Remove</button></div>
                <div className="quantity-control">
                  <button aria-label="Decrease quantity" disabled={item.quantity <= 1} onClick={() => dispatch(decreaseQuantity(item.id))}><Minus size={14} /></button>
                  <span>{item.quantity}</span>
                  <button aria-label="Increase quantity" onClick={() => dispatch(increaseQuantity(item.id))}><Plus size={14} /></button>
                </div>
                <strong className="line-total">₹{item.price * item.quantity}</strong>
              </article>
            ))}
          </div>
          <aside className="order-summary">
            <span className="eyebrow">ORDER SUMMARY</span><h2>Growing total</h2>
            <div className="summary-line"><span>Plants ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span><strong>₹{total}</strong></div>
            <div className="summary-line"><span>Delivery</span><strong>Free</strong></div>
            <div className="summary-total"><span>Total</span><strong>₹{total}</strong></div>
            <button className="primary-btn checkout-btn" onClick={onCheckout}>Checkout →</button>
            <Link className="continue-link" to="/plants">← Continue Shopping</Link>
          </aside>
        </div>
      )}
    </section>
  );
}