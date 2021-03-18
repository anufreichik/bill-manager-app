import React from 'react';
import {Link} from "react-router-dom";
import {Money} from "@material-ui/icons";
import {AiFillDollarCircle} from "react-icons/all";


function Header(props) {

    return (
        <header className='container'>
            <div className='row'>
                <nav className='navbar navbar-expand'>
                    <Link className="navbar-brand text-dark" to={`/landing`}><strong>Party<AiFillDollarCircle
                        color='red'/>Manager</strong>
                    </Link>
                    <div>
                        <ul className="navbar-nav mr-auto text-dark mt-1">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Solution</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">About Me</a>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to={`/login`}>Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='btn btn-danger rounded-pill btn-lg' to={`/login/register`}>Try
                                    Free</Link>
                            </li>

                        </ul>
                    </div>
                </nav>


            </div>


        </header>
    );
}

export default Header;
