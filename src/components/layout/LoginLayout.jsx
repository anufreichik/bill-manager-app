import React from 'react';
import UserLogin from "../user/UserLogin";

function LoginLayout(props) {
    return (
        <>
            <h5 className="bg-secondary text-white pt-3 pb-2">Group Bill Manager</h5>
            <div className="container-fluid">
                <div className="row">
                    <UserLogin/>
                </div>
                <div className="mt-auto mb-15rem small container d-flex justify-content-around">
                    footer
                </div>
            </div>
        </>
    );
}

export default LoginLayout;