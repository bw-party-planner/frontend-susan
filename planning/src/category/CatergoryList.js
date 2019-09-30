import React, { Component } from "react";

import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import CategoryContext from "../Contexts/CategoryContext";
export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      str: 'categories!',
      arr: [1, 2, 3, 4, 5],
      num: null // not initialized with a value
    };
  }
    };
  }
  componentDidMount() {
    axiosWithAuth()
      .get("https://mypartyplanner.herokuapp.com/api/categories")
      .then(res => this.setState({ category: res.data }))
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <CategoryContext.Provider>
        <div className="category-list">
          {this.state.category.map(category => (
            <CategoryDetails key={category.id} category={category} />
          ))}
        </div>
      </CategoryContext.Provider>
    );
  }
}

function CategoryDetails({ category }) {
  return (
    <Link to={`/category/${category.id}`}>
      <CategoryCard category={category} />
    </Link>
  );
}
