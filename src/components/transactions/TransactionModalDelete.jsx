import React from 'react';
import {connect} from "react-redux";
import {deleteTransactionById} from "../../redux/transactionActions";
import {Button} from "react-bootstrap";

function TransactionModalDelete(props) {
    function handleOK(){
            props.deleteTransactionById(props.data._id, props.data.partyId);
            props.close();
    }
    return (
        <div>
            <span>Do you really want to delete this transaction? All associated debts will be deleted as well.</span>
            <div className="mt-2">
                {/*<button className="btn btn-primary" onClick={handleOK}>OK</button>*/}
                {/*<button onClick={()=>props.close()}>Cancel</button>*/}
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
    deleteTransactionById:(transactionId, partyId)=>dispatch(deleteTransactionById(transactionId, partyId)),
})
export default connect(mapStateToProps, mapDispatchToProps)(TransactionModalDelete);
