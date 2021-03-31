import React from 'react';
import {Link} from "react-router-dom";
import {AiFillDollarCircle} from "react-icons/all";


function Header(props) {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                <nav className='navbar navbar-expand'>
                    <Link className="navbar-brand text-dark" to={`/landing`}><strong>Group<AiFillDollarCircle
                        color='red'/>Billz</strong>
                    </Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto text-dark mt-1">
                            <li className="nav-item">
                                <Link className='nav-link text-dark' to={`/solution`}>Solution</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link text-dark' to={`/about`}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link text-dark' to={`/contact`}>Contact</Link>
                            </li>


                        </ul>
                        <ul className="navbar-nav  text-dark mt-1">

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

            </div>


        </div>
    );
}

export default Header;
