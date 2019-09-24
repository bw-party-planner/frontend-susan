import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import {Link, Route} from 'react-router-dom';
import styled from 'styled-components';
import '../index.css';

const SignUpB = styled.div`
background: black;
margin: 0;
padding: 1%;
`;

const LoginB = styled.div`
background: black;
margin:0;
padding: 1%;
`;


function SignUpPage() {
return(
  <div>
  <div className='suheader'>
       <h1>Sign-up/ Log-in</h1>
       </div>
    <SignUpB>
    <Link to='/sign-up'>Sign Up</Link>
    </SignUpB>
    <LoginB>
    <Link to='/login'>Login</Link>
    </LoginB>
    <Route exact path='/sign-up' component={SignUpForm}/>
    <Route exact path='/login' component={LoginForm}/>
  </div>
 )
}

export default SignUpPage;