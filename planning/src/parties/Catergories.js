import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth.js";
import CategoryPage from "../Components/CategoryPage";
import './Catergories.css';
class Catergories extends React.Component {
  constructor() {
    super();
    this.newValue = {};
  }
  handleSubmit = e => {
    e.preventDefault();
    const baseURL = "https://mypartyplanner.herokuapp.com/api";
    axios
      .post(`${baseURL}/categories`)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        this.props.history.push("catergories/:id");
      })
      .catch(err => {
        console.log(err);
      });
  };
  putMessage = quote => {
    axios
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
    const deleteCatergory = () => {
      axiosWithAuth()
        .delete(`https://mypartyplanner.herokuapp.com/api/categories/:id`)
        .then(res => {
          console.log(res);
          axiosWithAuth()
            .get("https://mypartyplanner.herokuapp.com/api/categories/:id")
            .then(res => {
              deleteCatergory(res.data);
            })
            .catch(err => console.log(err.response));
        })
        .catch(err => console.log(err.response));
    };
  };
  render() {
    return (
      <div className="buttons">
        <h1>Catergories</h1>
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
        <CategoryPage />
      </div>
    );
  }
}
export default Catergories;
// Close the dropdown menu if the user clicks outside of it
