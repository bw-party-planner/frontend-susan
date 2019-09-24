import React from "react";
import Todo from "../todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      <h1> To Do List:</h1>
      {props.data.map(item => (
        <Partiestodo
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