"use client";
import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { products } from '../../shop/products.js'; 
import "../../css/ProductDetails.css";
import BuyNowModal from "../../../components/BuyNowModal.jsx";


// Next.js page components receive { params }
export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);  

  // 2. We find the product here. Since 'id' is a string from the URL, 
  // we convert it to a Number to match your products.js data.
  const product = products?.find(p => p.id === parseInt(id));

  if (!product) return <div className="error-msg">Product not found.</div>;

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
              {/* Buy Now triggers the WhatsApp Modal */}
              <button className="buy-now-btn" onClick={() => setIsModalOpen(true)}>
                Buy Now
              </button>

              {isModalOpen && (
                <BuyNowModal 
                  product={product} 
                  onClose={() => setIsModalOpen(false)} 
                />
              )}
            </div>

            <div className="trust-badges">
              <span>✓ 100% Natural</span>
              <span>✓ GMP Certified</span>
              <span>✓ Lab Tested</span>
            </div>
          </div>
        </div>

        {/* Bottom: Detailed Information Sections */}
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
  <h3>Ingredients (per 100g)</h3>
  <div className="ingredients-table-wrapper">
    <table className="ingredients-table">
      <thead>
        <tr>
          <th>Ingredient</th>
          <th>Scientific Name</th>
          <th>Part</th>
          <th>Qty</th>
        </tr>
      </thead>
      <tbody>
        {product.ingredients?.map((item, index) => (
          <tr key={index}>
            <td className="font-bold">{item.name}</td>
            <td className="italic">{item.scientific}</td>
            <td>{item.part}</td>
            <td className="text-right">{item.qty}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  {product.dosha && <span className="dosha-tag">Ideal for {product.dosha} Dosha</span>}
</section>

          <section className="content-block">
            <h3>Usage Instructions</h3>
            <div className="usage-card">
              <p>{product.usage + " "}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}