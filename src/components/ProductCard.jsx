import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card bg-gray-100 h-auto max-w-full rounded-lg">
      <div className="product-top bg-blue-100 hover:bg-blue-200 p-4 relative h-[200px] sm:h-[250px] md:h-[300px] rounded-t-lg">
        <img className="product-img w-80 md:w-70 h-full object-contain m-auto" src={product.image} alt={product.title} />
        <div className="btn-box w-full px-2">
          <button className='btn w-full py-3 px-5 me-2 mb-2 text-sm md:text-lg font-medium md:font-semibold text-gray-900 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 rounded-lg' onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
      <div className="product-content h-fit px-3 py-4 mt-auto">
        <h5 className="text-gray-400 text-xs md:text-sm uppercase font-semibold">{product.category}</h5>
        <h3 className='product-title text-sm md:text-sm lg:text-md font-medium min-h-7 md:min-h-8 lg:min-h-11'>{product.title}</h3>
        <p className='product-price text-md md:text-lg font-medium'>${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;