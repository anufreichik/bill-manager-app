import React from 'react';
import {connect} from "react-redux";
import {Button, IconButton} from "@material-ui/core";
import {DeleteOutline, EditOutlined} from "@material-ui/icons";
import {memberGetById} from "../../redux/memberActions";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MaterialTable from "material-table";


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
            <div className="mt-3 mb-2 text-center">
                <Button
                    disableElevation
                variant="contained"
                color="secondary"
                startIcon={<PersonAddIcon />}
                onClick={handleAddOnClick}>
                Add Member
            </Button>
            </div>


            <MaterialTable
                title="Members"

                columns={[
                    { title: 'Alias', field: 'memberName', filtering: false, render: rowData =>  <span className="badge badge-pill bg-primary text-white ">{rowData.memberName.slice(0,3).toUpperCase()}</span>  },
                    { title: 'Name', field: 'memberName' },
                    { title: 'Email', field: 'email' , render: rowData => <>{rowData.email?rowData.email:''}</>,},
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
                data={props.membersList}
                options={{
                    //filtering: true,
                    sorting: true,
                    search:true
                }}
            />


            {/*<ul className="list-group d-flex">*/}
            {/*    {props.membersList && props.membersList.map(el =>*/}
            {/*        <li key={el._id} className="list-group-item">*/}
            {/*            <div className="row">*/}

            {/*                <div className="col-1">*/}
            {/*                    <span className="badge badge-pill bg-secondary text-white ">{el.memberName[0].toUpperCase()}</span>*/}
            {/*                </div>*/}
            {/*                <div className="col-3">{el.memberName}</div>*/}
            {/*                <div className="col-3">{el.email?el.email:''}</div>*/}
            {/*                <div className="col-2 offset-3 d-flex justify-content-end">*/}
            {/*                    <IconButton aria-label="edit" onClick={() => handleEditOnClick(el._id)}>*/}
            {/*                        <EditOutlined color="action" fontSize="small"/>*/}
            {/*                    </IconButton>*/}

            {/*                    <IconButton aria-label="edit">*/}
            {/*                        <DeleteOutline color="secondary" fontSize="small"/>*/}
            {/*                    </IconButton>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </li>*/}
            {/*    )}*/}
            {/*</ul>*/}

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
