import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.newValue = {};
  }

  updateStateMessage = e => {
    let value = e.target.value;

    if (value !== null) {
      this.newValue = { item: value, completed: false, id: Date.now() };
    }
  };

  render() {
    return (
      <form
        onSubmit={e => {
          document.getElementById("toDoInput").value = "";
          e.preventDefault();
          return this.props.dispatch({
            type: "HANDLE_SUBMIT",
            newValue: this.newValue
          });
        }}
      >
        <input
          type="text"
          name="item"
          id="toDoInput"
          placeholder="add Todo item"
          onChange={this.updateStateMessage}
        />
        <button type="submit">Add Todo</button>
        <button
          onClick={() => {
            this.props.dispatch({
              type: "CLEAR_COMPLETED"
            });
          }}
          type="button"
        >
          Clear Completed
        </button>
      </form>
    );
  }
}

export default TodoForm;