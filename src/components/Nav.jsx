import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUserLogout } from "../store/Actions/userAction";

const Nav = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  return (
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
  );
};

export default Nav;
