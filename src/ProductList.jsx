import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const plants = [
    { id: 1, name: "Monstera Deliciosa", price: 599, category: "Air Purifying", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80", description: "Bold tropical leaves" },
    { id: 2, name: "Snake Plant", price: 399, category: "Air Purifying", image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b2b?auto=format&fit=crop&w=600&q=80", description: "Low-maintenance beauty" },
    { id: 3, name: "Peace Lily", price: 449, category: "Air Purifying", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80", description: "Elegant flowering plant" },
    { id: 4, name: "Areca Palm", price: 699, category: "Air Purifying", image: "https://images.unsplash.com/photo-1632207691143-643e2a0a5c8b?auto=format&fit=crop&w=600&q=80", description: "A tropical statement" },
    { id: 5, name: "Spider Plant", price: 299, category: "Air Purifying", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c2a1?auto=format&fit=crop&w=600&q=80", description: "Fresh and cheerful" },
    { id: 6, name: "Rubber Plant", price: 549, category: "Air Purifying", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80", description: "Glossy green foliage" },
    { id: 7, name: "Jade Plant", price: 249, category: "Succulents", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80", description: "A symbol of good fortune" },
    { id: 8, name: "Echeveria", price: 199, category: "Succulents", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80", description: "Sculptural rosette leaves" },
    { id: 9, name: "Aloe Vera", price: 229, category: "Succulents", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80", description: "A useful household plant" },
    { id: 10, name: "String of Pearls", price: 349, category: "Succulents", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80", description: "Trailing bead-like foliage" },
    { id: 11, name: "Haworthia", price: 279, category: "Succulents", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80", description: "Compact striped leaves" },
    { id: 12, name: "Burro's Tail", price: 329, category: "Succulents", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=600&q=80", description: "Beautiful trailing stems" },
    { id: 13, name: "Golden Pothos", price: 299, category: "Hanging Plants", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80", description: "Easy trailing greenery" },
    { id: 14, name: "Boston Fern", price: 379, category: "Hanging Plants", image: "https://images.unsplash.com/photo-1597055181300-a8b4be4f8a28?auto=format&fit=crop&w=600&q=80", description: "Soft, feathery fronds" },
    { id: 15, name: "English Ivy", price: 349, category: "Hanging Plants", image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80", description: "Classic cascading vines" },
    { id: 16, name: "String of Hearts", price: 399, category: "Hanging Plants", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c2a1?auto=format&fit=crop&w=600&q=80", description: "Delicate heart-shaped leaves" },
    { id: 17, name: "Philodendron", price: 449, category: "Hanging Plants", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80", description: "Lush cascading foliage" },
    { id: 18, name: "Hoya Carnosa", price: 499, category: "Hanging Plants", image: "https://images.unsplash.com/photo-1597055181300-a8b4be4f8a28?auto=format&fit=crop&w=600&q=80", description: "Waxy leaves and lovely vines" },
];

export default function ProductList() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);
    const [unused] = [null];
    const categories = ["Air Purifying", "Succulents", "Hanging Plants"];

    return (
        <section className="catalog page-section">
            <div className="section-heading">
                <span className="eyebrow">THE GREEN COLLECTION</span>
                <h1>Plants for every <span>space.</span></h1>
                <p>Find the perfect green companion for your home.</p>
            </div>
            {categories.map((category) => (
                <section className="plant-category" key={category}>
                    <div className="category-heading"><h2>{category}</h2><span>{plants.filter((p) => p.category === category).length} plants</span></div>
                    <div className="plant-grid">
                        {plants.filter((plant) => plant.category === category).map((plant) => {
                            const added = items.some((item) => item.id === plant.id);
                            return (
                                <article className="plant-card" key={plant.id}>
                                    <div className="plant-image"><img
                                        src={plant.image}
                                        alt={plant.name}
                                        loading="lazy"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src =
                                                "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80";
                                        }}
                                    /><span className="plant-tag">{plant.category}</span></div>
                                    <div className="plant-info"><h3>{plant.name}</h3><p>{plant.description}</p><div className="plant-card-bottom"><strong>₹{plant.price}</strong><button className="add-btn" disabled={added} onClick={() => dispatch(addToCart(plant))}>{added ? "Added ✓" : "Add to Cart"}</button></div></div>
                                </article>
                            );
                        })}
                    </div>
                </section>
            ))}
        </section>
    );
}