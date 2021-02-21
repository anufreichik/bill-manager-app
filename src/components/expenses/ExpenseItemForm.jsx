import React, {useEffect, useState} from 'react';
import {FaPlus} from "react-icons/all";
import {Button, Modal} from "react-bootstrap";
import {get} from "lodash";

function ExpenseItemForm(props) {

    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount]=useState(0);
    const [expenseTaxPercent, setExpenseTaxPercent]  = useState(0);
    const [expenseTipPercent, setExpenseTipPercent]  = useState(0);

    const handleSave = () => {
        props.onFinish({expenseName, expenseAmount, tax:expenseTaxPercent, tip:expenseTipPercent})
        props.onClose();
    }
    const handleCancel=()=>{
        props.onClose();
    }

    useEffect(()=>{
        if(props.initialValues){
            const name = get(props, 'initialValues.expenseName', '');
            const amount = get(props, 'initialValues.expenseAmount', 0);
            const expenseTax = get(props, 'initialValues.expenseTaxPercent', 0);
            const expenseTip=get(props, 'initialValues.expenseTipPercent', 0);

            setExpenseName(name);
            setExpenseAmount(amount);
            setExpenseTaxPercent(expenseTax);
            setExpenseTipPercent(expenseTip);
        }

    },[props.initialValues])


    return (
        <div>
                    <div className="col-auto">
                        <label htmlFor="expenseName">Expense Name</label>
                        <input type="text" className="form-control" id="expenseName" placeholder="Expense Name"
                               value={expenseName}
                               onChange={(e) => setExpenseName(e.target.value)}/>
                    </div>

                    <div className="col-auto">
                        <label htmlFor="amount">Amount($)</label>
                        <input type="text" className="form-control" id="amount" placeholder="Expense Amount"
                               value={expenseAmount}
                               onChange={(e) => setExpenseAmount(+e.target.value)}/>
                    </div>

                    <div className="col-auto">
                        <label htmlFor="tax">Tax (%)</label>
                        <input type="text" className="form-control" id="tax" placeholder="Expense Tax"
                               value={expenseTaxPercent}
                               onChange={(e) => setExpenseTaxPercent(+e.target.value)}/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="tip">Tip (%)</label>
                        <input type="text" className="form-control" id="tip" placeholder="Expense Tip"
                               value={expenseTipPercent}
                               onChange={(e) => setExpenseTipPercent(+e.target.value)}/>
                    </div>
            <div className="col-auto mt-2 float-right">
                    <Button variant="secondary" className="mr-2" onClick={handleCancel}>Cancel</Button>
                    <Button variant="primary" onClick={handleSave}>Save</Button>
            </div>

        </div>
    );
}

export default ExpenseItemForm;
