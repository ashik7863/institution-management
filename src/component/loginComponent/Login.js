import React, { useEffect, useState } from "react";
import { Link, useNavigate, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import loader from "../../assets/loaderLogin.gif";
const Login = ({ show, change }) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const [val, setVal] = useState({
    user: "",
    password: "",
  });
  const toastOption = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const successNotification = {
    position: "top-center",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  function changeData(e) {
    setVal({ ...val, [e.target.name]: e.target.value });
  }
  async function saveData(e) {
    e.preventDefault();
    if (validateForm()) {
      const { user, password } = val;
      setIsLoading(true);
      const { data } = await axios.post(
        "https://backend-5wmv.vercel.app/login",
        {
          user,
          password,
        }
      );
      if (data.status === false) {
        setIsLoading(false);
        toast.error(data.msg, toastOption);
      }
      if (data.status === true) {
        setIsLoading(false);
        localStorage.setItem("logged-user", JSON.stringify(user));
        localStorage.setItem('login',true);
        navigate('/dashboard');       
      }
    }
  }
  function validateForm() {
    const { user, password } = val;
    if (user === "") {
      toast.error("Username and password is required!", toastOption);
      return false;
    } else if (password === "") {
      toast.error("Username and password is required!", toastOption);
      return false;
    }
    return true;
  }
  return (
    <>
      <div className="form-container">
        <form method="POST">
          <div className="brand">
            {isLoading && (
              <>
                <img src={loader} alt="loader" className="loader" />
              </>
            )}
            <h1>Login</h1>
          </div>
          <input
            type="text"
            placeholder="Enter Username"
            name="user"
            onChange={(e) => changeData(e)}
            min="3"
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={(e) => changeData(e)}
          />

          <button onClick={(e) => saveData(e)}>Login</button>
          <span>
            Don't have an account ? <Link to="/register">Register</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
