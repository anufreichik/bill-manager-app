import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getDebts} from "../../redux/debtActions";
import {ArrowForward} from '@material-ui/icons';
import MaterialTable from "material-table";


function DebtsList(props) {

    useEffect(()=>{
        props.getDebts(props.partyId);
    },[props.partyId])

    return (
        <div >

            <MaterialTable
                title="Debts"
                columns={[
                    { title: 'Purpose', field: 'transaction.purpose' },
                    { title: 'Debt From', field: 'member.memberName' },
                    { title: '', field: '' , filtering: false, sorting:false, render: rowData =><ArrowForward/>,},
                    { title: 'Debt To', field: 'debtToMember.memberName' },
                    { title: 'Debt Amount', field: 'debtToMember.memberName' , render: rowData => <>${rowData.debtAmount.toFixed(2)}</>,},
                    { title: 'Paid', field: 'paid' , render: rowData => <>{rowData.paid?'paid':'not paid'}</>,},
                ]}
                data={props.debtsList}
                options={{
                    //filtering: true,
                    paging:true,
                    emptyRowsWhenPaging: true,   //to make page size fix in case of less data rows
                    pageSizeOptions:[10,20,40],    // rows selection options
                    pageSize:10,
                    sorting: true,
                    search:true
                }}
            />

        </div>
    );
}


const mapStateToProps = (state) => ({
    debtsList: state.debtReducer.debts
})
const mapDispatchToProps = (dispatch) => ({
    getDebts:(partyId) => dispatch(getDebts(partyId)),
})
export default connect(mapStateToProps, mapDispatchToProps)(DebtsList);

