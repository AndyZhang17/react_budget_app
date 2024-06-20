import React, {useContext, useState} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {currency, budget, dispatch} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const newvalue = event.target.value;
        dispatch({type: "SET_BUDGET", payload: event.target.value});
        setNewBudget(newvalue);
    }

/* 
Here, you are using the Bootstrap Alert classes to give a nice 
gray background by adding some text and hard coding a value.
*/
    return (
<div className = "alert alert-secondary">
    <span>Budget: {currency}{newBudget}</span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};

export default Budget;