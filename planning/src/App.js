import React, { useState } from "react";
import "./App.css";

import ShoppingCart from "./Components/ShoppingCart.js";
import SignUpPage from "./Components/SignUpPage";
import Nav from "./Components/Nav";
import Parties from "./Components/Parties";

import { PartyContext } from "./Contexts/Partycontext.js";
import { CartContext } from "./Contexts/CartContext.js";
function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Nav />
      <PartyContext.Provider>
        <CartContext.Provider value={cart}>
          <Route exact path="/signuppage" component={SignUpPage} />
          <Route exact path="/" component={Parties} />
          <Route
            exact
            path="/cart"
            render={() => <ShoppingCart cart={cart} />}
          />
        </CartContext.Provider>
      </PartyContext.Provider>
    </div>
  );
}
export default App;
