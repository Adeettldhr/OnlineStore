import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
  const getProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section id="products">
      <div className="p-4 px-6">
        <h1 className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-[darkcyan]">
          Products
        </h1>
        <div className="flex flex-wrap gap-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            products.map((item) => (
              <ProductCard
                key={item.id}
                imageSrc={item.image}
                productName={item.title}
                productPrice={item.price}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Products
