import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from "lucide-react";

export default function CartItem({ onCheckout }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalQuantity = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const grandTotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <section className="cart-page page-section">
      <div className="section-heading">
        <span className="eyebrow">YOUR SELECTION</span>
        <h1>Shopping <span>Cart</span></h1>
        <p>Review your plants and manage your order.</p>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <span className="empty-icon">
            <ShoppingBag size={36} />
          </span>
          <h2>Your shopping cart is empty.</h2>
          <p>Discover our houseplants and find your favourite.</p>
          <Link className="primary-btn" to="/plants">
            Continue Shopping →
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img
                  className="cart-thumb"
                  src={item.image}
                  alt={item.name}
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80";
                  }}
                />

                <div className="cart-product">
                  <h3>{item.name}</h3>
                  <p>Unit price: ₹{item.price}</p>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    <Trash2 size={14} />
                    Remove
                  </button>
                </div>

                <div className="quantity-control">
                  <button
                    aria-label={`Decrease ${item.name} quantity`}
                    disabled={item.quantity <= 1}
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        item.quantity - 1
                      )
                    }
                  >
                    <Minus size={14} />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() =>
                      handleQuantityChange(
                        item.id,
                        item.quantity + 1
                      )
                    }
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <strong className="line-total">
                  ₹{item.price * item.quantity}
                </strong>
              </article>
            ))}
          </div>

          <aside className="order-summary">
            <span className="eyebrow">ORDER SUMMARY</span>
            <h2>Your Order</h2>

            <div className="summary-line">
              <span>Total plants ({totalQuantity})</span>
              <strong>₹{grandTotal}</strong>
            </div>

            <div className="summary-line">
              <span>Delivery</span>
              <strong>Free</strong>
            </div>

            <div className="summary-total">
              <span>Grand Total</span>
              <strong>₹{grandTotal}</strong>
            </div>

            <button
              className="primary-btn checkout-btn"
              onClick={onCheckout}
            >
              Proceed to Checkout →
            </button>

            <Link className="continue-link" to="/plants">
              ← Continue Shopping
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}
