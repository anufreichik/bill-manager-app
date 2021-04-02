import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {AiFillDollarCircle} from "react-icons/all";


function Header(props) {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                <nav className='navbar navbar-expand-sm navbar-light bg-light'>
                    <Link className="navbar-brand text-dark" to={`/landing`}><strong>Group<AiFillDollarCircle
                        color='red'/>Billz</strong>
                    </Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarLandingMenu"
                            aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div  className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}  id="navbarLandingMenu">
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
