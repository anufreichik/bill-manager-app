import React, {useEffect} from 'react';
import { getDebtsSummary} from "../../redux/debtActions";
import {connect} from "react-redux";
import MaterialTable from "material-table";
import {ArrowForward} from "@material-ui/icons";

function DebtsListSummary(props) {

    useEffect( ()=>{
        props.getDebtsSum(props.partyId);
    },[props.partyId])

    return (
        <div>
            <MaterialTable
                title="Debts Summary"
                columns={[

                    { title: 'Debt From', field: 'memberFrom[0].memberName' },
                    { title: '', field: '' , filtering: false, sorting:false, render: rowData =><ArrowForward/>,},
                    { title: 'Debt To', field: 'memberTo[0].memberName' },
                    { title: 'Debt Amount', field: 'debtSum' , render: rowData => <>${rowData.debtSum.toFixed(2)}</>,},

                ]}
                data={props.debtsList}
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
    debtsList: state.debtReducer.debtsSum,
})
const mapDispatchToProps = (dispatch) => ({
    getDebtsSum:(partyId) => dispatch(getDebtsSummary(partyId)),
})
export default connect(mapStateToProps, mapDispatchToProps)(DebtsListSummary);
