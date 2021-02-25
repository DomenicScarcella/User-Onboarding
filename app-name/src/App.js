import './App.css';
import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios'
import Form from './Form'
import formSchema from './Schema'
import * as yup from 'yup'

const initialFormValues = {name: '', email: '', password: '', terms: false,}
const initialFormErrors = {name: '', email: '', password: '', terms: false,}
const initialUsers = []
const initialDisabled =  true;

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => {
        console.log(err)
      })
      console.log(users)
      setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='App'>
      <header className='App-header'><h1>User Onboarding</h1></header>

      <Form 
        values={formValues}
        errors={formErrors}
        disabled={disabled}
        change={inputChange}
        submit={postNewUser}
      />

      <h2>Current Users</h2>

      {
        users.map(user => {
          return (
            <div key={user.id}>
              <p><strong>{user.name}</strong>: {user.email}</p>
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
