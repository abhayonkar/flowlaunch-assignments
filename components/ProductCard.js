// components/ProductCard.js

const ProductCard = ({ product, onClick }) => {
    return (
      <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md cursor-pointer" onClick={onClick}>
        <img className="w-full h-40 object-cover" src={product.image} alt={product.title} />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  