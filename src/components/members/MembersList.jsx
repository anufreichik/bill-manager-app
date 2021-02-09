import React, {useEffect} from 'react';
import MemberForm from "./MemberForm";
import {connect} from "react-redux";
import {addMember, getMembers} from "../../redux/memberActions";

function MembersList(props) {

    const addMember = ({name}) => {
        const newMember = { memberName: name, partyId:props.partyId}
        props.addMember(newMember);
    }
    useEffect(
        () => {
           //props.getMembers(props.partyId);
        }, []
    )
    return (
        <div >
            <h6 className='text-muted mt-3'>Members</h6>
            <ul className="list-group d-flex">
                {props.membersList && props.membersList.map(el =>
                    <li key={el._id} className="list-group-item">
                        <div className="row">
                            <div className="col-3">{el.memberName}</div>
                            <div className="col-1 offset-8">
                                <span className="badge badge-pill bg-secondary text-white ">{el.memberName[0].toUpperCase()}</span>
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
    membersList: state.memberReducer.members
})
const mapDispatchToProps = (dispatch) => ({
    //addMember:(newMember)=>dispatch({type:'ADD_MEMBER', payload: newMember})
    //getMembers: (partyId) => dispatch(getMembers(partyId)),
    addMember:(newMember)=> dispatch(addMember(newMember)),
})
export default connect(mapStateToProps, mapDispatchToProps)(MembersList);
