import React, { Children } from "react";
import * as FaIcons from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ Children }) => {
  const sidebardata = [
    {
      title: "Home",
      path: "/home",
      icon: <FaIcons.FaHome />,
    },
    {
      title: "About",
      path: "/about",
      icon: <FaIcons.FaAddressBook />,
    },
    {
      title: "Contact",
      path: "/contact",
      icon: <FaIcons.FaAccusoft />,
    },
  ];
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="top-section">
            <h1 className="logo">Logo</h1>
            <div className="bars">
              <FaIcons.FaBars />
            </div>
          </div>
          {sidebardata.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              activeclassname="active"
              className="link"
            >
              <div className="icon">{item.icon}</div>
              <div className="title">{item.title}</div>
            </NavLink>
          ))}
        </div>
        <main>{Children}</main>
      </div>
    </>
  );
};

export default Sidebar;
