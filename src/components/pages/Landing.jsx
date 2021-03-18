import React from 'react';
import Header from "./Header";
import landingImage from './landing.png';
import Footer from "./Footer";


function Landing(props) {

    return (
        <>
            <Header/>
            <main >
                <div className='container' >
                    <div className='row'>
                        <div className='col-6'>
                            <h4 className='mt-5'>Party...Bills...Manage...Party</h4>
                            <h1 className='mt-5 text-32 md:text-50 lg:text-74 font-bold text-center'>No pain managing
                                party
                                bills ever</h1>
                        </div>
                        <div className='col-6'>
                            <div className='mt-5'><img src={landingImage} height='90%' width='90%'/></div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-4'>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">John Party</h5>
                                    <p className="card-text">"Me and Co-workers went dining. Foot was great. Bill was
                                        event
                                        greater. Denis paid, but we split it all. Thanks to Bill Manager!" </p>
                                    <a href="#" className="card-link">Learn More >></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='mt-5'>&nbsp;</div>
                            <div className="card mt-5">
                                <div className="card-body">
                                    <h5 className="card-title">Leon Bills</h5>
                                    <p className="card-text">"Went to Vegas, parties all night, used bill manager to
                                        split
                                        bills after. Easy and fair. Food, gas, you name it."</p>
                                    <a href="#" className="card-link">Learn More >></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className="card mt-3">
                                <div className="card-body">
                                    <h5 className="card-title">My Story</h5>
                                    <p className="card-text">"Girl trips, sharing hotels, dining was always fun! Split
                                        bills
                                        never fun. I created this app to never have to fill spreadsheets. Everything
                                        should
                                        be easy in life."</p>
                                    <a href="#" className="card-link">Learn More >></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Landing;
