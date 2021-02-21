import React from 'react';
import {connect} from "react-redux";
import {Button, IconButton} from "@material-ui/core";
import {DeleteOutline, EditOutlined} from "@material-ui/icons";
import {memberGetById} from "../../redux/memberActions";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

function MembersList(props) {

    function handleEditOnClick(id) {
        props.memberGetById(id);
        props.open({
            title: 'Edit Member',
            component: 'EditMember',
            width: '200',
        });
    }

    function handleAddOnClick(){

        props.open({
            title: 'Add Member',
            component: 'AddMember',
            width: '200',
        });
    }

    return (
        <div>
            <div className="mt-3 mb-2 text-right">
                <Button
                variant="contained"
                color="primary"
                startIcon={<PersonAddIcon />}
                onClick={handleAddOnClick}>
                New Member
            </Button>
            </div>
            <ul className="list-group d-flex">
                {props.membersList && props.membersList.map(el =>
                    <li key={el._id} className="list-group-item">
                        <div className="row">

                            <div className="col-1">
                                <span className="badge badge-pill bg-secondary text-white ">{el.memberName[0].toUpperCase()}</span>
                            </div>
                            <div className="col-3">{el.memberName}</div>
                            <div className="col-2 offset-6 d-flex justify-content-end">
                                <IconButton aria-label="edit" onClick={() => handleEditOnClick(el._id)}>
                                    <EditOutlined color="action" fontSize="small"/>
                                </IconButton>

                                <IconButton aria-label="edit">
                                    <DeleteOutline color="secondary" fontSize="small"/>
                                </IconButton>
                            </div>
                        </div>
                    </li>
                )}
            </ul>

        </div>
    );
}

const mapStateToProps = (state) => ({
    membersList: state.memberReducer.members
})
const mapDispatchToProps = (dispatch) => ({
    memberGetById: (memberId) => dispatch(memberGetById(memberId)),
    open: (payload) => dispatch({type: 'MODAL_OPEN', payload}),
})
export default connect(mapStateToProps, mapDispatchToProps)(MembersList);
