import React from 'react';
import {Link, Route, Switch, Redirect, useHistory} from "react-router-dom";
import PartiesList from "../party/PartiesList";
import PartyView from "../party/PartyView";


function GeneralLayout(props) {
    let history = useHistory();

    if (! localStorage.getItem('user')) {
        //return <Redirect to="/login" />;
        history.push('/login');
    }

    return (
        <>
            <h5 className="bg-secondary text-white pt-3 pb-2">Group Bill Manager</h5>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-12">
                        <ul className="nav justify-content-start" >
                            <li className="nav-item"><Link className='nav-link' to="/party">Parties</Link></li>
                            <li className="nav-item"><Link className='nav-link' to="/settings">Settings</Link></li>
                        </ul>
                    </div>
                </div>

                    <Switch>
                        <Route path='/party' exact >
                            <PartiesList/>
                        </Route>
                        <Route path='/party/:partyId' >
                            <PartyView/>
                        </Route>
                        <Route path='/settings' exact >
                            <div>Settings Component be here</div>
                        </Route>

                    </Switch>



                    <div className="footer fixed-bottom mb-2 small d-flex justify-content-around">
                        footer
                    </div>

            </div>
        </>
    );
}

export default GeneralLayout;