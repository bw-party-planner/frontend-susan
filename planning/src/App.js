  
import React from 'react';
import SignUpPage from './Components/SignUpPage';
import Nav from './Components/Nav';
import {Route,Link} from 'react-router-dom';
import Parties from './Components/Parties';
import './App.css';



function App() {
  return (
    <div className="App">
      <div className='navigation'>
      <Nav/>
      </div>
      <div className='partypage'>
        <Route exact path='/' component={Parties}/>
      </div>
       <div className='supage'>
       <Route exact path='/signuppage' component={SignUpPage}/>
       </div>
    </div>
    
  );
}

export default App;
