"use client";
import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { products } from '../../shop/products.js'; // Corrected path
import "../../css/ProductDetails.css";


export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(0);

  const product = products?.find(p => p.id === parseInt(id));

  if (!product) return <div className="error-msg">Product not found.</div>;

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (!isLoggedIn) {
    alert("Please login to add items to your cart.");
    
    router.push('/login?redirect=/cart');
    return;
  }
    // Logic to save to localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartItem = { ...product, quantity };
    
    // Check if item exists
    const existingIndex = cart.findIndex(item => item.id === product.id);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Trigger a custom event to update the Navbar cart count
    window.dispatchEvent(new Event('cartUpdate'));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-detail-wrapper">
      <div className="container">
        <button className="back-link" onClick={() => router.back()}>← Back to Collections</button>
        
        <div className="main-product-section">
          {/* Left: Image Gallery */}
          <div className="product-gallery">
            <div className="main-img-holder">
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          {/* Right: Essential Info */}
          <div className="product-purchase-info">
            <span className="brand-label">KULIRMA AYURVEDA</span>
            <h1>{product.name}</h1>
            <p className="price-display">₹{product.price}</p>
            
            <div className="purchase-controls">
              <div className="quantity-picker">
                {/* <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)}>+</button> */}
              </div>
              <button className="add-btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>

            <div className="trust-badges">
              <span>✓ 100% Natural</span>
              <span>✓ GMP Certified</span>
              <span>✓ Lab Tested</span>
            </div>
          </div>
        </div>

        {/* Bottom: Detailed Information Tabs/Sections */}
        <div className="detailed-content-grid">
          <section className="content-block">
            <h3>Description</h3>
            <p>{product.description}</p>
          </section>

          <section className="content-block">
            <h3>Benefits</h3>
            <ul className="benefit-list">
              {product.benefits?.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </section>

          <section className="content-block">
            <h3>Ingredients</h3>
            <p className="ingred-text">{product.ingredients}</p>
            <span className="dosha-tag">Ideal for {product.dosha} Dosha</span>
          </section>

          <section className="content-block">
            <h3>Usage Instructions</h3>
            <div className="usage-card">
              <p>{product.usage}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}