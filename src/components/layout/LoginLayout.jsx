import React from 'react';
import UserLogin from "../user/UserLogin";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import UserRegister from "../user/UserRegister";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

function LoginLayout(props) {
    let match = useRouteMatch();
    return (
        <>
           <Header/>
           <main>
            <div className="container">
                <div className="row">

                        <Switch>
                            <Route path={`${match.path}/register`}  exact >
                                <UserRegister/>
                            </Route>
                            <Route path={`${match.path}/`}  >
                                <UserLogin/>
                            </Route>
                        </Switch>

                </div>
                {/*<div className="footer fixed-bottom mb-2 small d-flex justify-content-around">*/}
                {/*    footer*/}
                {/*</div>*/}
            </div>
           </main>
        </>
    );
}

export default LoginLayout;
