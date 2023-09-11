import React, { useState } from 'react';
import { FaTh, FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "../App.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "ImportExport_csv",
      icon: <FaTh />
    },
    {
      path: "/about",
      name: "About",
      icon: <FaTh />
    }
  ]
  return (
    <>
      <div className="side-bar">
        <div style={{ width: isOpen ? "400px" : "50px" }} className="sidebar">
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">CSV File Upload</h1>
            <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {
            menuItem.map((item, index) => (
              <NavLink to={item.path} key={index} className="link" activeclassName="active">
                <div className="icon">{item.icon}</div>
                <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
              </NavLink>
            ))
          }
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;