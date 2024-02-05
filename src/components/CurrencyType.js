import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyType  = () => {
    const { currency, dispatch } = useContext(AppContext);


    return (
        
            <select className="from-select border border-success rounded p-3 mb-2 bg-success" name="currency" id="curr" defaultValue={currency} onChange={(event) => dispatch({
                type: 'CHG_CURRENCY',
                payload: event.target.value,
            })}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>  
            </select> 
        
    );
};
export default CurrencyType;
