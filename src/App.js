import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Route, Switch } from 'react-router-dom'
import Home from "./Home";
import PizzaForm from "./PizzaForm";
import './App.css'
import axios from "axios";
import schema from './validation/schema'
import * as yup from 'yup'
import './index.css'

const initialFormValues = {
  //Text Input
  name: '',
  extras: '',
  //Radio buttons
  sauce: '',
  //dropDown
  size: '',
  //CheckBoxes
  cheese: false,
  pepperonie: false,
  sausage: false,
  onion: false,
  pineapple: false,
  greenPepper: false,
  corn: false,
}

const initialFormErrors = {
  name: '',
  extras: '',
  sauce: '',
  size: ''
}

const initialPizza = []
const initialDisabled = false

const App = () => {

  const [pizzas, setPizza] = useState(initialPizza)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza)
    .then(resp => {
      setPizza([resp.data, ...pizzas])
    }).catch(error => console.log(error))
    .finally(() => setFormValues(initialFormValues))
  } 

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      extras: formValues.extras.trim(),
      sauce: formValues.sauce.trim(),
      size: formValues.size.trim(),
      toppings:['cheese', 'pepperoni', 'sausage', 'onion', 'pineapple', 'greenPepper', 'brusselSprouts'].filter(topping => !!formValues[topping])
    }
    postPizza(newPizza)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Switch>
        <Route path='/Pizza'>
          <PizzaForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          />

        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
