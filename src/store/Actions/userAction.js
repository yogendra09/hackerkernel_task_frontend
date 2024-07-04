import axios from "../../utils/axios";
import { addUser, removeUser } from "../Reducers/userReducer";
import { toast } from "react-toastify";
export const asyncCurrentUser = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!data) {
      dispatch(removeUser());
      localStorage.removeItem("token");
      return;
    }
    // console.log(data);
    dispatch(addUser(data));
  } catch (error) {
    toast.error("Login to access resources")
    console.log(error.response.data.message || error);
  }
};
export const asyncUserRegister = (newUser) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/register", newUser);
    console.log(data);
    localStorage.setItem("token", data.token);
    dispatch(addUser(data.user));
    dispatch(asyncCurrentUser());
  } catch (error) {
    toast.error(error.response.data.message)
    console.log(error.response.data.message || error);
  }
};

export const asyncUserLogin = (user) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/login", user);
    console.log(data.token);
    localStorage.setItem("token", data.token);
    dispatch(asyncCurrentUser());
  } catch (error) {
    toast.error(error.response.data.message)
    console.log(error.response.data.message || error);
  }
};

export const asyncUserLogout = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/logout", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(data);
    localStorage.removeItem("token");
    dispatch(removeUser());
  } catch (error) {
    toast.error(error.response.data.message)
    console.log(error.response.data.message || error);
  }
};
