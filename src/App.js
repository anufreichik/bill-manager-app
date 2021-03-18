import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Redirect, Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import LoginLayout from "./components/layout/LoginLayout";
import GeneralLayout from "./components/layout/GeneralLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import Landing from "./components/pages/Landing";



function App() {
    return (
        <div>
            <Switch>
                <Route path="/landing">
                    <Landing/>
                </Route>
                <Route path="/login">
                    <LoginLayout/>
                </Route>

                <ProtectedRoute path="/dashboard"  >
                    <GeneralLayout/>
                </ProtectedRoute>

                <Route exact path="/">
                    <Redirect exact from="/" to="landing" />
                </Route>

                <Route path="*">
                    <Redirect exact from="/" to="landing" />
                </Route>

            </Switch>
        </div>

    );
}
export default App;
