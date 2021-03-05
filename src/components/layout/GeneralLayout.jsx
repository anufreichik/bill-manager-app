import React from 'react';
import {Link, Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import PartiesList from "../party/PartiesList";
import PartyView from "../party/PartyView";
import {connect} from "react-redux";
import CustomModal from "../utils/CustomModal";


function GeneralLayout(props) {
    let history = useHistory();
    let match = useRouteMatch();

    function handleLogOut(){
        history.push('/login');
        localStorage.clear();
        props.clearState();
    }

    return (
        <>
            <nav className='navbar navbar-expand flex-column flex-md-row  bg-nav-custom'>
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" >
                        <h2 className="pt-3 pb-2 navbar-brand title-custom"  >Group Bill Manager</h2>
                        <div className='container-fluid d-flex justify-content-between'>
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link className='nav-link' to={`${match.path}/party`}>My Parties</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link' to={`${match.path}/settings`}>Settings</Link>
                                </li>
                            </ul>

                        <ul className="nav">
                        <li className="nav-item pr-2"><small>Logged in as: {props.user?props.user[0].email:''}</small></li>
                        <li className="nav-item"><button className='btn btn-link p-0' onClick={handleLogOut}>Log Out</button></li>
                        </ul>

                        </div>
                    </div>
                </div>

            </nav>
            <CustomModal />
            <div className="container-fluid">

                    <Switch>
                        <Route path={`${match.path}/party`}  exact >
                            <PartiesList/>
                        </Route>
                        <Route path={`${match.path}/party/:partyId`}  >
                            <PartyView/>
                        </Route>
                        <Route path={`${match.path}/settings`} exact >
                            <div>Settings Component be here</div>
                        </Route>

                    </Switch>

                    <footer className="footer fixed-bottom mb-2 small d-flex justify-content-around">
                        footer
                    </footer>

            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.authReducer.isLoggedIn,
    user: state.authReducer.user
})
const mapDispatchToProps = (dispatch) => ({
    clearState:()=>dispatch({type:'LOGOUT'})
})
export default connect(mapStateToProps, mapDispatchToProps)(GeneralLayout);
