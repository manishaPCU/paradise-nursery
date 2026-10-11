import { Leaf, Heart, Sprout } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="about-page page-section">
      <div className="section-heading">
        <span className="eyebrow">OUR STORY</span>
        <h1>A little more <span>green.</span></h1>
        <p>We believe every home deserves a touch of nature.</p>
      </div>
      <div className="about-layout">
        <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85" alt="A collection of indoor plants" />
        <div className="about-copy">
          <h2>Helping you grow a happier home.</h2>
          <p>Paradise Nursery began with a simple idea: bringing the beauty of nature into everyday spaces. We curate houseplants for beginners and experienced plant lovers alike.</p>
          <p>From air-purifying favourites to charming succulents and trailing plants, our collection helps you create a greener, more welcoming home.</p>
          <div className="about-values">
            <div><Leaf size={22} /><strong>Nature first</strong><span>Celebrate the beauty of plants.</span></div>
            <div><Heart size={22} /><strong>Made with care</strong><span>Find a plant you'll love.</span></div>
            <div><Sprout size={22} /><strong>Grow together</strong><span>Every leaf starts somewhere.</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}