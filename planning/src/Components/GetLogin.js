import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../login.css";

const GetLogin = props => {
  const [logini, setLogini] = useState({ username: "", password: "" });
  const changeHandler = event => {
    event.preventDefault();
    setLogini({
      ...logini,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://mypartyplanner.herokuapp.com/api/auth/login", logini)
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.payload);
        props.history.push("/catergories");
      })
      .catch(err => console.log("error in handlesSub", err.response));
    setLogini({ username: "", password: "" });
  };
  return (
    <div className="loginwrapper">
      <div className="loginContainer">
        <div className="PartyHead">
          <h1>Welcome To The Party</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="name"
            placeholder="enter username"
            type="text"
            value={logini.username}
            name="username"
            onChange={changeHandler}
          />
          <input
            className="password"
            placeholder="enter password"
            type="password"
            value={logini.password}
            name="password"
            onChange={changeHandler}
          />
          <button type="submit" className="SubmitButton">
            Login!
          </button>
          <span>
            Dont have an account? <Link to="./Register">Register !</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default GetLogin;

// make a post request to retrieve a token from the api
// when you have handled the token, navigate to the BubblePage route
