import React from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

class ShoppingList extends React.Component {
  constructor() {
    super();
    this.newValue = {};
  }
  handleSubmit = e => {
    e.preventDefault(this.props);
    const baseURL = "https://mypartyplanner.herokuapp.com/api";
    axiosWithAuth
      .post(`${baseURL}/api/parties/:id/shoppingList`)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        this.props.history.push("parties/:id/shoppingList");
      })
      .catch(err => {
        console.log(err);
      });
    window.location.reload();
  };
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
            .get(
              "https://mypartyplanner.herokuapp.com/api/parties/:id/shoppingList/:itemId"
            )
            .then(res => {
              deleteItem(res.data);
            })
            .catch(err => console.log(err.response));
        })
        .catch(err => console.log(err.response));
    };
  };

  render(props) {
    return (
      <div className="shoppinglist">
        <div className="shopping-cart_item">
          <h1>{this.props.item}</h1>
          <div key={props.id}>
            <p>$ {props.price}</p>
            <button onClick={() => props.deleteItem(props.id)}>
              Remove from cart
            </button>
          </div>
        </div>
        ); };
      </div>
    );
  }
}
export default ShoppingList;
