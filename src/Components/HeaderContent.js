import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";

const HeaderContent = () => {
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {  
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header />
      <div
        className="header-content"
        style={{ border: "2px solid red", height: "100vh" }}
      >
        <div className="header-main">
          <h1>You Can Explore More Here</h1>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
        <img
          src="https://picsum.photos/400/400"
          alt="picsum images"
          className="main-img"
        />
      </div>
    </>
  );
};

export default HeaderContent;
