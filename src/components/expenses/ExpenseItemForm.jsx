import React, {useEffect, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {get} from "lodash";

function ExpenseItemForm(props) {

    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState(0);
    const [expenseTaxPercent, setExpenseTaxPercent] = useState(0);
    const [expenseTipPercent, setExpenseTipPercent] = useState(0);

    const handleSave = () => {
        props.onFinish({expenseName, expenseAmount: +expenseAmount, tax: +expenseTaxPercent, tip: +expenseTipPercent})
        props.onClose();
    }
    const handleCancel = () => {
        props.onClose();
    }

    useEffect(() => {
        if (props.initialValues) {
            const name = get(props, 'initialValues.expenseName', '');
            const amount = get(props, 'initialValues.expenseAmount', 0);
            const expenseTax = get(props, 'initialValues.expenseTaxPercent', 0);
            const expenseTip = get(props, 'initialValues.expenseTipPercent', 0);

            setExpenseName(name);
            setExpenseAmount(amount);
            setExpenseTaxPercent(expenseTax);
            setExpenseTipPercent(expenseTip);
        }

    }, [props.initialValues])


    const handleTipInputChange=(e)=>{
        let amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,4})?$/)) {
            setExpenseTipPercent(amount);
        }
    }

    const handleTaxInputChange=(e)=>{
        let amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,4})?$/)) {
            setExpenseTaxPercent(amount);
        }
    }

    const handleAmountInputChange=(e)=>{
        let amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,4})?$/)) {
            setExpenseAmount(amount);
        }
    }


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
                       onChange={handleAmountInputChange}/>
            </div>

            <div className="col-auto">
                <label htmlFor="tax">Tax (%)</label>
                <input type="text" className="form-control" id="tax" placeholder="Expense Tax"
                       value={expenseTaxPercent}
                       onChange={handleTaxInputChange}/>
            </div>
            <div className="col-auto">
                <label htmlFor="tip">Tip (%)</label>
                <input type="text" className="form-control" id="tip" placeholder="Expense Tip"
                       value={expenseTipPercent}
                       onChange={handleTipInputChange}/>
            </div>
            <div className="col-auto mt-2 float-right">
                <Button variant="primary" className="mr-2" onClick={handleSave}>Save</Button>
                <Button variant="secondary"  onClick={handleCancel}>Cancel</Button>

            </div>

        </div>
    );
}

export default ExpenseItemForm;
