import React from 'react';
import {GitHub, Instagram, LinkedIn} from "@material-ui/icons";

function Footer() {
    return (
        <footer className="position-sticky">
            <div className='container'>
                <div className='row'>
                    <div className="col-12 d-flex  justify-content-between">
                            <div>Terms Of Service</div>
                            <div>Privacy Policy</div>
                            <div>About</div>
                            <div>Blog</div>
                            <div>Contact</div>
                            <div>Products</div>
                        <div>
                            <a href='#' className='mr-2'><LinkedIn/></a>
                            <a href='#' className='mr-2'><GitHub/></a>
                            <a href='#' className='mr-2'><Instagram/></a>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className='col-12 d-flex justify-content-center mt-1  mb-1'>
                        © 2021 Party Bill Manager.
                        All Rights Reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
