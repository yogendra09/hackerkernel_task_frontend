import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUserLogout } from "../store/Actions/userAction";
import { addProductToCart, serachProduct } from "../store/Reducers/cartReducer";
import Card from "../components/Card";
import AddProduct from "../components/AddProduct";
import Nav from "../components/Nav";
import ShowProduct from "../components/ShowProduct";
const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const { cart } = useSelector((state) => state.cartReducer);
  const [searchedProduct, setsearchedProduct] = useState([]);
  const [value, setvalue] = useState("");
  const searchProductHandler = () => {
    let copyProduct = [...cart];
    copyProduct = copyProduct.filter((product) => {
      return product.product.includes(value);
    });
    setsearchedProduct([...copyProduct]);
    console.log(searchedProduct);

  };

  return (
    <div className="min-h-screen w-[100vw] overflow-x-hidden!">
      <Nav />
      <AddProduct/>

      <div className="flex gap-4 justify-center">
        <input
          value={value}
          onChange={(e) => {
            setvalue(e.target.value.trim(''));
            let copyProduct = [...cart];
            copyProduct = copyProduct.filter((product) => {
              return product.product.includes(value);
            });
            setsearchedProduct([...copyProduct]);
            console.log(searchedProduct);

          }}
          type="tetx"
          placeholder="Search Product"
          className="rounded shadow-xl px-4 py-[8px] outline-none bg-gray-200 "
        />
        <button
          className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 hover:brightness-110"
          onClick={searchProductHandler}
        >
          search
        </button>
      </div>
      {value.length > 0 ? (
        <div className="product min-h-[60vh] flex flex-col items-center justify-center gap-4">
          {searchedProduct.length > 0 &&
            searchedProduct.map((product) => (
              <Card key={product.id} product={product} />
            ))}
        </div>
      ) : (
        <ShowProduct />
      )}
    </div>
  );
};

export default Home;
