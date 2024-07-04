import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUserLogout } from "../store/Actions/userAction";
import { nanoid } from "@reduxjs/toolkit";
import { addProductToCart } from "../store/Reducers/cartReducer";
import Card from "../components/Card";
const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const [product, setproduct] = useState("");
  const [price, setprice] = useState("");
  const { cart } = useSelector((state) => state.cartReducer);

  const addProductHandler = (e) => {
    e.preventDefault();
    if (!product || !price) return alert("enter product name and price");
    const newProduct = {
      id: nanoid(),
      product,
      price,
    };
    dispatch(addProductToCart(newProduct));
    console.log(cart.length , cart);
  };
 
  return (
    <div className="min-h-screen w-full">
      <div className="nav h-[10vh] px-10 py-6 flex justify-between">
        <h1>{user && user.name}</h1>
        <button
          onClick={() => {
            dispatch(asyncUserLogout());
          }}
          className=""
        >
          Logout
        </button>
      </div>

      <div className="py-10">
        <div className="px-10">
          <form onSubmit={addProductHandler}>
            <input
              value={product}
              onChange={(e) => setproduct(e.target.value)}
              className="border-[1px] rounded shadow-xl px-4 py-1"
              placeholder="Product"
              type="text"
            />
            <input
              value={price}
              onChange={(e) => setprice(e.target.value)}
              className="border-[1px] rounded shadow-xl px-4 py-1"
              placeholder="Price"
              type="text"
            />
            <button type="submit">add</button>
          </form>
        </div>
      </div>

      <div className="product h-[60vh] flex flex-col items-center justify-center">
        {cart.length > 0 ? 
        <>
        {cart.map((item) => (
          <Card key={item.id} product={item} />
        ))}
        </>
        : <h1 className="text-4xl">No Product Found</h1>}
      </div>
    </div>
  );
};

export default Home;
