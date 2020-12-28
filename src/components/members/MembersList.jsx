import React from 'react';
import MemberForm from "./MemberForm";
import {connect} from "react-redux";
import {v4 as uuidv4} from "uuid";

function MembersList(props) {

    const addMember = ({name}) => {
        const newMember = {_id: uuidv4(), memberName: name, partyId:props.partyId}
        props.addMember(newMember);
    }

    return (
        <div >
            <h6>Members</h6>
            <ul className="list-group d-flex">
                {props.membersList && props.membersList.filter(elem=>elem.partyId===props.partyId).map(el =>
                    <li key={el._id} className="list-group-item">
                        <div className="row">
                            <div className="col-3">{el.memberName}</div>
                            <div className="col-1 offset-8">
                                <span className="badge badge-pill badge-dark ">{el.memberName[0].toUpperCase()}</span>
                            </div>
                        </div>
                    </li>
                )}
            </ul>

            <div className="mt-3 text-center">
                <MemberForm addMember={addMember}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    membersList: state.members
})
const mapDispatchToProps = (dispatch) => ({
    addMember:(newMember)=>dispatch({type:'ADD_MEMBER', payload: newMember})
})
export default connect(mapStateToProps, mapDispatchToProps)(MembersList);