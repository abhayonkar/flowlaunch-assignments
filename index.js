import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="p-4 bg-white dark:bg-gray-800 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Product Listing</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:placeholder-gray-400"
        />
        <button
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="ml-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-md"
        >
          Switch Mode
        </button>
      </header>
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md flex flex-col cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="h-40 w-full mb-2 overflow-hidden rounded-md">
              <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
            </div>
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
          </div>
        ))}
      </main>
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

const ProductDetailsModal = ({ product, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleBackdropClick}>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-md w-11/12 md:w-2/3 lg:w-1/2 overflow-y-auto max-h-full">
        <button onClick={onClose} className="text-right mb-4 text-red-500">Close</button>
        <div className="flex flex-col md:flex-row">
          <div className="flex-shrink-0 w-full md:w-1/2 max-h-80 mb-4 md:mb-0 overflow-hidden rounded-md">
            <img src={product.image} alt={product.title} className="h-full w-full object-contain" />
          </div>
          <div className="md:ml-4 flex-grow">
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="mb-2">{product.description}</p>
            <p className="mb-2 text-lg font-semibold">Price: ${product.price}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Category: {product.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
