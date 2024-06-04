const ProductCard = ({ product, onClick }) => {
  return (
    <div
      className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md cursor-pointer flex flex-col items-center justify-center"
      onClick={onClick}
    >
<div className="w-full h-40 overflow-hidden">
  <img className="w-full h-auto object-cover" src={product.image} alt={product.title} />
</div>


      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
