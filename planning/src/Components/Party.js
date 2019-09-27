import React, { useState, useEffect } from "react";
import { BrowserRouter as Route } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";


function Party(){
  const [infos, setInfos] =useState("");

 useEffect(()=> {
   axiosWithAuth()
   .get(`https://mypartyplanner.herokuapp.com/api/parties`)
   .then(response => {
     const infos = response.data;
     console.log(response.data);
     setInfos(infos);
   })
   .catch(error => {
    console.log("there is an error with axios", error);
   });
 },[]);
 return(
   <Party
   id={infos.id}
   guest={infos.guests}
   theme={infos.theme}
   date={infos.date}
   budget={infos.budget}
   category_id={infos.category_id}
   />
 )
}

export default Party
