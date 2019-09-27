import React, { useState } from "react";
import { useContext } from "react";
import { TodoContext } from "../Contexts/TodoContext.js";

const ToList = () => {
  const { Todo } = useContext(TodoContext);
  const [tolist, settolist] = useState([]);

  return (
    <div>
      <h1>Hello!</h1>
      {tolist.map(info => (
        <div>
          <h2>To Do List</h2>
        </div>
      ))}
    </div>
  );
};

export default ToList;
