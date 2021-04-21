import React from 'react';
import './landingpages.css';
import Header from "./Header";

function Solution(props) {
    return (
        <>
            <Header/>
            <main >
                <div className='container' >
                    <div className='row d-flex justify-content-center'>
                        <div className='text-32 md:text-50 lg:text-74 font-bold text-center'>
                           Helping customers <br/>manage group bills
                        </div>
                        <h4 className='mt-5 text-center text-muted'>
                            Built with the speed and breadth to empower marketers to harness their creativity, our customer engagement platform delivers relevant, cross-channel experiences at scale.
                        </h4>
                    </div>
                </div>

            </main>

        </>
    );
}

export default Solution;
