import React from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import {Link, Route} from 'react-router-dom';
import styled from 'styled-components';
import '../index.css';

const SignUpB = styled.div`
background: black;
margin: 0;
padding: 3%;
margin-left:20%;
margin-right:20%;
border-bottom:2px solid purple;
`;

const LoginB = styled.div`
background: black;
margin-left:20%;
margin-right:20%;
padding: 3%;
`;




function SignUpPage() {
return(
  <div className = 'sub'>
  <div className='suheader'>
       <h1>Login</h1>
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