import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
const Header = () => {
  const handleGoto = () => {
    alert("You have to login first");
  };

  return (
    <>
      <header>
        <h1 style={{ cursor: "pointer" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Logo
          </Link>
        </h1>

        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                style={{ pointer: "cursor", textDecoration: " none" }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Signup"
                style={{ pointer: "cursor", textDecoration: " none" }}
              >
                Signup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Login"
                style={{
                  pointer: "cursor",
                  marginLeft: "20px",
                  textDecoration: " none",
                }}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleGoto}
                to="/Login"
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

export default Header;
