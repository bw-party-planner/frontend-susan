import React, { useState } from "react";
import "./App.css";


import { PartyContext } from "./Contexts/PartyContext.js";
import { CartContext } from "./Contexts/CartContext.js";

import parties from "./parties/parties.js";
function App() {
  const [cart, setCart] = useState([]);

  return(
      <div className="App">
        <PartyContext.Provider>
          <CartContext.Provider value={cart}>
            <header className="App-header"></header>
          </CartContext.Provider>
        </PartyContext.Provider>
      </div>
  );
}

export default App;
