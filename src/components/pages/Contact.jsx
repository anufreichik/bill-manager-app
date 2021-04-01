import React from 'react';
import Header from "./Header";
import Footer from "./Footer";

function Contact(props) {
    return (
        <div>
            <Header/>
            <main >
                <div className='container' >
                    <div className='row d-flex justify-content-center'>
                        <h1>
                           contact@groupbillz.com
                        </h1>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Contact;