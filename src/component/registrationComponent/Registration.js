import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./RegistrationStyle.css";
import "react-toastify/dist/ReactToastify.css";
import loader from "../../assets/loaderLogin.gif";
const Registration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [val, setVal] = useState({
    user: "",
    email: "",
    mobile: "",
    designation: "",
    password: "",
    cpassword: "",
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
  function validateForm() {
    const { user, email, mobile, password, cpassword } = val;
    if (password !== cpassword) {
      toast.error("Password and confirm password not matched!", toastOption);
      return false;
    } else if (user.length < 3) {
      toast.error("Username must be more than 3 character!", toastOption);
      return false;
    } else if (email === "") {
      toast.error("Email is required!", toastOption);
      return false;
    } else if (mobile === "" || mobile.length !== 10) {
      toast.error("Mobile No Should be 10 Character!", toastOption);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password must be equal or more than 8 character!",
        toastOption
      );
      return false;
    }
    return true;
  }
  function changeData(e) {
    setVal({ ...val, [e.target.name]: e.target.value });
  }
  const PostData = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      const { user, email, mobile, designation, password, cpassword } = val;
      const { data } = await axios.post(
        "https://backend-server-y3ce.onrender.com/register",
        {
          user,
          email,
          mobile,
          designation,
          password,
          cpassword,
        }
      );
      if (data.status === false) {
        setIsLoading(false);
        toast.error(data.msg, toastOption);
      }
      if (data.status) {
        toast(data.msg, successNotification);
        setIsLoading(false);
      }
    }
  };

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
            <h1>Registration</h1>
          </div>
          <input
            type="text"
            placeholder="Enter Username"
            name="user"
            onChange={(e) => changeData(e)}
          />
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={(e) => changeData(e)}
          />
          <input
            type="text"
            placeholder="Enter Mobile No"
            name="mobile"
            onChange={(e) => changeData(e)}
          />
          <input
            type="text"
            placeholder="Enter Designation"
            name="designation"
            onChange={(e) => changeData(e)}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={(e) => changeData(e)}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            name="cpassword"
            onChange={(e) => changeData(e)}
          />
          <button onClick={(e) => PostData(e)}>Create User</button>
          <span>
            Already have an account ? <Link to="/login">Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default Registration;
