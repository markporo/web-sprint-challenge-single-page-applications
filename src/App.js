import React, { useState, useEffect } from "react";
import Home from "./components/home";
import Pizza from './components/pizza'
import PizzaOrdered from "./components/pizza-ordered";
import { Link, Route, useHistory, Switch } from "react-router-dom";
import schema from "./components/validation/formSchema";
import * as yup from 'yup'

const App = () => {

  // initial values
  const initialFormValues = {
    ///// TEXT INPUTS /////
    name: "",
    size: "",
    pepporoni: false,
    tomatoes: false,
    jalepenos: false,
    bananaPeppers: false,
    greenPeppers: false,
    specialInstructions: "",
  }

  const initialFormErrors = {
    name: "",
    size: "",
    pepporoni: false,
    tomatoes: false,
    jalepenos: false,
    bananaPeppers: false,
    greenPeppers: false,
    specialInstructions: "",
  }

  const initialDisabled = true

  // STATES
  const [pizza, setPizzaOrder] = useState(null)  // pizza object for 
  const [pizzaFormValues, setPizzaFormValues] = useState(initialFormValues) // object for showing what the user sees on inputs
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean


  const history = useHistory();


  //////////////// EVENT HANDLERS ////////////////
  const change = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    yup.reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" })
      })
      .catch(err => {
        setFormErrors({ ...formErrors, [name]: err.message })
      })



    setPizzaFormValues({
      ...pizzaFormValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const pizzaFormSubmit = () => {
    const newPizza = {
      name: pizzaFormValues.name.trim(),
      size: pizzaFormValues.size,
      // how is this working...array of strings to an object of non strings in pizza form values
      toppings: ["pepporoni", "tomatoes", "jalepenos", "bananaPeppers", "greenPeppers"].filter(topping => pizzaFormValues[topping]).join(', '),
      specialInstructions: pizzaFormValues.specialInstructions.trim(),
    }
    console.log(pizza, "pizza")
    setPizzaOrder(newPizza);
    setPizzaFormValues(initialFormValues);
    history.push('/pizza-ordered');
    // would probably post this to database of personal account 

  }

  useEffect(() => {
    // ADJUST THE STATUS OF `disabled` EVERY TIME `pizzaFormValues` CHANGES
    schema.isValid(pizzaFormValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [pizzaFormValues])


  return (
    <>
      <nav className='nav-links'>
        {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and order (`/items-list`) */}
        <p><Link to='/'>HOME</Link></p>
        <p><Link id="order-pizza" to='/pizza'>ORDER PIZZA</Link></p>
        <p><Link to='/pizza-ordered'>Your Purchased Pizza</Link></p>
      </nav>

      {/* 👉 STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
      <Switch>
        <Route path='/' exact component={Home} > <Home></Home></Route>
        <Route path='/pizza' component={Pizza} >
          <Pizza
            pizzaValues={pizzaFormValues}
            change={change}
            submit={pizzaFormSubmit}
            disabled={disabled}
            errors={formErrors}>
          </Pizza>
        </Route>
        <Route path='/pizza-ordered' component={PizzaOrdered} >
          <PizzaOrdered pizza={pizza}> </PizzaOrdered>
        </Route>
      </Switch>
    </>
  );
};
export default App;
