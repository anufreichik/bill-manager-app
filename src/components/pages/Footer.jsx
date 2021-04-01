import React from 'react';
import {GitHub, Instagram, LinkedIn} from "@material-ui/icons";

function Footer() {
    return (

            <footer className='mt-auto'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-sm-12 col-md-4 col-lg-3 d-flex flex-column">
                            <div>Party Bill Manager</div>
                            <div>Terms Of Service</div>
                            <div>Privacy Policy</div>
                            <div>
                                <div className='d-flex justify-content-start mt-3  mb-3'>
                                    <a href='#' className='mr-2'><LinkedIn/></a>
                                    <a href='#' className='mr-2'><GitHub/></a>
                                    <a href='#' className='mr-2'><Instagram/></a>
                                </div>
                            </div>
                            <div>
                                © 2021 Party Bill Manager.<br/>
                                All Rights Reserved.
                            </div>

                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-3 d-flex flex-column">
                            <div className='row'>
                                <div className='col-sm-12 col-6'>About</div>
                                <div className='col-sm-12 col-6'>Blog</div>
                                <div className='col-sm-12 col-6'>Contact</div>
                                <div className='col-sm-12 col-6'>Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

    );
}

export default Footer;
