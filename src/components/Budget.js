import React, {useContext, useState} from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
    const {budget, expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const handleMaxMinBudget = (event) => {
        if (event.target.value >= 20000){
            alert ("The budget value can not exceed 20000");
        }
        let totalExpenses = 0;
        for(let i=0; i<expenses.length ; i++){
            totalExpenses += expenses[i].cost;
        }
        console.log (totalExpenses);
        if (event.target.value < totalExpenses){
            alert("Budget can not be less than spent")
        }
    }
    return (
        <div className="alert alert-secondary">
            <span>Budget: {currency} {budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} onClick={handleMaxMinBudget}></input>
        </div>
    );
};

export default Budget;