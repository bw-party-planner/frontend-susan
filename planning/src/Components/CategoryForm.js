import React from "react";
import axios from "axios";
import "../index.css";

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          What type of party are you looking for? :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="">Birthday Party</option>
            <option value="lime">Dinner Party</option>
            <option value="coconut">Garden Party</option>
            <option value="mango">Helloween Party</option>
            <option value="mango">Bachelor Party</option>
          </select>
        </label>
        <div className='btncatwrapper'>
        <input className="btncat" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default CategoryForm;

// Close the dropdown menu if the user clicks outside of it
