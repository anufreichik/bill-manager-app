import React, {useEffect} from 'react';
import MemberForm from "./MemberForm";
import {memberGetById, updateMemberById} from "../../redux/memberActions";
import {connect} from "react-redux";

function MemberFormWrapperEdit(props) {

    const onFinish = (member) => {
        props.memberUpdateById(member);
    };
    return (

            <MemberForm onFinish={onFinish}
                        submitButtonText='Update'
                        onClose={props.close}
                        initialValues={props.memberInfo}/>

    );
}

const mapStateToProps = (state) => ({
    memberInfo: state.memberReducer.memberInfo,
    CustomModal: state.modalReducer.CustomModal,
})
const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch({type:'MODAL_CLOSE'}),
    memberUpdateById:(member)=> dispatch(updateMemberById(member)),
})
export default connect(mapStateToProps, mapDispatchToProps)(MemberFormWrapperEdit);
