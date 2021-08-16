import React from 'react'
//import { Link } from 'react-router-dom'



export default function Pizza({ submit, change, pizzaValues, disabled, errors }) {

  ////////ON SUBMIT///////////
  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }


  //////////For Each value Change////////////
  const onChange = evt => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, checked, type, } = evt.target
    console.log(type, "type")
    const valueToUse = type === "checkbox" ? checked : value;

    change(name, valueToUse);
  }

  return <div>
    <h1>Let's Make a Pizza</h1>

    <div>errors.name</div>
    <div>errors.size</div>

    <form id="pizza-form" onSubmit={onSubmit}>
      <label>Name&nbsp;
          <input
          id="name-input"
          value={pizzaValues.name}
          onChange={onChange}
          name='name'
          type='text'
        />
      </label>

      <label>Pizza Size
          <select
          // type ??
          id="size-dropdown"
          onChange={onChange}
          value={pizzaValues.size}
          name='size'
        >
          <option value=''>- Select an option -</option>
          <option value='small'>8 Inch - Small</option>
          <option value='medium'>10 Inch - Medium</option>
          <option value='large'>12 Inch - Large</option>
          <option value='x-large'>16 Inch - X-Large</option>
        </select>
      </label>

      <label>Pepporoni
        <input
          type='checkbox'
          name='pepporoni'
          onChange={onChange}
          value={pizzaValues.pepporoni}
        />
      </label>
      <label> Tomatoes
        <input
          type='checkbox'
          name='tomatoes'
          onChange={onChange}
          value={pizzaValues.tomatoes}
        />
      </label>
      <label> Jalepenos
        <input
          type='checkbox'
          name='jalepenos'
          onChange={onChange}
          value={pizzaValues.jalepenos}
        />
      </label>
      <label> Banana Peppers
        <input
          type='checkbox'
          name='bananaPeppers'
          onChange={onChange}
          value={pizzaValues.bananaPeppers}
        />
      </label>
      <label> Green Peppers
          <input
          type='checkbox'
          name='greenPeppers'
          onChange={onChange}
          value={pizzaValues.greenPeppers}
        />
      </label>

      <label>Special Instructions:
          <textarea
          id="special-text"
          value={pizzaValues.specialInstructions}
          onChange={onChange}
          name='specialInstructions'
          type='text'
        />
      </label>
      <button disabled={disabled} id="order-button">Add to Order</button>

    </form>
  </div>
}


// ] A form with an id of "pizza-form"
// - [ ] A name text input field with an id of "name-input"
// - [ ] Validation for name and the error message is "name must be at least 2 characters" (Use this exact error message to make sure tests pass)
// - [ ] A dropdown for pizza size with an id of "size-dropdown"
// - [ ] A checklist for toppings - at least 4 (hint: name each separately!)
// - [ ] Text input for special instructions with an id of "special-text"
// - [ ] An Add to Order button that has an id of "order-button" and that submits form and returns a database record of name, size, toppings and special instructions