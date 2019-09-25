import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GetLogin from './Components/GetLogin';
import Register from './Components/Register';
import ShoppingCart from './Components/ShoppingCart.js';
import Nav from './Components/Nav';
import Parties from './Components/Parties';
import PrivateRoute from './Components/PrivateRoute';
import Catergories from './parties/Catergories';
import { PartyContext } from './Contexts/Partycontext.js';
import { CartContext } from './Contexts/CartContext.js';




function App() {
 const [cart, setCart] = useState([]);
 return (
   <div className='App'>
     <Router>
       <Route exact path='/' component={GetLogin} />
       <Route exact path='/navigation' component={Nav} />
       <PartyContext.Provider>
         <CartContext.Provider value={cart}>
           <Route
             exact
             path='/getlogin'
             render={props => <GetLogin {...props} />}
           />
           <Route
             exact
             path='/register'
             render={props => <Register {...props} />}
           />{' '}
           {<PrivateRoute exact path='/catergories' component={Catergories} />}
           <Route exact path='/catergories' component={Catergories} />
           <Route exact path='/parties' component={Parties} />
           <Route
             exact
             path='/cart'
             render={() => <ShoppingCart cart={cart} />}
           />
         </CartContext.Provider>
       </PartyContext.Provider>
     </Router>
   </div>
 );
}
export default App;
