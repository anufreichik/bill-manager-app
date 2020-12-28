import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import PartyForm from "./PartyForm";
import {Link, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";


function PartiesList(props) {

    const addParty = ({name, startDate, description}) => {
        const newParty = {id: uuidv4(), partyName: name, partyDate: startDate, description: description}
        props.addParty(newParty);
    }

    return (

        <div className="container">
            <h5>My Parties</h5>
            <ul className="list-group d-flex">
                {props.partiesList.map(el =>
                    <li key={Math.random()} className="list-group-item">
                        <div className="row">
                            <div className="col-3"><Link
                                to={{pathname: `/party/${el._id}`, state: {party: el}}}>{el.partyName}</Link></div>
                            <div className="col-2"> {el.partyDate}</div>
                            <div className="col-1 offset-6"><span
                                className="badge bg-secondary rounded-circle text-white ml-1">{props.membersList.filter(m=>m.partyId===el._id).length}</span></div>

                        </div>

                    </li>
                )}

            </ul>

            <div className="mt-3 text-center">
                <PartyForm addParty={addParty}/>
            </div>


        </div>
    );
}
const mapStateToProps = (state) => ({
    partiesList: state.parties,
    membersList:state.members
})
const mapDispatchToProps = (dispatch) => ({
    addParty:(newParty)=>dispatch({type:'ADD_PARTY', payload: newParty})
})
export default connect(mapStateToProps, mapDispatchToProps)(PartiesList);