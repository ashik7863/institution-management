import React, { useState, useEffect } from "react";
import AllComponent from "./component/AllComponent";
import Registration from "./component/registrationComponent/Registration";
import Login from "./component/loginComponent/Login";
import Admission from "./component/Admission";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Installment from "./component/installmentComponent/Installment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Protect from "./Protect";
function App() {
  // const [show, setShow] = useState(false);
  // useEffect(() => {
  //   if (localStorage.getItem("status") === true) {
  //     console.log("called");
  //     setShow(true);
  //   }
  // });
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route
            path="/login"
            element={<Login/>}
          />
          <Route path="/register" element={<Protect Component={Registration}/>} />
          <Route path="*" element={<Protect Component={AllComponent}/>} />
          <Route
            path="/dashboard"
            element={<Protect Component={AllComponent}/>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
