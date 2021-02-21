import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getDebts} from "../../redux/debtActions";
import {ArrowForward, ArrowRightOutlined} from '@material-ui/icons';

function DebtsList(props) {
    useEffect(()=>{
        props.getDebts(props.partyId);
        console.log(props.debtsList)
    },[])

    return (
        <div >
            <h6 className='text-muted mt-3'>Debts</h6>
            <ul className="list-group d-flex">
                {props.debtsList && props.debtsList.map(el =>
                    <li key={el._id} className="list-group-item">
                        <div className="row">
                            <div className="col-2 ">{el.transaction.purpose}</div>
                            <div className="col-3 text-center">{el.member.memberName}</div>
                            <div className="col-1"><ArrowForward/> </div>
                            <div className="col-3 text-center">{el.debtToMember.memberName}</div>
                            <div className="col-2">${el.debtAmount.toFixed(2)}</div>
                            <div className="col-1">{el.paid?'paid':'no paid'}</div>
                        </div>
                    </li>
                )}
            </ul>


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

