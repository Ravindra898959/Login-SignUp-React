import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <h1 style={{ cursor: "pointer" }}>Logo</h1>

        <nav>
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                style={{
                  pointer: "cursor",
                  marginLeft: "20px",
                  textDecoration: " none",
                }}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
