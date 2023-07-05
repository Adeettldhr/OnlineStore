import React from "react";

const ProductCard = ({
  imageSrc,
  productName,
  productPrice,
}: {
  imageSrc:string;
  productName:string;
  productPrice:number;
}) => {
  const handleAddToCart = () => {
    // Add your logic to handle adding the product to the cart
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={imageSrc}
        alt={productName}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="mt-4 text-xl font-semibold">{productName}</h2>
      <p className="mt-2 text-gray-600">${productPrice}</p>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
