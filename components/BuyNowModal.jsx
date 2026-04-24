"use client";
import { useState } from "react";
import "../app/css/BuyNowModal.css";

export default function BuyNowModal({ product, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    quantity: 1
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleWhatsAppRedirect = (e) => {
  e.preventDefault();

  const whatsappNumber = "918310767082"; // Your actual number
  const productLink = window.location.origin + `/product/${product.id}`;

  // Formatting the Message without bold asterisks
  const message = `New Order from Website%0A%0A` +
    `Product: ${product.name}%0A` +
    `Quantity: ${formData.quantity}%0A` +
    `Price: Rs. ${product.price}%0A%0A` +
    `Customer Details:%0A` +
    `Name: ${formData.name}%0A` +
    `Phone: ${formData.phone}%0A` +
    `Address: ${formData.address}%0A%0A` +
    `Please confirm my order.%0A%0A` +
    `Product Link: ${productLink}`;

  const url = `https://wa.me/${whatsappNumber}?text=${message}`;
  window.open(url, "_blank");
  onClose();
};

  return (
    <div className="modal-overlay">
      <div className="buy-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <div className="order-summary">
          <img src={product.image} alt={product.name} className="prod-thumb" />
          <div>
            <h4>Ordering: {product.name}</h4>
            <p className="price">₹{product.price}</p>
          </div>
        </div>

        <form onSubmit={handleWhatsAppRedirect}>
          <input 
            type="text" name="name" placeholder="Full Name" 
            required onChange={handleChange} 
          />
          <input 
            type="tel" name="phone" placeholder="Phone Number" 
            required onChange={handleChange} 
          />
          <textarea 
            name="address" placeholder="Full Delivery Address" 
            required onChange={handleChange} 
          ></textarea>
          
          <div className="qty-select">
            <label>Quantity:</label>
            <input 
              type="number" name="quantity" min="1" value={formData.quantity} 
              onChange={handleChange} 
            />
          </div>

          <button type="submit" className="confirm-buy-btn">
            Send Order via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}