import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import PartiesList from "./components/party/PartiesList";
import PartyView from "./components/party/PartyView";

function App() {
    return (

        <div>
            <h5 className="bg-secondary text-white pt-3 pb-2">Group Bill Manager</h5>
            <ul className="nav" >
                <li className="nav-item"><Link className='nav-link' to="/party">Parties</Link></li>
                <li className="nav-item"><Link className='nav-link' to="/settings">Settings</Link></li>
            </ul>

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

        </div>

    );
}

export default App;
