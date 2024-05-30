// pages/index.js
import { useState, useEffect } from 'react'
import { fetchProducts } from '../lib/api'
import ProductGrid from '../components/ProductGrid'
import SearchBar from '../components/SearchBar'
import ProductModal from '../components/ProductModal'

export default function Home() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts()
      setProducts(products)
    }
    getProducts()
  }, [])

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  return (
    <div className="p-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ProductGrid products={filteredProducts} onProductClick={handleProductClick} />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  )
}
