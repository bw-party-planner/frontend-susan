import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

class ShoppingList extends React.Component {
  constructor() {
    super();
    this.state = {
      shoppinglist: []
    };
  }

  componentDidMount() {
    const handleSubmit = e => {
      e.preventDefault(this.props);
      const baseURL = "https://mypartyplanner.herokuapp.com/api";
      axiosWithAuth()
        .post(`${baseURL}/api/parties/:id/shoppingList`)
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          this.props.history.push("parties/:id/ShoppingList");
        })
        .catch(err => {
          console.log(err);
        });
    };
  }
  putMessage = quote => {
    axios
      .put(
        "https://mypartyplanner.herokuapp.com/api/parties/:id/shoppingList/:itemId",
        quote
      )
      .then(response => {
        this.setState({
          putSuccessMessage: response.data.successMessage,
          putError: "You need a to chose a Item!"
        });
      })
      .catch(err => {
        this.setState({
          putSuccessMessage: "You have successfully chosen a Item!",
          putError: err.response.data.Error
        });
      });
  };
  handleSubmit = e => {
    e.preventDefault();
    const deleteItem = () => {
      axios
        .delete(
          `https://mypartyplanner.herokuapp.com/api/parties/:id/shoppingList/:itemId`
        )
        .then(res => {
          console.log(res);

          axios
            .fetch(
              "https://mypartyplanner.herokuapp.com/api/parties/:id/shoppingList/:itemId"
            )
            .then(res => {
              console.log(res);
              deleteItem(res.data);
            })
            .catch(err => console.log(err.response));
        })
        .catch(err => console.log(err.response));
    };
  };

  render(item) {
    return (
      <div className="shoppinglist">
        <div className="shopping-cart_item">
          <h1>{this.props.data}Shopping is Fun!</h1>
          <p>$ {item}</p>
          <button onClick={props => props.deleteItem(props.data)}>
            Remove from cart
          </button>
        </div>
      </div>
    );
  }
}
export default ShoppingList;
