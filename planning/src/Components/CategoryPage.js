import React, {useState} from 'react'
import axios from 'axios';
import CategoryForm from './CategoryForm';


export default function CategoryPage() {
  const [infos, setInfos] = useState('');
  useEffect(()=> {
    axios.get(`https://mypartyplanner.herokuapp.com/api/categories`)
    .then(response => {
      const infos = response.data;
      console.log(response.data);
      setInfos(infos);
    })
    .catch(error => {
     console.log("there is an error with axios", error);
    });
  },[]);
  return (
    <div>
      
    </div>
  )
}
