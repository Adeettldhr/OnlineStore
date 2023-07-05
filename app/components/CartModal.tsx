import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const CartModal = ({ closeModal }: { closeModal:any }) => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart);

  const handleRemove = (productId: any) => {
    dispatch(remove(productId));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Cart</h3>
        <div className="cartWrapper">
          {products.map(
            (product: {
              id: React.Key | null | undefined;
              image: string | undefined;
              title:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined;
              price:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | null
                | undefined;
            }) => (
              <div key={product.id} className="cartCard">
                <img src={product.image} alt="" />
                <h5>{product.title}</h5>
                <h5>{product.price}</h5>
                <button
                  className="btn"
                  onClick={() => handleRemove(product.id)}
                >
                  Remove
                </button>
              </div>
            )
          )}
        </div>
        <button className="btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
