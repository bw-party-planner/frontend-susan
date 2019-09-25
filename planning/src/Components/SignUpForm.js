import React, { useState, useEffect } from "react";
import { withFormik, Form, Field, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../index.css";

const SignUpForm = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);
  return (
    <div className="user-form">
      <Form>
        <Field type="text" name="name" placeholder="Username" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <Field type="text" name="email" placeholder="Email" />
        {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Field type="text" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <button className="btn">Sign Up</button>
      </Form>
      {/* {users.map(user => (
        <ul key={user.id}>
          <li>UserName: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Password: {user.password}</li>
        </ul>
      ))} */}
    </div>
  );
};

const FormikSignUpForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Your username is required here!!!"),
    password: Yup.string().required("Please insert a Password!!!!")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://mypartyplanner.herokuapp.com/api/auth/login", values)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/catergories");
      })
      .catch(err => {
        console.log(err);
      });
  }
})(SignUpForm);
export default FormikSignUpForm;
