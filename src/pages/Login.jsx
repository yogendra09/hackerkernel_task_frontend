import React, { useEffect, useState } from "react";
import { asyncCurrentUser, asyncUserLogin } from "../store/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated } = useSelector((state) => state.userReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(asyncUserLogin({ email, password }));
  };

  useEffect(()=>{
    dispatch(asyncCurrentUser());
    if(isAuthenticated) navigate("/");
  },[isAuthenticated])

  return (
    <div className="h-screen w-[100vw] lg:flex lg:justify-between lg:items-center">
      <form
        onSubmit={handleSubmit}
        className="relative lg:left-1/2 lg:-translate-x-1/2 space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10 border border-gray-100 m-10"
      >
        <h1 className="text-xl font-semibold lg:text-2xl">Login</h1>
        <p className="pb-4 text-gray-500">Sign in to access your account</p>
        <div className="">
          <label className=""> Email Address </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // type="email"
            placeholder="Info@example.com"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>
        <div>
          <label className=""> Password </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="******"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>

        <div>
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring"
          >
            Get Started
          </button>
        </div>
          <p>Don't have an account <Link className="text-blue-600 mt-4" to="/register">Register</Link></p>
      </form>

    </div>
  );
};

export default Login;
