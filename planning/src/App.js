import React, { useState } from "react";
import { Route,Link } from "react-router-dom";
import "./App.css";
import  ShoppingCart from "./Components/ShoppingCart.js";
import  {PartyContext}  from "./Contexts/Partycontext.js";
import  {CartContext}  from "./Contexts/CartContext.js";
import GetLogin from './Components/GetLogin';


import SignUpPage from './Components/SignUpPage';
import Nav from './Components/Nav';

import Parties from './Components/Parties';
function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
    
      <Route exact path='/' component={GetLogin}/>
      <Route exact path='/navigation' component={Nav}/>
      <PartyContext.Provider>
        <CartContext.Provider value={cart}>
          <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
          <Route exact path='/signuppage' component={SignUpPage}/>
          {/* <Route exact path='/' component={Parties}/> */}
        </CartContext.Provider>
      </PartyContext.Provider>

    </div>
  );
}

export default App;
