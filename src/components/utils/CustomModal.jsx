import React from 'react';
import {get} from 'lodash';
import MemberFormWrapperEdit from "../members/MemberFormWrapperEdit";
import MemberFormWrapperAdd from "../members/MemberFormWrapperAdd";
import {Modal} from "react-bootstrap";
import {connect} from "react-redux";
import PartyFormWrapperAdd from "../party/PartyFormWrapperAdd";
import PartyFormWrapperEdit from "../party/PartyFormWrapperEdit";
import TransactionFormWrapperAdd from "../transactions/TransactionFormWrapperAdd";
import TransactionFormWrapperEdit from "../transactions/TransactionFormWrapperEdit";
import ExpenseFormWrapperAdd from "../expenses/ExpenseFormWrapperAdd";
import ExpenseFormWrapperEdit from "../expenses/ExpenseFormWrapperEdit";
import TransactionModalDelete from "../transactions/TransactionModalDelete";
import PayDebtConfirmation from "../debts/PayDebtConfirmation";

const CustomModal = (props) => {

    const open = get(props, 'CustomModal.open', false);
    const component = get(props, 'CustomModal.component', '');
    const title = get(props, 'CustomModal.title', '');
    const data= get(props, 'CustomModal.data', {});

    const components = {
        EditMember: <MemberFormWrapperEdit/>,
        AddMember: <MemberFormWrapperAdd/>,
        EditParty: <PartyFormWrapperEdit/>,
        AddParty: <PartyFormWrapperAdd/>,
        AddTransaction:<TransactionFormWrapperAdd/>,
        EditTransaction:<TransactionFormWrapperEdit/>,
        AddExpense:<ExpenseFormWrapperAdd/>,
        EditExpense:<ExpenseFormWrapperEdit/>,
        DeleteTransaction:<TransactionModalDelete data={data}/>,
        PayDebtConfirmation:<PayDebtConfirmation data={data}/>
    }
    const onCloseModal = () => {
        props.close();
    };


    const content = components[component] || null;

    return (
        <Modal show={open} onHide={onCloseModal} >
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {content}
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    )
}
const mapStateToProps = (state) => ({
    CustomModal: state.modalReducer.CustomModal,
});

const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch({type: 'MODAL_CLOSE'})
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomModal);
