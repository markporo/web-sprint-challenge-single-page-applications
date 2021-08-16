import React from 'react'
import { Link } from 'react-router-dom'

export default function PizzaOrdered(props) {
    const { pizza } = props;

    if (pizza === null) {
        return <div> <h1>No Order Found </h1>
            <p>Try submitting Your Order once more!</p>
            <button><Link id="order-pizza" to='/pizza'>ORDER PIZZA</Link></button>
        </div>
    }



    return <div>
        <h1>Congratulations!  You ordered a Pizza!</h1>
        <h3>Here are your Order Details:</h3>
        <p>You: {pizza.name}</p>
        <p>Pizza Size: {pizza.size}</p>
        <p>Toppings: {pizza.toppings}</p>
        <p>Special Instructions: {pizza.specialInstructions}</p>

    </div>
}