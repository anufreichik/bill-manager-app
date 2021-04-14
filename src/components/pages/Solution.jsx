import React from 'react';
import './landingpages.css';
import Header from "./Header";
import Footer from "./Footer";

function Solution(props) {
    return (
        <>
            <Header/>
            <main >
                <div className='container' >
                    <div className='row d-flex justify-content-center'>
                        <div className='text-32 md:text-50 lg:text-74 font-bold text-center'>
                            Passionate about helping customers <br/>manage bills after party
                        </div>
                        <h4 className='mt-5 text-center'>
                            Built with the speed and breadth to empower marketers to harness their creativity, our customer engagement platform delivers relevant, cross-channel experiences at scale.
                        </h4>
                    </div>
                </div>

            </main>

        </>
    );
}

export default Solution;
