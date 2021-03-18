import React, {useState} from 'react';
import {connect} from "react-redux";
import {Link, useHistory, useRouteMatch} from "react-router-dom";
import {userLogin} from "../../redux/userActions";
function UserLogin(props) {

    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleCreateAccountClick(){
        history.push(`./login/register`);
    }

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const userData = {email: email, password: password}
        props.userLogin(userData, history);
    }

    return (
        <div className="container signin-container">
            <div className="row">
                <div className="col"></div>
                <div className="col-sm-12 col-md-7">

                    <div className="card">
                        <div className="card-block">

                            <form onSubmit={handleSubmit} className="sigin-form mt-3">
                                <h3 >Login</h3>
                                <div className="form-group">
                                    <input type="email" className="form-control" id="emailInput" placeholder="Email"
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="passwordInput"
                                           placeholder="Password"
                                           value={password}
                                           onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                                <button className="btn signin-btn btn-primary" type="submit" disabled={!validateForm()}>Login
                                </button>


                            </form>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        {/*<Link className='nav-link' to={`./login/register`}>Create New Account Link</Link>*/}
                        <button  className="btn btn-link create-new-account" onClick={handleCreateAccountClick}>Create New Account</button>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
    userLogin: (user, history) => dispatch(userLogin(user, history))
})
export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
