import React, { useState, useEffect } from "react";
import { useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";
import ToDoListsContext from "../Contexts/ToDoListsContext.js";

export function ToDoLists() {
  const ToDoLists = useContext(ToDoListsContext);
  const [deleteitem, setDeleteitem] = useState([]);
  const [ToDoList, setToDoList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .fetch(
        "https://mypartyplanner.herokuapp.com/api/parties/:id/todoList/:taskId"
      )
      .then(response => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        this.props.history.push("parties/:id/todoLists");
      })
      .catch(error => {
        console.log("there is an error with axios", error);
      });
  }, []);

  return (
    <div>
      <h1>To-Do-List</h1>
      {ToDoList.map(info => (
        <div>
          <h2>{info.id}</h2>
          <h2>{info.categories}</h2>
        </div>
      ))}
      <span
        className="delete"
        onClick={props => deleteitem(this.props.deleteitem)}
      ></span>
    </div>
  );
}

export default ToDoLists;
