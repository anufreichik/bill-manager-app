import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect, Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import LoginLayout from "./components/layout/LoginLayout";
import GeneralLayout from "./components/layout/GeneralLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import {connect} from "react-redux";


function App() {
    return (
        <div>
            <Switch>
                <Route path="/login" component={LoginLayout}/>

                <ProtectedRoute path="/dashboard"  >
                    <GeneralLayout/>
                </ProtectedRoute>

                <Route exact path="/">
                    <Redirect exact from="/" to="dashboard" />
                </Route>

                <Route path="*">
                    <Redirect exact from="/" to="dashboard" />
                </Route>

                {/*<Route path="/"  component={GeneralLayout}/>*/}
            </Switch>
        </div>

    );
}
export default App;
