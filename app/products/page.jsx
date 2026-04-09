'use client'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setFilteredProducts(data)
        const uniqueCategories = [...new Set(data.map(p => p.category))]
        setCategories(uniqueCategories)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    let filtered = products
    if (selectedCategory) {
      filtered = filtered.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase())
    }
    if (searchTerm) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    setFilteredProducts(filtered)
  }, [selectedCategory, searchTerm, products])

  return (
    <div className="min-h-screen bg-ayurveda-cream">
      <div className="container-custom py-8">
        <h1 className="text-4xl font-bold text-ayurveda-earth mb-8 text-center">Our Products</h1>
        
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field"
              />
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field"
              >
                <option value="">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ayurveda-herb"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}