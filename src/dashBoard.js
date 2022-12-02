import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

const DashBoard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("password");
    localStorage.removeItem("name");
    navigate("/login");
  };

  return (
    <div>
      <Navbar />
      <h1>DashBoard</h1>
      <button onClick={logout}>Logout user</button>
    </div>
  );
};

export default DashBoard;
