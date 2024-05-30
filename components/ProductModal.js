// components/ProductModal.js
import React from 'react'

const ProductModal = ({ product, onClose }) => {
  if (!product) return null

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          X
        </button>
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-lg font-semibold mb-2 text-black">{product.title}</h2>
        <p className="text-gray-500 mb-4">${product.price}</p>
        <p className="mb-4 text-blue-500">{product.description}</p>
        <p className="text-sm text-gray-700">Category: {product.category}</p>
      </div>
    </div>
  )
}

export default ProductModal
