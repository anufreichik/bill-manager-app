import React from 'react';
import MemberForm from "./MemberForm";
import {addMember} from "../../redux/memberActions";
import {connect} from "react-redux";

function MemberFormWrapperAdd(props) {

    const onFinish = (values) => {
        const newMember = { memberName: values.name, party: props.partyInfo._id}
        props.addMember(newMember);

    }
    return (
            <MemberForm onFinish={onFinish}
                        onClose={props.close}
                        submitButtonText='Create'/>
    );
}

const mapStateToProps = (state) => ({
    partyInfo: state.partyReducer.partyInfo,
})
const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch({type:'MODAL_CLOSE'}),
    addMember:(newMember)=> dispatch(addMember(newMember)),
})
export default connect(mapStateToProps, mapDispatchToProps)(MemberFormWrapperAdd);
