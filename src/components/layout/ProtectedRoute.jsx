import React from "react";
import { Route, Redirect } from "react-router-dom";
import {connect} from "react-redux";

function ProtectedRoute({ children,    ...rest }) {

    return (
        <Route {...rest}
               render={({location}) =>
                     localStorage.getItem('user')  &&  {...rest}.isLoggedIn ? (
                       children
                       ) :
                        (
                           <Redirect
                               to={{
                                   pathname: "/login",
                                   state: { from: location }
                               }}
                           />
                        )

               }
        />
    );
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.authReducer.isLoggedIn,
    user: state.authReducer.user
})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
