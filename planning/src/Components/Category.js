import React, { useState, useEffect } from "react";
import { BrowserRouter as Route } from "react-router-dom";

import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";
import CategoryPage from "./CategoryPage.js";
import Categorys from "./Categorys.js";

export class Categories extends React.Component {
  constructor() {
    super();
    this.newValue = {};
  }

  componentDidMount() {
    const handleSubmit = e => {
      e.preventDefault();
      axios
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

    const putMessage = quote => {
      axios
        .put("https://mypartyplanner.herokuapp.com/api/categories/:id", quote)
        .then(response => {
          console.log(response);
          this.setState({
            putSuccessMessage: response.data.successMessage,
            putError: "You need a Party!"
          });
        })
        .catch(err => {
          this.setState({
            putSuccessMessage: "You have successfully chosen a party!",
            putError: err.response.data.Error
          });
        });
    };

    axios
      .delete(`https://mypartyplanner.herokuapp.com/api/categories/:id`)
      .then(res => {
        console.log(res);
        axios
          .fetch("https://mypartyplanner.herokuapp.com//api/categories/:id")

          .then(res => {
            console.log(res);
          })
          .catch(err => console.log(err.response));
      })
      .catch(err => console.log(err.response));
  }

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
