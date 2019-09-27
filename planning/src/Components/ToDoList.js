import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class ToDoList extends React.Component {
  constructor() {
    super();
    this.newValue = {};
  }
  handleSubmit = e => {
    e.preventDefault(this.props);
    const baseURL = "https://mypartyplanner.herokuapp.com/api";
    axiosWithAuth(this.props)
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

  handleSubmit = e => {
    e.preventDefault();
    const deleteItem = () => {
      axiosWithAuth()
        .delete(
          `https://mypartyplanner.herokuapp.com/api/parties/:id/todoList/:taskId`
        )
        .then(res => {
          console.log(res);
          axiosWithAuth()
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
