import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import {Link, Route} from 'react-router-dom';
import '../index.css';


function SignUpPage() {
return(
  <div>
    <div className="signup">
    <Link to='/sign-up'>Sign Up</Link>
    </div>
    <div className = 'login'>
    <Link to='/login'>Login</Link>
    </div>
    <Route exact path='/sign-up' component={SignUpForm}/>
    <Route exact path='/login' component={LoginForm}/>
  </div>
 )
}

export default SignUpPage;