import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Redirect, Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import LoginLayout from "./components/layout/LoginLayout";
import GeneralLayout from "./components/layout/GeneralLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";



function App() {
    return (
        <div>
            <Switch>
                <Route path="/login">
                    <LoginLayout/>
                </Route>

                <ProtectedRoute path="/dashboard"  >
                    <GeneralLayout/>
                </ProtectedRoute>

                <Route exact path="/">
                    <Redirect exact from="/" to="dashboard" />
                </Route>

                <Route path="*">
                    <Redirect exact from="/" to="dashboard" />
                </Route>

            </Switch>
        </div>

    );
}
export default App;
