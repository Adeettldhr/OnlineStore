import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchResults, setSearchTerm } from "../store/productSlice";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const products = useSelector((state:any) => state.product.data);
  const searchResults = useSelector((state:any) => state.product.searchResults);

  const handleSearch = () => {
    const filteredResults = products.filter((product: { name: string; }) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    dispatch(setSearchResults(filteredResults));
  };

  return (
    <div className="pt-28">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((product: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchPage;
