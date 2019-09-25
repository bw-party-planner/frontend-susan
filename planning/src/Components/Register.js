import React, { useState } from "react";
import axios from "axios";

import LoginForm from "./LoginForm";
import RegisterForm from "./Register";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import "../index.css";

const RegisterB = styled.div`
  background: black;
  margin: 0;
  padding: 3%;
  margin-left: 20%;
  margin-right: 20%;
  border-bottom: 2px solid purple;
`;

const LoginB = styled.div`
  background: black;
  margin-left: 20%;
  margin-right: 20%;
  padding: 3%;
`;

function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const baseURL = "https://mypartyplanner.herokuapp.com/api";
    axios
      .post(`${baseURL}/auth/register`, { username: username, password })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="RegisterForm">
      <form onSubmit={handleSubmit}>
        <p>Register</p>
        <input
          value={username}
          name="username"
          type="text"
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          value={password}
          name="password"
          type="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit">Submit</button>
      </form>

      <RegisterB>
        <Link to="/register">Register</Link>
      </RegisterB>
      <LoginB>
        <Link to="/login">Login</Link>
      </LoginB>
      <Route exact path="/register" component={RegisterForm} />
      <Route exact path="/login" component={LoginForm} />
    </div>
  );
}
export default Register;
