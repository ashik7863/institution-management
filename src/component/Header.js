import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Cards from "./Cards";
import Admission from "./Admission";
import ViewStudent from "./admissionContent/ViewStudent";
import Installment from "./installmentComponent/Installment";
import ViewInstallment from "./installmentComponent/ViewInstallment";
const Header = (props) => {
  const [data, setData] = useState();
  const [st, setSt] = useState(false);
  function test() {
    setSt(!st);
    props.status(st);
  }
  useEffect(() => {
    const x = localStorage.getItem("logged-user");
    setData(x.replaceAll('"', ""));
  }, []);
  return (
    <div className={st ? "home-section close" : "home-section"}>
      <div className="home-content">
        <div>
          <i className="bx bx-menu" onClick={test}></i>
          <span className="text">Dashboard</span>
        </div>
        <div className="search-wrapper">
          <span className="las la-search"></span>
          <input type="search" placeholder="Search Here" />
        </div>
        <div className="user-wrapper">
          <img src="img/2.jpg" alt="" width="40px" height="40px" />
          <div>
            <h4>{data}</h4>
            <small>Developer</small>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/viewstudent" element={<ViewStudent />} />
        <Route path="/installment" element={<Installment />} />
        <Route path="/viewinstallment" element={<ViewInstallment />} />
      </Routes>
    </div>
  );
};

export default Header;
