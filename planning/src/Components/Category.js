import React, { useState, useEffect } from "react";
import { BrowserRouter as Route } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import CategoryPage from "./CategoryPage.js";
import Categorys from "./Categorys.js";

export class Categories extends React.Component {
  constructor() {
    super();
    this.newValue = {};
  }
  handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth
      .post(`https://mypartyplanner.herokuapp.com/api/categories`)
      .then(res => {
        console.log(res);
        this.props.history.push("catergories/:id");
      })
      .catch(err => {
        console.log(err);
      });
    window.location.reload();
  };

  handleSubmit = e => {
    e.preventDefault();
    const deleteCatergory = () => {
      axiosWithAuth()
        .delete(`https://mypartyplanner.herokuapp.com/api/categories/:id`)
        .then(res => {
          console.log(res);
          axiosWithAuth()
            .get("https://mypartyplanner.herokuapp.com//api/categories/:id")

            .then(res => {
              console.log(res);
              deleteCatergory(res.data);
            })
            .catch(err => console.log(err.response));
        })
        .catch(err => console.log(err.response));
    };
  };
  render(props) {
    return (
      <div className="buttons">
        <h1>Catergories</h1>
        <button
          className="Birthday-Party"
          onClick={() => props.addItem(props.button)}
        >
          Birthday Party
        </button>
        <button
          className="Halloween-Party"
          onClick={() => props.addItem(props.button)}
        >
          Halloween Party
        </button>
        <button
          className="Garden-Party"
          onClick={() => props.addItem(props.button)}
        >
          Garden Party
        </button>
        <button
          className="Bachelor-Party"
          onClick={() => props.addItem(props.button)}
        >
          Bachelor Party
        </button>
        <button
          className="Add-Party"
          onClick={() => props.addItem(props.button)}
        >
          Add Party
        </button>
        <CategoryPage />
        <Categorys />
      </div>
    );
  }
}
export default Categories;
// Close the dropdown menu if the user clicks outside of it
