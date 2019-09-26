import React from "react";

class ToDoList extends React.Component {
  constructor() {
    super();
    this.newValue = {};
  }
  handleSubmit = e => {
    e.preventDefault();
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
  };
  putMessage = quote => {
    axios
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

  render() {
    return (
      <div className="TodoList">
        <div className="Todoitem">
          <h1>{props.item}</h1>
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
