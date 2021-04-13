import React, {useState} from 'react';
import {userCreate} from "../../redux/userActions";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";

function UserRegister(props) {
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0 && password===passwordRepeat;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const userData = {email: email, password: password}
        props.userRegister(userData, history);

    }
    function handleCancel(){
        history.push('/')
    }

    return (
        <div className='container signin-container'>
            <div className="row">
                <div className="col"></div>
                <div className="col-sm-12 col-md-7">
                    <div className="card">
                        <div className="card-block">

                            <form onSubmit={handleSubmit} className="sigin-form mt-3">
                                <h4 className='text-muted'>Create Account</h4>
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
                                <div className="form-group">
                                    <input type="password" className="form-control" id="passwordRepeatInput"
                                           placeholder="Repeat Password"
                                           value={passwordRepeat}
                                           onChange={(e) => setPasswordRepeat(e.target.value)}/>
                                </div>
                                <div className='mb-3 float-right'>
                                    <button className="btn btn-primary mr-2" type="submit" disabled={!validateForm()}>Register</button>
                                    <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
    userRegister: (user, history) => dispatch(userCreate(user, history))
})
export default connect(mapStateToProps, mapDispatchToProps)(UserRegister);

