import React, {useState} from 'react';
import {FaPlus} from "react-icons/all";
import {Button, Modal} from "react-bootstrap";

function ExpenseItemForm(props) {
    const [showModal, setShowModal] = useState(false);
    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount]=useState(0);
    const [expenseTaxPercent, setExpenseTaxPercent]  = useState(0);
    const [expenseTipPercent, setExpenseTipPercent]  = useState(0);

    const toggle = () => setShowModal(!showModal);

    const handleSave = () => {
        props.addExpense({expenseName, expenseAmount, tax:expenseTaxPercent, tip:expenseTipPercent})
        setShowModal(false);
    }


    return (
        <div>
            <button type="button" className="btn btn-primary rounded-pill p-2" onClick={toggle}>
                <FaPlus/><span className="p-2">New Expense</span>
            </button>
            <Modal show={showModal} onHide={toggle}>
                <Modal.Header closeButton>
                    <Modal.Title>Expense</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="col-auto">
                        <label htmlFor="expenseName">Expense Name</label>
                        <input type="text" className="form-control" id="expenseName" placeholder="Expense Name"
                               onChange={(e) => setExpenseName(e.target.value)}/>
                    </div>

                    <div className="col-auto">
                        <label htmlFor="amount">Amount($)</label>
                        <input type="text" className="form-control" id="amount" placeholder="Expense Amount"
                               onChange={(e) => setExpenseAmount(+e.target.value)}/>
                    </div>

                    <div className="col-auto">
                        <label htmlFor="tax">Tax (%)</label>
                        <input type="text" className="form-control" id="tax" placeholder="Expense Tax"
                               onChange={(e) => setExpenseTaxPercent(+e.target.value)}/>
                    </div>
                    <div className="col-auto">
                        <label htmlFor="tip">Tip (%)</label>
                        <input type="text" className="form-control" id="tip" placeholder="Expense Tip"
                               onChange={(e) => setExpenseTipPercent(+e.target.value)}/>
                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={toggle}>Cancel</Button>
                    <Button variant="primary" onClick={handleSave}>Save</Button>
                </Modal.Footer>

            </Modal>
        </div>
    );
}

export default ExpenseItemForm;