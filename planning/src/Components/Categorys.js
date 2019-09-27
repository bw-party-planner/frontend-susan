import React, { useState } from "react";
import { useContext } from "react";
import { CategoryContext } from "../Contexts/CategoryContext.js";

const Categorys = () => {
  const { Category } = useContext(CategoryContext);
  const [category, setCategory] = useState([]);

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

export default Categorys;
