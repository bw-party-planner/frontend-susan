import React, { useState } from "react";
import { useContext } from "react";
import { CategoryContext } from "../Contexts/CategoryContext.js";

const Categorys = () => {
  const { Category } = useContext(CategoryContext);
  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState([]);

  return (
    <div>
      <h1>Hello!</h1>
      {category.map(objects => (
        <div>
          <h2>{id.objects}</h2>
          <h2>{categories.objects}</h2>
        </div>
      ))}
    </div>
  );
};

export default Categorys;
