import React, { useState, useEffect, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";
import ToDoLists from "./ToDoLists.js";

class ToDoList extends React.Component {
  constructor() {
    super();
    this.newValue = {};
  }
  componentDidMount() {
    const handleSubmit = e => {
      e.preventDefault(this.props);
      const baseURL = "https://mypartyplanner.herokuapp.com/api";
      axiosWithAuth()
        .post(`${baseURL}/api/parties/:id/todoList`)
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          this.props.history.push("parties/:id/todoList");
        })
        .catch(err => {
          console.log(err);
        });
      window.location.reload();
    };
  }
  render(props) {
    return (
      <div>
        <ToDoLists />
      </div>
    );
  }
}
export default ToDoList;
