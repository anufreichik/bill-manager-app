import React from 'react';
import {connect} from "react-redux";
import PartyForm from "./PartyForm";
import {updatePartyById} from "../../redux/partyActions";

function PartyFormWrapperEdit(props) {

    const onFinish = (party) => {
        const newParty = {...props.partyInfo, partyName: party.name, partyDate: party.startDate, description: party.description}
        props.partyUpdateById(newParty);

    }
    return (
        <PartyForm onFinish={onFinish}
                   onClose={props.close}
                   submitButtonText='Update'
                   initialValues={props.partyInfo}/>

    );
}

const mapStateToProps = (state) => ({
    partyInfo:state.partyReducer.partyInfo,
    // CustomModal: state.modalReducer.CustomModal,
})
const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch({type:'MODAL_CLOSE'}),
    partyUpdateById: (party) => dispatch(updatePartyById(party))
})
export default connect(mapStateToProps, mapDispatchToProps)(PartyFormWrapperEdit);
