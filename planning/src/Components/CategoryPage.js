import React, {useState,useEffect} from 'react'
import axios from 'axios';



export default function CategoryPage() {
  const [infos, setInfos] = useState([]);
  useEffect(()=> {
    axios.get('https://mypartyplanner.herokuapp.com/api/categories')
    .then(response => {
      const info = response.data;
      console.log(response.data);
      setInfos(info);
    })
    .catch(error => {
     console.log("there is an error with axios", error);
    });
  },[]);
  return (
    <div>
      <h1>jnjkn</h1>
    </div>
  )
}
