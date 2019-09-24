import React from 'react';
import {Route,Link} from 'react-router-dom';
import styled from 'styled-components';
import '../index.css';

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin:0;
    padding-top: 10px;
    padding-bottom:10px;
`;
const Li = styled.li`
  text-decoration: none;
  color: white;
`;

const Navo = styled.div`
background: black;
`;


function Nav() {
  return (
    <Navo>
     <Ul>
       <Link to='/signup'>
       <Li>Sign-Up/Login</Li>
       </Link>
       <Li>nav</Li>
       <Li>nav</Li>
       <Li>nav</Li>
     </Ul>
    </Navo>
    
  );
}

export default Nav;