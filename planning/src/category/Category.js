import React, { Component } from "react";
import CategoryCard from "./CategoryCard";
import { NavLink } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import CategoryForm from "./CategoryForm";
import CatergoryList from "./CatergoryList";

export default class Catgory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  deleteMovie = id => {
    axiosWithAuth()
      .delete(`https://mypartyplanner.herokuapp.com/api/categories/:id${id}`)
      .catch(err => {
        console.log(err.response);
      });
    this.props.history.push("/");
  };

  componentDidMount(newProps) {
    const handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
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
  }
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchCategories(newProps.match.params.id);
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    const putMessage = quote => {
      axiosWithAuth()
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

    const fetchCategories = id => {
      axiosWithAuth()
        .get(`https://mypartyplanner.herokuapp.com/api/categories/${id}`)
        .then(res => this.setState({ categories: res.data }))
        .catch(err => console.log(err.response));
    };

    const saveCategory = () => {
      const addToSavedList = this.props.addToSavedList;
      addToSavedList(this.state.category);
    };
  };
  render() {
    if (!this.state.category) {
      return <div>Loading category information...</div>;
    }

    return (
      <div className="save-wrapper">
        <CategoryCard category={this.state.category} />
        <button className="save-button" onClick={this.saveCategory}>
          Save
        </button>
        <NavLink to={`/update-category/${this.state.category.id}`}>
          <button className="update-button">Update</button>
        </NavLink>
        <button
          onClick={() => this.deleteCategory(this.state.category.id)}
          className="delete-button"
        >
          Delete
        </button>
        <CategoryForm />
        <CatergoryList />
      </div>
    );
  }
}
