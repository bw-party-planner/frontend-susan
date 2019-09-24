import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import CategoryForm from './CategoryForm';
import '../index.css';


const PartyB = styled.div`
background: purple;
`;

const PartyT = styled.h1`
margin:0;
padding-top: 1%;
padding-bottom: 1%;
`;

const PartyP = styled.p`
padding-bottom: 2%;
`;

function Parties(){
return(
  <PartyB>
  <PartyT>Parties</PartyT>
  <div>
    <PartyP>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, accusantium? Necessitatibus aliquam sit incidunt qui cumque nam cupiditate ullam corporis eveniet, velit mollitia ad praesentium. Porro cupiditate ipsum nesciunt consequatur.
    </PartyP>
    <CategoryForm/>
  </div>
  </PartyB>
);
}

export default Parties