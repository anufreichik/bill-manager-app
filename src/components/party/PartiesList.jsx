import React, {useEffect} from 'react';
import {Link,  useRouteMatch} from "react-router-dom";
import {connect} from "react-redux";
import { getParties, partyGetById} from "../../redux/partyActions";
import moment from 'moment';
import {Button, IconButton} from "@material-ui/core";
import {DeleteOutline, EditOutlined, GroupAdd} from "@material-ui/icons";
import MaterialTable from "material-table";

function PartiesList(props) {
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

    function clearPartyState(){
        props.clearPartyState();
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
                    { title: 'Party', field: 'partyName', render: rowData =>  <Link onClick={clearPartyState} to={{pathname: `${match.path}/${rowData._id}`, state: {party: rowData}}}>{rowData.partyName}</Link> },
                    { title: 'Party Date', field: 'partyDate', render: rowData => <>{moment(rowData.partyDate).format('MM-DD-YYYY')}</> },
                    { title: 'Members', field: 'numMembers' , render: rowData =><h4><span className="badge bg-primary rounded-circle text-white ml-1">{rowData.numMembers}</span></h4>},
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
                    paging:true,
                    emptyRowsWhenPaging: false,   //to make page size fix in case of less data rows
                    pageSizeOptions:[10,20],    // rows selection options
                    pageSize:10,
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
    clearPartyState: () => dispatch({type: 'PARTY_CLEAR'}),
    //addParty:(newParty)=>dispatch({type:'ADD_PARTY', payload: newParty}),

})
export default connect(mapStateToProps, mapDispatchToProps)(PartiesList);
