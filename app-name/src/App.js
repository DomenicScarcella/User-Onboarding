import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Form from './Form'
import formSchema from './Form'
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

  return (
    <div className="App">
      <header className="App-header"><h1>User Onboarding</h1></header>

      {/* <Form 
        
      /> */}

    </div>
  );
}

export default App;
