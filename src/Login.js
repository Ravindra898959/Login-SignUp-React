import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Components/Header";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const [error, setError] = useState(true);

  const handleOnchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const minimumChar = 8;
    if (data.password.length <= minimumChar) {
      setError("password should be 8");
    } else {
      setError("");
      navigate("/dashboard");
    }
    localStorage.setItem("name", data.name);
    localStorage.setItem("password", data.password);
  };

  return (
    <>
      <Header />
      <h1>Login</h1>
      <div className="login">
        <form
          className="forms"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label>
            Name:
            <input
              placeholder="Name"
              type="text"
              name="name"
              autoComplete="off"
              value={data.name}
              onChange={(e) => {
                handleOnchange(e);
              }}
            />
            <br />
            Password:
            <br />
            <input
              placeholder="Password"
              type="password"
              name="password"
              autoComplete="off"
              value={data.password}
              onChange={(e) => {
                handleOnchange(e);
              }}
            />
            <br />
            <br />
            <div style={{ color: "red" }}>{error}</div>
            <input type="submit" value="submit" />
            <br />
            {/* <Link to={"/signup"}>Go to Signup</Link> */}
          </label>
        </form>
      </div>
    </>
  );
};

export default Login;
