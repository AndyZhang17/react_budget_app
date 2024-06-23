import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const currencyUniv = {
    '£': "Pound",
    '$': "Dollar",
    '₹': "Rupee",
    '€': "Euro",
    '¥': "CNY",
};

const getCurrencyName = (currency) => {
    const name = currencyUniv[currency];
    return name ? name : "";
};


const Currency = () => {
    const {currency, dispatch} = useContext(AppContext);
    const submitEvent = (value) => {
        dispatch({type: "CHG_CURRENCY", payload: value})
    }
   
    return (

<div className = "alert alert-secondary">
        <select className="custom-select" id="changeCurrency" onChange={(event) => submitEvent(event.target.value)}>
            <option defaultValue>Currency ({currency} {getCurrencyName(currency)})</option>
            <option value='£' name="Pound">£ Pound</option>
            <option value='$' name="Dollar">$ Dollar</option>
            <option value='₹' name="Rupee">₹ Rupee</option> 
            <option value='€' name="Euro">€ Euro</option> 
            <option value='¥' name="CNY">¥ CNY</option>
        </select>
</div>
    )
}

export default Currency;