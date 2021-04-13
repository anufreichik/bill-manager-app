import React, {useEffect, useState} from 'react';
import {useLocation, useHistory} from "react-router-dom";
import MembersList from "../members/MembersList";
import TransactionsList from "../transactions/TransactionsList";
import ExpenseItemsList from "../expenses/ExpenseItemsList";
import {connect} from "react-redux";
import moment from 'moment';
import { getMembers} from "../../redux/memberActions";
import DebtsList from "../debts/DebtsList";
import DebtsListSummary from "../debts/DebtsListSummary";

function PartyView(props) {
    //let {partyId} = useParams();
    let history = useHistory();
    let data = useLocation();
    let party = data.state.party;
    //let match = useRouteMatch();

    const[showMembers, setShowMembers]=useState(true);
    const[showTransactions, setShowTransactions]=useState(false);
    const[showExpenses, setShowExpenses]=useState(false);
    const[showDebts, setShowDebts]=useState(false);
    const[showDebtsSummary, setShowDebtsSummary]=useState(false);

    const partyMembers = props.membersList;


    function handleGoBack(props) {
        history.push("/party");
    }
    const handleMembersClick=()=>{
        setShowMembers(true);
        setShowTransactions(false);
        setShowExpenses(false);
        setShowDebts(false);
        setShowDebtsSummary(false);
    }
    const handleTransactionsClick=()=>{
        setShowMembers(false);
        setShowTransactions(true);
        setShowExpenses(false);
        setShowDebts(false);
        setShowDebtsSummary(false);
    }

    const handleExpensesClick=()=>{
        setShowMembers(false);
        setShowTransactions(false);
        setShowExpenses(true);
        setShowDebts(false);
        setShowDebtsSummary(false);
    }
    const handleDebtsClick=()=>{
        setShowMembers(false);
        setShowTransactions(false);
        setShowExpenses(false);
        setShowDebts(true);
        setShowDebtsSummary(false);
    }
    const handleDebtsSummaryClick=()=>{
        setShowMembers(false);
        setShowTransactions(false);
        setShowExpenses(false);
        setShowDebts(false);
        setShowDebtsSummary(true);
    }


    useEffect(
        () => {
            props.getMembers(party._id);
            props.setPartyInfo(party)
        }, []
    )


    return (
        <div className="container mt-3">
            <div className="card border-light">
                <div className="card-body party_buttons">
                    <h3 className="card-title">{party.partyName}</h3>
                    <h6 className="card-subtitle mb-2 text-muted">{moment(party.partyDate).format('MM-DD-YYYY')}</h6>
                    <p className="card-text">{party.description}</p>
                    <button className="btn btn-link active shadow-none" onClick={handleMembersClick}>Members</button>
                    {partyMembers.length>0 &&<button className="btn btn-link shadow-none" onClick={handleTransactionsClick}>Transactions</button>}
                    <button className="btn btn-link shadow-none" onClick={handleExpensesClick}>Expense Items</button>
                    <button className="btn btn-link shadow-none" onClick={handleDebtsClick}>Debts Details</button>
                    <button className="btn btn-link shadow-none" onClick={handleDebtsSummaryClick}>Debts Summary</button>
                </div>
            </div>

            {showMembers &&   <MembersList partyId={party._id}/>}
            {showTransactions && <TransactionsList partyId={party._id}/>}
            {showExpenses &&   <ExpenseItemsList partyId={party._id}/>}
            {showDebts &&   <DebtsList partyId={party._id}/>}
            {showDebtsSummary &&   <DebtsListSummary partyId={party._id}/>}
        </div>


    );
}
const mapStateToProps = (state) => ({
    membersList:state.memberReducer.members
})
const mapDispatchToProps = (dispatch) => ({
    getMembers: (partyId) => dispatch(getMembers(partyId)),
    setPartyInfo:(payload)=>dispatch({type:'SET_PARTY_INFO', payload})
})
export default connect(mapStateToProps, mapDispatchToProps)(PartyView);
