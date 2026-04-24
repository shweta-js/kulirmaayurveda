import { products } from '../../shop/products.js';
import ProductClient from './ProductClient';

// This runs on the SERVER - WhatsApp sees this
export async function generateMetadata({ params }) {
  const { id } = params;
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) return { title: 'Product Not Found' };

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  return {
    title: `${product.name} | Kulirma Ayurveda`,
    openGraph: {
      title: product.name,
      description: `Authentic Ayurvedic care. Order via WhatsApp.`,
      url: `${baseUrl}/product/${id}`,
      images: [{ url: `${baseUrl}${product.image}` }],
      type: 'website',
    },
  };
}

// This is the main page entry
export default function Page() {
  return <ProductClient />;
}