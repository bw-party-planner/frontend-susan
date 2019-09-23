import React from "react";
import Todo from "../todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      <h1>Susan ToDo List:</h1>
      {props.data.map(item => (
        <Todo
          dispatch={props.dispatch}
          key={item.id}
          data={item}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
