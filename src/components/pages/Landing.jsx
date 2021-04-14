import React from 'react';
import './landingpages.css';
import Header from "./Header";
import landingImage from './landing.png';
import Footer from "./Footer";


function Landing(props) {

    return (
        <>
            <Header/>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 col-md-6'>

                            <h1 className='mt-5 text-32 md:text-50 lg:text-74 font-bold text-center'>No pain managing
                                party
                                bills ever</h1>
                        </div>
                        <div className='col-sm-12 col-md-6'>
                            <div className='mt-5'><img src={landingImage} className='border-rounded'  width='100%'/></div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-sm-12 col-md-4 landing-card'>
                            <div className="card m-1">
                                <div className="card-body">
                                    <h5 className="card-title">John Party</h5>
                                    <p className="card-text">"Me and Co-workers went dining. Foot was great. Bill was
                                        event
                                        greater. Denis paid, but we split it all. Thanks to Bill Manager!" </p>
                                    <a href="#" className="card-link">Learn More >></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-12 landing-card'>
                            <div className="card  m-1">
                                <div className="card-body">
                                    <h5 className="card-title">Leon Bills</h5>
                                    <p className="card-text">"Went to Vegas, parties all night, used bill manager to
                                        split
                                        bills after. Easy and fair. Food, gas, you name it."</p>
                                    <a href="#" className="card-link">Learn More >></a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-sm-12 landing-card'>
                            <div className="card  m-1">
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


        </>
    );
}

export default Landing;
