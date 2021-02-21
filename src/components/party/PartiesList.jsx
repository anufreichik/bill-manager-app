import React, {useEffect, useState} from 'react';
import {Link, Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import {connect} from "react-redux";
import {addParty, getParties, partyGetById} from "../../redux/partyActions";
import moment from 'moment';
import {Button, IconButton} from "@material-ui/core";
import {DeleteOutline, EditOutlined, GroupAdd} from "@material-ui/icons";

function PartiesList(props) {
    let history = useHistory();
    let match = useRouteMatch();

    useEffect(
        () => {
           props.getParties();
        }, []
    )
    function handleEditOnClick(id) {
        props.partyGetById(id);

        props.open({
            title: 'Edit Member',
            component: 'EditParty',
            width: '200',
        });
    }

    function handleAddOnClick(){

        props.open({
            title: 'Add Party',
            component: 'AddParty',
            width: '200',
        });
    }

    return (

        <div className="container">
            <div className="mt-3 mb-2 text-right">
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<GroupAdd />}
                    onClick={handleAddOnClick}>
                    New Party
                </Button>

            </div>
            <ul className="list-group d-flex">
                {props.partiesList.map(el =>
                    <li key={Math.random()} className="list-group-item">
                        <div className="row">
                            <div className="col-3"><Link
                                to={{pathname: `${match.path}/${el._id}`, state: {party: el}}}>{el.partyName}</Link></div>
                            <div className="col-2"> {moment(el.partyDate).format('MM-DD-YYYY')}</div>
                            <div className="col-1 offset-4"><span
                                className="badge bg-secondary rounded-circle text-white ml-1">{0}</span></div>

                            <div className="col-2 d-flex justify-content-end">
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
    partiesList: state.partyReducer.parties,
})
const mapDispatchToProps = (dispatch) => ({
    getParties: () => dispatch(getParties()),
    partyGetById: (partyId) => dispatch(partyGetById(partyId)),
    open: (payload) => dispatch({type: 'MODAL_OPEN', payload}),
    //addParty:(newParty)=>dispatch({type:'ADD_PARTY', payload: newParty}),

})
export default connect(mapStateToProps, mapDispatchToProps)(PartiesList);
