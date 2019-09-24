  
import React from 'react';
import SignUpPage from './Components/SignUpPage';
import Nav from './Components/Nav';
import {Route,Link} from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div className="App">
      <Nav/>
       <div className='supage'>
       <SignUpPage/>
       </div>
    </div>
    
  );
}

export default App;
