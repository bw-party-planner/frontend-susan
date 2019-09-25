import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import SignUpPage from "./SignUpPage";
import Catergories from "../parties/Catergories";
import Parties from "./Parties";
import "../index.css";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 0;
  padding-left: 0;
`;
const Li = styled.li`
  text-decoration: none;
  color: white;
`;

const Navo = styled.div`
  background: black;

  background: #8e44ad;
`;

function Nav() {
  return (
    <Navo>
      <Ul>
        <Link to="/signuppage">
          <Li>Sign-Up/Login</Li>
        </Link>
        <Link to="/">
          <Li>My Party</Li>
        </Link>
        <Link to="/Catergories">
          <Li>Categories</Li>
        </Link>
        <Li>Shopping-List</Li>
      </Ul>
      <Route exact path="/sign-up" component={SignUpPage} />
      <Route exact path="/login" component={SignUpPage} />
      <Ul>
        <Link to="/signuppage">
          <Li>Home</Li>
        </Link>
        <Link to="/">
          <Li>Log out</Li>
        </Link>
      </Ul>
      <Route exact path="/sign-up" component={SignUpPage} />
      <Route exact path="/login" component={SignUpPage} />
    </Navo>
  );
}

export default Nav;
