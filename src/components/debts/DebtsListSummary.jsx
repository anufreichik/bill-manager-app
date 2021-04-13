import React, {useEffect, useState} from 'react';
import {getDebtsSummary} from "../../redux/debtActions";
import {connect} from "react-redux";
import MaterialTable from "material-table";
import {ArrowForward} from "@material-ui/icons";

function DebtsListSummary({debtsList, getDebtsSum, partyId}) {

    const [debts, setDebts]=useState([])
    useEffect(async () => {
        await getDebtsSum(partyId);

        debtsList.forEach((el, i) => {
            let filtered = debtsList.filter(f => f.memberFrom[0]._id.toString() === el.memberTo[0]._id.toString() &&
                f.memberTo[0]._id.toString() === el.memberFrom[0]._id.toString());
            if (filtered.length && el.debtSum > filtered[0].debtSum) {
                debtsList[i] = {...el, debtSum: el.debtSum - filtered[0].debtSum}
                debtsList.splice(debtsList.indexOf(filtered[0]), 1)
            } else if (filtered.length && el.debtSum === filtered[0].debtSum) {
                debtsList.splice(debtsList.indexOf(filtered[0]), 1)
                debtsList.splice(i, 1)
            }
        })

        setDebts(debtsList)

    }, [])

    return (
        <div>
            <MaterialTable
                title="Debts Summary"
                columns={[

                    {title: 'Debt From', field: 'memberFrom[0].memberName'},
                    {title: '', field: '', filtering: false, sorting: false, render: rowData => <ArrowForward/>,},
                    {title: 'Debt To', field: 'memberTo[0].memberName'},
                    {title: 'Debt Amount', field: 'debtSum', render: rowData => <>${rowData.debtSum.toFixed(2)}</>,},

                ]}
                data={debts}
                options={{
                    //filtering: true,
                    paging:true,
                    emptyRowsWhenPaging: true,   //to make page size fix in case of less data rows
                    pageSizeOptions:[10,20,40],    // rows selection options
                    pageSize:10,
                    sorting: true,
                    search: true
                }}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    debtsList: state.debtReducer.debtsSum,
})
const mapDispatchToProps = (dispatch) => ({
    getDebtsSum: (partyId) => dispatch(getDebtsSummary(partyId)),
})
export default connect(mapStateToProps, mapDispatchToProps)(DebtsListSummary);
