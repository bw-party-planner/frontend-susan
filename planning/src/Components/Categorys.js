import React from "react";
import { useContext } from "react";
import { CategoryContext } from "./Contexts/CategoryContext.js";

const Category = () => {
  const { Category } = useContext(CategoryContext);

  return (
    <div>
      <h1>Hello!</h1>
      {category.map(info => (
        <div>
          <h2>{info.id}</h2>
          <h2>{info.categories}</h2>
        </div>
      ))}
    </div>
  );
};

export default category;
