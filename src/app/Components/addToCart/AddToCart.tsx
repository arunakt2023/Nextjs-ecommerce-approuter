"use client";

import { useCart } from "@/app/Services/CartContext";
import { ProductServices } from "@/app/Services/Product-Services";

const AddToCart = (props: any) => {
  const { setCartItems } = useCart();
  const addToCart = async (prodId: any) => {
    try {
      const response = await ProductServices.addToCart(prodId);
      const data = await response.json();
      setCartItems(data.line_items);
      props.onAddSuccess();
    } catch (error) {
      console.error("add to cart error", error);
    }
  };

  return (
    <div>
      <button className="btn btn-primary fw-semibold" onClick={() => addToCart(props.prodId)}>Add To Cart</button>
    </div>
  );
};

export default AddToCart;