import React, {useEffect} from 'react';
import {Link, useHistory, useRouteMatch} from "react-router-dom";
import {connect} from "react-redux";
import { getParties, partyGetById} from "../../redux/partyActions";
import moment from 'moment';
import {Button, IconButton} from "@material-ui/core";
import {DeleteOutline, EditOutlined, GroupAdd} from "@material-ui/icons";
import MaterialTable from "material-table";

function PartiesList(props) {
    //let history = useHistory();
    let match = useRouteMatch();

    useEffect(
        () => {
           props.getParties();
        }, []
    )
    function handleEditOnClick(id) {
        props.partyGetById(id);

        props.open({
            title: 'Edit Party',
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
            <div className="mt-3 mb-2 text-center">
                <Button disableElevation
                    variant="contained"
                    color="secondary"
                    startIcon={<GroupAdd />}
                    onClick={handleAddOnClick}>
                    Create New Party
                </Button>

            </div>


            <MaterialTable
                title="My Parties"

                columns={[
                    { title: 'Party', field: 'partyName', render: rowData =>  <Link to={{pathname: `${match.path}/${rowData._id}`, state: {party: rowData}}}>{rowData.partyName}</Link> },
                    { title: 'Party Date', field: 'partyDate', render: rowData => <>{moment(rowData.partyDate).format('MM-DD-YYYY')}</> },
                    { title: 'Members', field: '_id' , render: rowData =><span className="badge bg-secondary rounded-circle text-white ml-1">{0}</span>},
                    {
                        field: '_id',
                        title: '',
                        filtering: false,
                        sorting: false,
                        cellStyle: {
                            textAlign: "right"
                        },
                        render: rowData => {
                            return (<>
                                <IconButton aria-label="edit" onClick={() => handleEditOnClick(rowData._id)}>
                                    <EditOutlined color="action" fontSize="small"/>
                                </IconButton>

                                <IconButton aria-label="edit">
                                    <DeleteOutline color="secondary" fontSize="small"/>
                                </IconButton>
                            </>)
                        }
                    }
                ]}
                data={props.partiesList}
                options={{
                    //filtering: true,
                    sorting: true,
                    search:true
                }}
            />
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
