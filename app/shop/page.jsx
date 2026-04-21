"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { products } from './products'; // Path must be exact
import "../css/Shop.css";

export default function Shop() {
  const router = useRouter();

  // Safety check: if products is undefined, show a loader or message
  if (!products || products.length === 0) {
    return <div className="loading">Loading our formulations...</div>;
  }

  return (
    <main className="shop-page">
      <header className="shop-header-minimal">
        <div className="container">
          <label>KULIRMA COLLECTION</label>
          <h1>Pure Ayurvedic Solutions</h1>
        </div>
      </header>

      <div className="shop-container">
        <div className="aesthetic-grid">
          {products.map((product) => (
            <div 
              className="product-card-premium" 
              key={product.id}
              onClick={() => router.push(`/product/${product.id}`)}
            >
              <div className="image-frame">
                <img src={product.image} alt={product.name} />
                {/* <div className="overlay-info">
                  <span>View Details</span>
                </div> */}
              </div>
              
              <div className="content-frame">
                <div className="meta-top">
                  <span className="category-label">{product.category}</span>
                  <span className="dosha-tag">{product.dosha}</span>
                </div>
                <h3>{product.name}</h3>
                <div className="price-row">
                  <span className="price-text">₹{product.price}</span>
                  <button className="minimal-view-btn">
                    View More 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}