import React, { useState, useEffect } from "react";
import { BrowserRouter as Route } from "react-router-dom";
import { useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Addparty from "./Partydata";
import { CategoryContext } from "../Contexts/CategoryContext.js";

export function CategoryPage() {
  const { Category } = useContext(CategoryContext);
  const [categories, setcategories] = useState([]);
  const [deleteCategory, setdeletecategory] = useState([]);
  const [CategoriesCards, setCategoriesCards] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://mypartyplanner.herokuapp.com/api/categories")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("there is an error with axios", error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <span
        className="delete"
        onClick={() => deleteCategory(categories)}
      ></span>
      {categories.map((id, categories) => {
        return <categories key={id} categories={categories} />;
      })}
    </div>
  );
}

export default CategoryPage;
