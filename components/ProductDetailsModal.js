import { useEffect } from 'react';

const ProductDetailsModal = ({ product, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 modal-overlay">
      <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md flex">
        <img className="w-64 h-64 object-cover" src={product.image} alt={product.title} />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-2">${product.price}</p>
          <p className="text-gray-800 dark:text-gray-300">{product.description}</p>
        </div>
        <button className="absolute top-0 right-0 m-2 text-gray-600 dark:text-gray-400" onClick={onClose}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
