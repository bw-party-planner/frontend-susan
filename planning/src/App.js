import React, { useState } from "react";
import { Route, Router } from "react-router-dom";
import "./App.css";
import ShoppingCart from "./Components/ShoppingCart.js";

import { PartyContext } from "./Contexts/PartyContext.js";
import { CartContext } from "./Contexts/CartContext.js";

import parties from "./parties/parties.js";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        <PartyContext.Provider>
          <CartContext.Provider value={cart}>
            <header className="App-header"></header>
            <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
          </CartContext.Provider>
        </PartyContext.Provider>
      </div>
    </Router>
  );
}

export default App;
