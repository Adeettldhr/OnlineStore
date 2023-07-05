import React from "react";
import { BsFillCartFill } from "react-icons/bs";

const ProductCard = ({
  imageSrc,
  productName,
  productPrice,
  onAddToCart,
}: {
  imageSrc: string;
  productName: string;
  productPrice: number;
  onAddToCart: () => void;
}) => {
  const handleAddToCart = () => {
    onAddToCart();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-3 w-full md:w-[18.8%] ">
      <img
        src={imageSrc}
        alt={productName}
        className="w-full h-48 object-contain rounded-md"
      />
      <h2 className="mt-4 text-xl font-semibold overflow-hidden whitespace-nowrap overflow-ellipsis">
        {productName}
      </h2>
      <p className="mt-2 text-gray-600">${productPrice}</p>
      <button
        className="bg-[darkcyan] rounded-md flex justify-between font-medium my-6 mx-auto px-6 py-3 text-black"
        onClick={handleAddToCart}
      >
        Add to Cart
        <BsFillCartFill size={20} className="flex" />
      </button>
    </div>
  );
};

export default ProductCard;
