import React, { useState, useEffect, useLocation } from "react";
import "../App.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
function AllComponent() {
  const [sidebar, setSidebar] = useState(false);

  function change(st) {
    setSidebar(!st);
  }

  return (
    <div className="main">
      <div className="sidebar-outer">
        <Sidebar status={sidebar} />
      </div>
      <div>
        <Header status={change} />
      </div>
    </div>
  );
}

export default AllComponent;
