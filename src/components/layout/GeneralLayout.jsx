import React from 'react';
import {Link, Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import PartiesList from "../party/PartiesList";
import PartyView from "../party/PartyView";
import {connect} from "react-redux";
import CustomModal from "../utils/CustomModal";
import {AiFillDollarCircle} from "react-icons/all";
import Footer from "../pages/Footer";


function GeneralLayout(props) {
    let history = useHistory();
    let match = useRouteMatch();

    function handleLogOut() {
        history.push('/login');
        localStorage.clear();
        props.clearState();
    }

    return (
        <>
            <header className='container'>
                <div className='row'>
                    <div className='col-12'>
                    <nav className='navbar navbar-expand'>
                        <Link className="navbar-brand text-dark" to={`/landing`}><strong>Group<AiFillDollarCircle
                            color='red'/>Billz</strong>
                        </Link>

                        <div className="collapse navbar-collapse">

                            <ul className="navbar-nav  text-dark mt-1 mr-auto">
                                <li className="nav-item">
                                    <Link className='nav-link text-dark' to={`${match.path}/party`}>My Parties</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className='nav-link text-dark' to={`${match.path}/settings`}>Settings</Link>
                                </li>

                            </ul>


                            <ul className="navbar-nav  text-dark mt-1">
                                <li className="nav-item">
                                    <div className='text-muted'>Logged in
                                        as: {props.user ? props.user[0].email : ''}</div>
                                </li>

                                <li className="nav-item">
                                    <button className='btn btn-link p-0' onClick={handleLogOut}>Log Out</button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    </div>
                </div>
            </header>
            <CustomModal/>
                <div className="container">
                    <Switch>
                        <Route path={`${match.path}/party`} exact>
                            <PartiesList/>
                        </Route>
                        <Route path={`${match.path}/party/:partyId`}>
                            <PartyView/>
                        </Route>
                        <Route path={`${match.path}/settings`}>
                            <div>Settings Component be here</div>
                        </Route>
                    </Switch>
                </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.authReducer.isLoggedIn,
    user: state.authReducer.user
})
const mapDispatchToProps = (dispatch) => ({
    clearState: () => dispatch({type: 'LOGOUT'})
})
export default connect(mapStateToProps, mapDispatchToProps)(GeneralLayout);
