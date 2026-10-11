import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import { ShoppingCart, Leaf, House, Info } from "lucide-react";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">BRING NATURE HOME</span>
        <h1>Find your little<br /><span>piece of paradise.</span></h1>
        <p>Discover beautiful houseplants that bring fresh air, calm energy, and natural beauty into your everyday life.</p>
        <Link to="/plants" className="primary-btn">Explore Plants <span>→</span></Link>
      </div>
      <div className="hero-art">
        <img src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85" alt="Beautiful green houseplants" />
        <div className="floating-note"><Leaf size={20} /><span>Grow your own happiness</span></div>
      </div>
    </section>
  );
}

function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const location = useLocation();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="navbar">
      <Link to="/" className="brand"><span className="brand-icon"><Leaf size={23} /></span><span>paradise<span className="brand-light">nursery</span></span></Link>
      <nav>
        <Link className={location.pathname === "/" ? "nav-link active" : "nav-link"} to="/"><House size={16} /> Home</Link>
        <Link className={location.pathname === "/plants" ? "nav-link active" : "nav-link"} to="/plants"><Leaf size={16} /> Plants</Link>
        <Link className={location.pathname === "/about" ? "nav-link active" : "nav-link"} to="/about"><Info size={16} /> About Us</Link>
        <Link className={location.pathname === "/cart" ? "cart-link active" : "cart-link"} to="/cart"><ShoppingCart size={19} /> Cart <span className="cart-count">{count}</span></Link>
      </nav>
    </header>
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
          <Route path="/cart" element={<CartItem onCheckout={() => setShowCheckout(true)} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {showCheckout && (
        <div className="modal-backdrop" onClick={() => setShowCheckout(false)}>
          <div className="checkout-modal" onClick={(event) => event.stopPropagation()}>
            <span className="modal-leaf"><Leaf size={28} /></span>
            <h2>Coming Soon!</h2>
            <p>We're growing something wonderful. Online checkout will be available soon!</p>
            <button className="primary-btn" onClick={() => setShowCheckout(false)}>Continue Exploring</button>
          </div>
        </div>
      )}
      <footer><span>© 2026 Paradise Nursery</span><span>Made with care for plant lovers <Leaf size={14} /></span></footer>
    </div>
  );
}