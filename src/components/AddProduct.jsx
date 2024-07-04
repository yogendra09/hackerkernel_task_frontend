import React, { useState } from "react";
import { addProductToCart } from "../store/Reducers/cartReducer";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const AddProduct = () => {
  const dispatch = useDispatch();
  const [product, setproduct] = useState("");
  const [price, setprice] = useState("");
  const addProductHandler = (e) => {
    e.preventDefault();
    if (!product || !price && typeof(price) === 'number') return alert("enter product name and price");
    const newProduct = {
      id:nanoid(),
      product,
      price,
    };
    dispatch(addProductToCart(newProduct));
    setproduct("");
    setprice("");
  };
  return (
    <div className="">
      <div className="py-10">
        <div className="px-10">
          <form onSubmit={addProductHandler} className="grid lg:grid-cols-3 lg:grid-rows-1 gap-4">
            <input
              value={product}
              onChange={(e) => setproduct(e.target.value)}
              className=" rounded shadow-xl px-4 py-[8px] outline-none border-gray-300  "
              placeholder="Product"
              type="text"
            />
            <input
              value={price}
              onChange={(e) => setprice(e.target.value)}
              className=" rounded shadow-xl px-4 py-[8px] outline-none border-gray-300  "
              placeholder="Price"
              type="text"
            />
            <button
              className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 hover:brightness-110"
              type="submit"
            >
              add product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
