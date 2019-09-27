import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import Addparty from "./Addparty";
import { CategoryContext } from "../Contexts/CategoryContext.js";

import "../parties/Categories.css";

export function CategoryPage() {
  const [infos, setInfos] = useState([]);
  const [categories, setcategories] = useState([]);
  const [objects, setObjects] = useState([]);
  const [id, setId] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("https://mypartyplanner.herokuapp.com/api/categories")
      .then(response => {
        const info = response.data;
        console.log(response.data);
        setInfos(info);
      })
      .catch(error => {
        console.log("there is an error with axios", error);
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`https://mypartyplanner.herokuapp.com/api/categories`)
      .then(res => {
        this.props.history.push("catergories/:id");
      })
      .catch(err => {
        console.log(err);
      });
  };
  const putMessage = quote => {
    axiosWithAuth()
      .put("https://mypartyplanner.herokuapp.com/api/categories/:id", quote)
      .then(response => {
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
  handleSubmit = e => {
    e.preventDefault();
    const deleteCategory = () => {
      axiosWithAuth()
        .delete(`https://mypartyplanner.herokuapp.com/api/categories/:id`)
        .then(res => {
          axiosWithAuth()
            .get("https://mypartyplanner.herokuapp.com//api/categories/:id")

            .then(res => {
              deleteCategory(res.data);
            })
            .catch(err => console.log(err.response));
        })
        .catch(err => console.log(err.response));
    };
  };
  return (
    <div>
      <Route>
        <CategoryContext.Provider value={{ objects, id }}>
          <h1>Welcome</h1>
          <button className="Birthday-Party" onClick={this.BirthdayPartyButton}>
            Birthday Party
          </button>
          <button
            className="Halloween-Party"
            onClick={this.HalloweenPartyButton}
          >
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
          <Route
            exact
            path="/getlogin"
            render={props => <Addparty {...props} />}
          />
        </CategoryContext.Provider>
      </Route>
    </div>
  );
}

export default CategoryPage;
