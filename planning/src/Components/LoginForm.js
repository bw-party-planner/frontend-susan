import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field, Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../index.css';

const LoginForm = ({values,errors,touched,status}) => {
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    if(status) {
      setUsers ([...users, status]);
    }
  },[status]);
  return(
    <div className="user-form">
      <Form>
        <Field type='text' name='name' placeholder='UserName'/>
        {touched.name && errors.name && (
          <p className='error'>{errors.name}</p>
        )}
        <Field type = 'text' name='password' placeholder='Password'/>
        {touched.password && errors.password && (
          <p className='error'>{errors.password}</p>
        )}
        <button className='lbtn'>Login</button>
      </Form>
      {/* {users.map(user => (
        <ul key={user.id}>
          <li>Username: {user.name}</li>
          <li>Password: {user.password}</li>
        </ul>
      ))} */}
    </div>
  )
}

const FormikLoginForm = withFormik ({
  mapPropsToValues({name, password}){
    return {
      name: name || '',
      password: password || ''
     
    };
  },
  validationSchema:Yup.object().shape({
    name: Yup.string().required("Your name is required here!!!"),
    password: Yup.string().required("Please insert a Password!!!!"),
    
  }),
  handleSubmit(values,{setStatus, resetForm}){
    axios
    .post('https://reqres.in/api/users', values)
    .then(res => {
      setStatus(res.data);
      resetForm();
      
    })
    .catch(err => console.log(err.res))
  }
})(LoginForm);
export default FormikLoginForm