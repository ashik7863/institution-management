import React, { useState, useEffect } from "react";
import Admission from "./Admission";
import Cards from "./Cards";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const SidebarItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  if (item.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <i className={item.icon}></i>
          <span className="link-name">{item.title}</span>
          <i
            className="bx bxs-chevron-down toggle-btn"
            onClick={() => setOpen(!open)}
          ></i>
        </div>
        <div className="sidebar-content">
          <ul>
            <li>
              {item.childrens.map((item, index) => (
                <SidebarItem key={index} item={item} />
              ))}
            </li>
          </ul>
        </div>
      </div>
    );
  } else if (!item.icon) {
    {
      return (
        <Link to={`/${item.route}`}>
          <li className="sidebar-title">
            <span className="link-name1">{item.title}</span>
          </li>
        </Link>
      );
    }
  } else {
    {
      return (
        <div className="sidebar-title">
          <i className={item.icon}></i>
          <span className="link-name">{item.title}</span>
        </div>
      );
    }
  }
};

export default SidebarItem;
