import React, { useState, useEffect } from "react";
import AllComponent from "./component/AllComponent";
import Registration from "./component/registrationComponent/Registration";
import Login from "./component/loginComponent/Login";
import Admission from "./component/Admission";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Installment from "./component/installmentComponent/Installment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login show={show} change={setShow} />} />
          <Route
            path="/login"
            element={<Login show={show} change={setShow} />}
          />
          <Route path="/register" element={<Registration />} />
          <Route path="*" element={show === true ? <AllComponent /> : null} />
          <Route
            path="/dashboard"
            element={show === true ? <AllComponent /> : null}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
