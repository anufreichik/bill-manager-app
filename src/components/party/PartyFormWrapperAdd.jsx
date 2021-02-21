import React from 'react';
import {connect} from "react-redux";
import PartyForm from "./PartyForm";
import {addParty} from "../../redux/partyActions";

function PartyFormWrapperAdd(props) {

    const onFinish = (values) => {
        const newParty = {partyName: values.name, partyDate: values.startDate, description: values.description}
        props.addParty(newParty);

    }
    return (
        <PartyForm onFinish={onFinish}
                    onClose={props.close}
                    submitButtonText='Create'/>

    );
}

const mapStateToProps = (state) => ({
   // CustomModal: state.modalReducer.CustomModal,
})
const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch({type:'MODAL_CLOSE'}),
    addParty: (newParty) => dispatch(addParty(newParty))
})
export default connect(mapStateToProps, mapDispatchToProps)(PartyFormWrapperAdd);
