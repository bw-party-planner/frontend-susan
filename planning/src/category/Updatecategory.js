import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";

const Updatecategory = props => {
  const initialItem = {
    id: props.match.params.id,
    name: ""
  };

  const [update, setUpdate] = useState(initialItem);
  console.log("update", update);

  const [info, setInfo] = useState(initialItem);
  console.log("info", info);

  const changeHandler = e => {
    e.preventDefault();
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const changeHandlerStars = e => {
    e.preventDefault();
    setInfo({ ...info, [e.target.name]: [e.target.value] });
  };

  const data = {
    ...update,
    ...info
  };
  console.log("data", data);

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        `https://mypartyplanner.herokuapp.com/api/categoriess${props.match.params.id}`,
        data
      )
      .catch(err => {
        console.log(err.response);
      });
    props.history.push("/");
  };

  return (
    <div>
      <h2>Update Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          value={update.name}
        />

        <input
          type="array"
          name="info"
          onChange={changeHandlerStars}
          value={update.info}
        />
        <button className="form-button">Update Movie</button>
      </form>
    </div>
  );
};

export default Updatecategory;
