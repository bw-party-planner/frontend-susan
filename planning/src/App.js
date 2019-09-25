import React, { useState } from "react";
import "./App.css";
import {Route} from 'react-router-dom';
import GetLogin from './Components/GetLogin';
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
      <Route exact path='/' component={GetLogin}/>
      <Route exact path='/navigation' component={Nav}/>
      <PartyContext.Provider>
        <CartContext.Provider value={cart}>
          <Route exact path="/signuppage" component={SignUpPage} />
          <Route exact path="/parties" component={Parties} />
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
