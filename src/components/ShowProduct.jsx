import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const ShowProduct = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  useEffect(()=>{
   console.log(
    cart
   )
  },[cart.length])
  return (
    <div className="product min-h-[60vh] flex flex-col items-center justify-center gap-4">
      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </>
      ) : (
        <h1 className="text-4xl">No Product Found</h1>
      )}
    </div>
  );
};

export default ShowProduct;
