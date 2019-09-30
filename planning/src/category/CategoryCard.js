import React, { useState } from "react";
import { useContext } from "react";
import { CategoryContext } from "../Contexts/CategoryContext.js";
import CatergoryList from "./CatergoryList";
import CategoryForm from "./CategoryForm";

const CategoryCard = props => {
  const { name, info } = props.category;
  const { Category } = useContext(CategoryContext);

  return (
    <div className="Category-card">
      <h2>{name}</h2>
      <h3>Category</h3>
      <CatergoryList />
      <CategoryForm />
      {info.map(info => (
        <div key={info} className="category-info">
          {info}
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;
