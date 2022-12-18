import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./pages/dashBoard";
import Signup from "./Signup";
import Home from "./Home";
import Login from "./Login";
import Errorpage from "./Errorpage";
import HeaderContent from "./Components/HeaderContent";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="*" element={<Errorpage />} />
          <Route path="/headerContent" element={<HeaderContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={Contact} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
