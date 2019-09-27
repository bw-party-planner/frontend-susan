import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";

class ToDoList extends React.Component {
  constructor() {
    super();
    this.newValue = {};
  }
  handleSubmit = e => {
    e.preventDefault(this.props);
    const baseURL = "https://mypartyplanner.herokuapp.com/api";
    axiosWithAuth
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

  putMessage = quote => {
    axiosWithAuth
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
  handleSubmit = e => {
    e.preventDefault();
    const deleteItem = () => {
      axios
        .delete(
          `https://mypartyplanner.herokuapp.com/api/parties/:id/todoList/:taskId`
        )
        .then(res => {
          console.log(res);
          axios
            .get(
              "https://mypartyplanner.herokuapp.com/api/parties/:id/todoList/:taskId"
            )
            .then(res => {
              deleteItem(res.data);
            })
            .catch(err => console.log(err.response));
        })
        .catch(err => console.log(err.response));
    };
  };

  render(props) {
    return (
      <div className="TodoList">
        <div className="Todoitem">
          <h1>{this.props.item}</h1>
          <div key={props.task}>
            <button onClick={() => props.deleteItem(props.id)}>
              Remove from cart
            </button>
          </div>
        </div>
        ); };
      </div>
    );
  }
}
export default ToDoList;
