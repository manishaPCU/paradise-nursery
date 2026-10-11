import { useState } from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  ShoppingCart,
  Leaf,
  House,
  Info,
} from "lucide-react";

import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const location = useLocation();

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon"><Leaf size={23} /></span>
        <span>Paradise <span className="brand-light">Nursery</span></span>
      </Link>

      <nav>
        <Link className="nav-link" to="/">
          <House size={16} /> Home
        </Link>
        <Link className="nav-link" to="/plants">
          <Leaf size={16} /> Plants
        </Link>
        <Link className="nav-link" to="/about">
          <Info size={16} /> About Us
        </Link>
        <Link
          className="cart-link"
          to="/cart"
          aria-label={`Shopping cart, ${cartCount} items`}
        >
          <ShoppingCart size={18} />
          Cart <span className="cart-count">{cartCount}</span>
        </Link>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="eyebrow">WELCOME TO PARADISE NURSERY</span>

        <h1>
          Paradise Nursery
          <br />
          <span>Bring Nature Home</span>
        </h1>

        <p>
          Discover beautiful houseplants for every room.
          Add natural beauty to your space and create your own
          peaceful green paradise.
        </p>

        <Link to="/plants" className="primary-btn">
          Get Started <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default function App() {
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/cart"
            element={
              <CartItem
                onCheckout={() => setShowCheckout(true)}
              />
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {showCheckout && (
        <div
          className="modal-backdrop"
          onClick={() => setShowCheckout(false)}
        >
          <div
            className="checkout-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <span className="modal-leaf"><Leaf size={28} /></span>
            <h2>Coming Soon!</h2>
            <p>
              Our online checkout is being prepared.
              Thank you for shopping with Paradise Nursery!
            </p>
            <button
              className="primary-btn"
              onClick={() => setShowCheckout(false)}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      <footer>
        <span>© 2026 Paradise Nursery</span>
        <span>Growing happiness, one plant at a time.</span>
      </footer>
    </div>
  );
}
