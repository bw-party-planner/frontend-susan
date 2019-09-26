import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GetLogin from "./Components/GetLogin";
import Register from "./Components/Register";
import Nav from "./Components/Nav";
import PrivateRoute from "./Components/PrivateRoute";
import Catergories from "./parties/Catergories";
import { PartyContext } from "./Contexts/Partycontext.js";
import  {CatergoryContext } from "./Contexts/CatergoryContext.js";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={GetLogin} />
        <Route exact path="/navigation" component={Nav} />
        <PartyContext.Provider>
          <CatergoryContext.Provider value={cart}>
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
            <PrivateRoute exact path="/catergories" component={Catergories} />
            {/* <Route exact path='/catergories' component={Catergories} /> */}
          </CatergoryContext.Provider>
        </PartyContext.Provider>
      </Router>
    </div>
  );
}
export default App;
