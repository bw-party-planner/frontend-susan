import React from 'react';
import axios from 'axios';
import '../index.css';


const [infos, setInfos] =useState("");



useEffect(()=> {
  axios.get(`https://api.nasa.gov/planetary/apod?api_key=wSY6t0BBf6J5XGWjyzPiccqycatsnqZ5etwsQDv7`)
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
  <CategoryForm 
  id={infos.id}
  guest={infos.guest}
  theme={infos.theme}
  date={infos.date}
  budget={infos.budget}
  category_id={infos.category_id}
  />
)



class CategoryForm extends React.Component {
 constructor(props) {
   super(props);
   this.state = { value: 'coconut' };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }
 
 handleSubmit = e => {
   e.preventDefault();
   const baseURL = 'https://mypartyplanner.herokuapp.com/api';
   axios
     .post(`${baseURL}/categories`)
     .then(res => {
       console.log(res);
       localStorage.setItem('token', res.data.token);
       this.props.history.push('catergories/:id');
     })
     .catch(err => {
       console.log(err);
     });
 };
 handleChange(event) {
   this.setState({ value: event.target.value });
 }
 handleSubmit(event) {
   event.preventDefault();
 }
 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <label>
         What type of party are you looking for? :
         <select value={this.state.value} onChange={this.handleChange}>
           <option value='Birthday Party'>Birthday Party</option>
           <option value='Dinner Party'>Dinner Party</option>
           <option value='Garden Party'>Garden Party</option>
           <option value='Helloween'>Helloween Party</option>
           <option value='Bachelor'>Bachelor Party</option>
         </select>
       </label>
       <input type='submit' value='Submit' />
     </form>
   );
 }
}
export default CategoryForm;
// Close the dropdown menu if the user clicks outside of it
