import React, {useEffect, useState} from 'react';
import PartyForm from "./PartyForm";
import {Link, Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import {connect} from "react-redux";
import {addParty, getParties} from "../../redux/partyActions";
import moment from 'moment';

function PartiesList(props) {
    let history = useHistory();
    let match = useRouteMatch();
    const addParty = ({name, startDate, description}) => {
        const newParty = {partyName: name, partyDate: startDate, description: description}
        props.addParty(newParty);
    }

    useEffect(
        () => {
           props.getParties();
        }, []
    )

    return (

        <div className="container">
            <h5 className='mt-3' >My Parties</h5>
            <ul className="list-group d-flex">
                {props.partiesList.map(el =>
                    <li key={Math.random()} className="list-group-item">
                        <div className="row">
                            <div className="col-3"><Link
                                to={{pathname: `${match.path}/${el._id}`, state: {party: el}}}>{el.partyName}</Link></div>
                            <div className="col-2"> {moment(el.partyDate).format('MM-DD-YYYY')}</div>
                            <div className="col-1 offset-6"><span
                                className="badge bg-secondary rounded-circle text-white ml-1">{0}</span></div>

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
    partiesList: state.partyReducer.parties,
})
const mapDispatchToProps = (dispatch) => ({
    getParties: () => dispatch(getParties()),
    //addParty:(newParty)=>dispatch({type:'ADD_PARTY', payload: newParty}),
    addParty: (newParty) => dispatch(addParty(newParty))
})
export default connect(mapStateToProps, mapDispatchToProps)(PartiesList);
