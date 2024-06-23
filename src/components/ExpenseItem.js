import React, {useContext} from 'react';
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const {currency, dispatch} = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: "DELETE_EXPENSE", 
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        dispatch({type: "ADD_EXPENSE", payload: {name: name, cost:10}});
    }
    const decreaseAllocation = (name) => {
        dispatch({type: "RED_EXPENSE", payload: {name: name, cost:10}});
    } 
    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button onClick={event=>increaseAllocation(props.name)} style={{ margin: '0.5rem' , size: 10}}>+</button>
                <button onClick={event=>decreaseAllocation(props.name)}>-</button>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
