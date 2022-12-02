import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import Axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    Axios.post("https://jsonplaceholder.typicode.com/users", {
      name: data.name,
      email: data.email,
      password: data.password,
    }).then((Response) => {
      console.log(Response.data);
    });
    setData({
      name: "",
      email: "",
      password: "",
    });
    navigate("/login");
  };

  return (
    <>
      <Header />
      <h1>Sign Up</h1>
      <div className="signup">
        <form
          className="form"
          onSubmit={(e) => {
            handleSubmit(e.preventDefault());
          }}
        >
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => {
              handleOnChange(e);
            }}
          />
          <input type="submit" value="Submit" />
          <br />
          {/* <Link to={"/login"}>Go to login</Link> */}
        </form>
      </div>
    </>
  );
};

export default Signup;
