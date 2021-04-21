import React, {useEffect, useState} from 'react';
import {getDebtsSummary} from "../../redux/debtActions";
import {connect} from "react-redux";
import MaterialTable from "material-table";
import {ArrowForward,  TransferWithinAStation} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

function DebtsListSummary({debtsList, getDebtsSum, partyId,open}) {

    const [debts, setDebts]=useState([]);


    function handlePayDebt(idFrom, idTo){
        open({
            title: 'Pay Debt',
            component: 'PayDebtConfirmation',
            width: '200',
            data:{idFrom, idTo, partyId:partyId}
        });
    }


    useEffect(()=>{
        getDebtsSum(partyId);
    },[])

    useEffect( () => {
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

    }, [debtsList])

console.log(debts, 'here my debts')
    return (
        <div>
            <MaterialTable
                title="Debts Summary"
                columns={[

                    {title: 'Debt From', field: 'memberFrom[0].memberName'},
                    {title: '', field: '', filtering: false, sorting: false, render: rowData => <ArrowForward/>,},
                    {title: 'Debt To', field: 'memberTo[0].memberName'},
                    {title: 'Debt Amount', field: 'debtSum', render: rowData => <>${rowData.debtSum.toFixed(2)}</>,},

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

                                <IconButton aria-label="edit">
                                    <TransferWithinAStation color="secondary" fontSize="small" onClick={()=>handlePayDebt(rowData.memberFrom[0]._id, rowData.memberTo[0]._id)}/>
                                </IconButton>
                            </>)
                        }
                    }


                ]}
                data={debts}
                options={{
                    //filtering: true,
                    paging:true,
                    emptyRowsWhenPaging: false,   //to make page size fix in case of less data rows
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
    open: (payload) => dispatch({type: 'MODAL_OPEN', payload}),
})
export default connect(mapStateToProps, mapDispatchToProps)(DebtsListSummary);
