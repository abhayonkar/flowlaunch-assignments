const truncateTitle = (title, wordLimit) => {
  const words = title.split(' ');
  if (words.length <= wordLimit) {
    return title;
  }
  return words.slice(0, wordLimit).join(' ') + '...';
};

const ProductCard = ({ product, onClick }) => {
  const truncatedTitle = truncateTitle(product.title, 4); // Adjust the word limit as needed

  return (
    <div
      className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md cursor-pointer transform hover:scale-105 transition-transform duration-300"
      onClick={onClick}
    >
      <div
        className="w-full h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        
      </div>
      <div className="p-4 text-center">
          <div className=" flex items-center justify-center">
          <h2 className="text-xl font-semibold text-white p-2 bg-black bg-opacity-50 rounded">
            {truncatedTitle}
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
