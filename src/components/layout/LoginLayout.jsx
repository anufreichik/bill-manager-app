import React from 'react';
import UserLogin from "../user/UserLogin";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import UserRegister from "../user/UserRegister";

function LoginLayout(props) {
    let match = useRouteMatch();
    return (
        <>
            <h5 className="bg-secondary text-white pt-3 pb-2">Group Bill Manager</h5>
            <div className="container-fluid">
                <div className="row">

                        <Switch>
                            <Route path={`${match.path}/register`}  exact >
                                <UserRegister/>
                            </Route>
                            <Route path={`${match.path}/`} exact >
                                <UserLogin/>
                            </Route>
                        </Switch>

                </div>
                <div className="footer fixed-bottom mb-2 small d-flex justify-content-around">
                    footer
                </div>
            </div>
        </>
    );
}

export default LoginLayout;
