import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
    // 👉 STEP 5 - Build a click handler that will navigate us to pizza form
    const history = useHistory();

    //wrap in a Link!
    const routeToForm = () => {
        history.push('/pizza')
    }

    return <div>
        <h1>Welcome to LAMBDA PIZZARIA!</h1>
        <button onClick={routeToForm} id="order-pizza"> ORDER A PIZZA </button>
    </div>
}

