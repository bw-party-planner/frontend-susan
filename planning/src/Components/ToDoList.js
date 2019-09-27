import React, { useState, useEffect, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";
import ToList from "./ToList.js";
import { TodoContext } from "../Contexts/TodoContext";

const ToDoList = () => {
  const { Todo } = useContext(TodoContext);
  const [todolist, settodolist] = useState([]);

  useEffect(() => {
    axios
      .get(`https://mypartyplanner.herokuapp.com//api/parties/:id/todoList`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("there is an error with axios", error);
      });
  }, []);
  const handleSubmit = e => {
    e.preventDefault(this.props);
    const baseURL = "https://mypartyplanner.herokuapp.com/api";
    axios
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

  const putMessage = quote => {
    axiosWithAuth()
      .put(
        "https://mypartyplanner.herokuapp.com/api/parties/:id/todoList/:taskId",
        quote
      )
      .then(response => {
        this.setState({
          putSuccessMessage: response.data.successMessage,
          putError: "You need a to chose a Item!"
        });
      })
      .catch(err => {
        this.setState({
          putSuccessMessage: "You have successfully chosen a Item!",
          putError: err.response.data.Error
        });
      });
  };
  return (
    <div>
      <h1>Hello!</h1>
      {todolist.map(info => (
        <div>
          <h2>{info.id}</h2>
          <h2>{info.categories}</h2>
        </div>
      ))}
      <ToList />
    </div>
  );
};

export default ToDoList;
