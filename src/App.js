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
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
