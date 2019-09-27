import React, { useState, useEffect } from "react";
import { BrowserRouter as Route } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";

import ToDoList from "./ToDoList.js";
import ShoppingList from "./ShoppingList.js";
function Party() {
  const [infos, setInfos] = useState("");

  useEffect(() => {
    axiosWithAuth
      .get(`https://mypartyplanner.herokuapp.com/api/parties`)
      .then(response => {
        const infos = response.data;
        console.log(response.data);
        setInfos(infos);
      })
      .catch(error => {
        console.log("there is an error with axios", error);
      });
  }, []);
  return (
    <div className="PartyPage">
      <h1>Welcome to the Party Page </h1>
      <Party
        id={infos.id}
        guest={infos.guests}
        theme={infos.theme}
        date={infos.date}
        budget={infos.budget}
        category_id={infos.category_id}
      />
      <ToDoList />
    </div>
  );
}
export default Party;
