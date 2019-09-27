import React, { useState, useEffect } from "react";
import { BrowserRouter as Route } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import Addparty from "./Addparty";

export function CategoryPage() {
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
      <button className="Birthday-Party" onClick={this.BirthdayPartyButton}>
        Birthday Party
      </button>
      <button className="Halloween-Party" onClick={this.HalloweenPartyButton}>
        Halloween Party
      </button>
      <button className="Garden-Party" onClick={this.GarndenPartyButton}>
        Garden Party
      </button>
      <button className="Bachelor-Party" onClick={this.BachelorPartyButton}>
        Bachelor Party
      </button>
      <button className="Add-Party" onClick={this.AddPartyButton}>
        Add Party
      </button>
      {categories.map(categories => (
        <categories key={categories.id} categories={categories} />
      ))}
      <span
        className="delete"
        onClick={() => deleteCategory(categories)}
      ></span>
      <Route exact path="/addparty" render={props => <Addparty {...props} />} />
    </div>
  );
}

export default CategoryPage;
