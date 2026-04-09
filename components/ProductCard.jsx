'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductCard({ product }) {
  const addToCart = (e) => {
    e.preventDefault();
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
  };

  return (
    <div className="product-card group">
      <Link href={`/products/${product.slug}`}>
        <div className="relative h-64 bg-gray-100">
          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-ayurveda-earth mb-2 line-clamp-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.shortDescription}</p>
          <div className="flex justify-between items-center">
            <span className="text-ayurveda-herb font-bold text-xl">{product.priceDisplay}</span>
            <button 
              onClick={addToCart}
              className="bg-ayurveda-herb text-white px-4 py-2 rounded-lg hover:bg-ayurveda-leaf transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}
