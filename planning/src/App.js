import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ShoppingCart from "./Components/ShoppingCart.js";
import SignUpPage from "./Components/SignUpPage";
import Nav from "./Components/Nav";
import Parties from "./Components/Parties";
import Catergories from "./parties/Catergories";

import { PartyContext } from "./Contexts/Partycontext.js";
import { CartContext } from "./Contexts/CartContext.js";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Router>
        <Nav />
        <PartyContext.Provider>
          <CartContext.Provider value={cart}>
            <Route exact path="/signuppage" component={SignUpPage} />
            <Route exact path="/" component={Parties} />
            <Route exact path="/catergories" component={Catergories} />
            <Route
              exact
              path="/cart"
              render={() => <ShoppingCart cart={cart} />}
            />
          </CartContext.Provider>
        </PartyContext.Provider>
      </Router>
    </div>
  );
}
export default App;
