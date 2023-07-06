import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.product.data);

  // Find the product with the matching productId
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="pt-2">
      <h1>{product.productName}</h1>
      <img src={product.imageSrc} alt={product.productName} />
      <p>Price: ${product.productPrice}</p>
    </div>
  );
};

export default ProductDetailsPage;
