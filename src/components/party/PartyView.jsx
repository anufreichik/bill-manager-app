import React, {useState} from 'react';
import {useParams, useLocation, useHistory, Link, Route, Switch, useRouteMatch} from "react-router-dom";
import MembersList from "../members/MembersList";
import TransactionsList from "../transactions/TransactionsList";
import ExpenseItemsList from "../expenseItems/ExpenseItemsList";
import {connect} from "react-redux";

function PartyView(props) {
    let {partyId} = useParams();
    let history = useHistory();
    let data = useLocation();
    let party = data.state.party;
    let match = useRouteMatch();
    //console.log(data.state)

    const[showMembers, setShowMembers]=useState(false);
    const[showTransactions, setShowTransactions]=useState(false);
    const[showExpenses, setShowExpenses]=useState(false);

    const partyMembers = props.allMembersList.filter(el => el.partyId === partyId);


    function handleGoBack(props) {
        history.push("/party");
    }
    const handleMembersClick=()=>{
        setShowMembers(true);
        setShowTransactions(false);
        setShowExpenses(false);
    }
    const handleTransactionsClick=()=>{
        setShowMembers(false);
        setShowTransactions(true);
        setShowExpenses(false);
    }

    const handleExpensesClick=()=>{
        setShowMembers(false);
        setShowTransactions(false);
        setShowExpenses(true);
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-body card-header">
                    <h5 className="card-title">{party.partyName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{party.partyDate}</h6>
                    <p className="card-text">{party.description}</p>
                    <button className="btn btn-link shadow-none" onClick={handleMembersClick}>Members</button>
                    {partyMembers.length>0 &&<button className="btn btn-link shadow-none" onClick={handleTransactionsClick}>Transactions</button>}
                    <button className="btn btn-link shadow-none" onClick={handleExpensesClick}>Expense Items</button>
                    <button className="btn btn-link shadow-none" onClick={handleGoBack}>Home</button>
                </div>
            </div>

            {showMembers &&   <MembersList partyId={party._id}/>}
            {showTransactions &&   <TransactionsList partyId={party._id}/>}
            {showExpenses &&   <ExpenseItemsList partyId={party._id}/>}
        </div>


    );
}
const mapStateToProps = (state) => ({
    allMembersList:state.members
})

export default connect(mapStateToProps)(PartyView);