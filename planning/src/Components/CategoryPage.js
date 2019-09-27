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
      <button
        className="Birthday-Party"
        onClick={props => this.BirthdayPartyButton}
      >
        Birthday Party
      </button>
      <button
        className="Halloween-Party"
        onClick={props => this.HalloweenPartyButton}
      >
        Halloween Party
      </button>
      <button
        className="Garden-Party"
        onClick={props => this.GarndenPartyButton}
      >
        Garden Party
      </button>
      <button
        className="Bachelor-Party"
        onClick={props => this.BachelorPartyButton}
      >
        Bachelor Party
      </button>
      <button className="Add-Party" onClick={props => Addparty}>
        Add Party
      </button>
      <span
        className="delete"
        onClick={() => deleteCategory(categories)}
      ></span>
    </div>
  );
}

export default CategoryPage;
