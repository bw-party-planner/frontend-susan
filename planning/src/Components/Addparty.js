import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";

const PartyB = styled.div`
  background: purple;
`;

const PartyT = styled.h1`
  margin: 0;
  padding-top: 1%;
  padding-bottom: 1%;
`;

const PartyP = styled.p`
  padding-bottom: 2%;
  font-size: 1.5rem;
  padding-left: 1%;
  padding-right: 1%;
`;

const PartyImg = styled.img`
  height: 55vh;
  width: 85vw;
  border-radius: 10px;
`;

const ImgW = styled.div`
  margin-left: 4%;
  margin-right: 1%;
  object-fit: cover;
  width: 92%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

//  export function GetParty(){
//   const [infos, setInfos] =useState("");

//  useEffect(()=> {
//    axios.get(``)
//    .then(response => {
//      const infos = response.data;
//      console.log(response.data);
//      setInfos(infos);
//    })
//    .catch(error => {
//     console.log("there is an error with axios", error);
//    });
//  },[]);
//  return(
//    <GetParty
//    id={infos.id}
//    guest={infos.guests}
//    theme={infos.theme}
//    date={infos.date}
//    budget={infos.budget}
//    category_id={infos.category_id}
//    />
//  )
// }

function Parties() {
  return (
    <PartyB>
      <PartyT>Parties</PartyT>
      <ImgW>
        <PartyImg src="https://images.unsplash.com/photo-1519111887837-a48ccf9edc00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></PartyImg>
      </ImgW>
      <div>
        <PartyP>
          Find the party you are looking for below! Whether it be a Birthday
          Party, Garden Party, Dinner Party, Halloween Party, or even a Bachelor
          Party, we got it covered for you!
        </PartyP>
      </div>
    </PartyB>
  );
}

export default Addparty;
