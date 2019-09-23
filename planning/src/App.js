import React from 'react';
import {Party, SignUp,ShoppingList,TodoList,Pictures,Navigation}
import './App.css';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>hi</h1>
       <Navigation />
       <Route exact path ='/' component={Party}/>
       <Route path = '/sign-up' component={SignUp}/>
       <Route path = '/Shopping-list' component={ShoppingList}/>
       <Route path = '/todo-list' component={TodoList}/>
       <Route path = '/pictures' component={Pictures}/>
      </header>
    </div>
  );
}

export default App;
