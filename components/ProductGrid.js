// components/ProductGrid.js
import React from 'react'

const ProductGrid = ({ products, onProductClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div
          key={product.id}
          className="border p-4 rounded-lg cursor-pointer"
          onClick={() => onProductClick(product)}
        >
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-500">${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductGrid
