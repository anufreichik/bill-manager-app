import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import LoginLayout from "./components/layout/LoginLayout";
import GeneralLayout from "./components/layout/GeneralLayout";


function App() {
    return (
        <div>
            <Switch>
                <Route path="/login" component={LoginLayout}/>
                <Route path="/"  component={GeneralLayout}/>
            </Switch>
        </div>

    );
}

export default App;
