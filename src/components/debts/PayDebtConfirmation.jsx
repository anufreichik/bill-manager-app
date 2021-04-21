import React from 'react';
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {payDebt} from "../../redux/debtActions";

function PayDebtConfirmation(props) {

    const handleOK=()=>{
        props.payDebt({
            debtFrom:props.data.idFrom,
            debtTo: props.data.idTo,
            partyId: props.data.partyId
        })
        props.close();
    }
    return (
        <div>
            <span>Do you want to confirm debt payment?</span>
            <div className="mt-2">
                <Button variant="primary" className="mr-2"  onClick={handleOK}>OK</Button>
                <Button variant="secondary" onClick={()=>props.close()}>Cancel</Button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    partyInfo: state.partyReducer.partyInfo,
})
const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch({type:'MODAL_CLOSE'}),
    payDebt:(data)=>dispatch(payDebt(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(PayDebtConfirmation);

