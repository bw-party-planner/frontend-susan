import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return(
<div>
  <div className="App">
    <h1>Party Planner</h1>
    <div>
      <Link to ='/'>Party</Link>
    </div>
    <div>
      <Link to ='/sign-up'>Sign Up</Link>
    </div>
    <div>
      <Link to ='/pictures'>Pictures</Link>
    </div>
    <div>
      <Link to ='shopping-list'>Shopping List</Link>
    </div>
    <div>
      <Link to ='todo-list'>Todo List</Link>
    </div>
  </div>
</div>
    
 
  )
}





export default Navigation;