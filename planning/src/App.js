import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GetLogin from "./Components/GetLogin";
import Register from "./Components/Register";
import Nav from "./Components/Nav";
import PrivateRoute from "./Components/PrivateRoute";
import { CategoryPage } from "./Components/CategoryPage";
import { PartyContext } from "./Contexts/Partycontext.js";
import { CategoryContext } from "./Contexts/CategoryContext.js";
import Category from "./Components/Category";
import Party from './Components/Party';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={GetLogin} />
        <Route exact path="/navigation" component={Nav} />
        <PartyContext.Provider>
          <CategoryContext.Provider value={cart}>
            <Route
              exact
              path="/getlogin"
              render={props => <GetLogin {...props} />}
            />
            <Route
              exact
              path="/register"
              render={props => <Register {...props} />}
            />{" "}
            <PrivateRoute
              exact
              path="./Components/Party"
              component={Party}
            />
            <Route exact path='./Components/Category' component={Category} />
          </CategoryContext.Provider>
        </PartyContext.Provider>
      </Router>
    </div>
  );
}
export default App;
