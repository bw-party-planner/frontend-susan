import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";

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

export function PartyData() {
  const [infos, setInfos] = useState("");
  useEffect(() => {
    axiosWithAuth()
      .get(`https://mypartyplanner.herokuapp.com/api/parties/:id`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("there is an error with axios", error);
      });
  }, []);

  return (
    <div>
      <ImgW>
        <PartyImg src="https://images.unsplash.com/photo-1519111887837-a48ccf9edc00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"></PartyImg>
      </ImgW>
    </div>
  );
}
export default PartyData;
