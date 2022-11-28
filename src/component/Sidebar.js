import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";
const Sidebar = (props) => {
  const [data, setData] = useState();
  useEffect(() => {
    const x = localStorage.getItem("logged-user");
    setData(x.replaceAll('"', ""));
  }, []);
  return (
    <div className={props.status ? "sidebar-inner close" : "sidebar-inner"}>
      <div className="logo-details">
        <i className="las la-university"></i>
        <span className="logo_name">MYCTC</span>
      </div>
      <ul className="nav-links">
        <li>
          <i className="bx bx-grid-alt"></i>
          <Link to="/dashboard">
            <span className="link_name">Dashboard</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </ul>
      <div className="profile-details">
        <div className="profile-content"></div>
        <div className="name-job">
          <div className="profile_name">{data}</div>
          <div className="job">Developer</div>
        </div>
        <Link to="/">
          <i className="bx bx-log-out"></i>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
