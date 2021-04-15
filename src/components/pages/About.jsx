import React from 'react';
import './landingpages.css';
import Header from "./Header";
import Footer from "./Footer";

function About() {
    return (
        <>
            <Header/>
            <main >
                <div className='container' >
                    <div className='row'>
                        <div className='text-32 md:text-50 lg:text-74 font-bold text-center mt-4'>
                            Passionate about building awesome applications <br/>
                        </div>
                        <h4 className='mt-5 text-muted text-center'>
                            I am a Software Engineer with many years of progressive experience. <br/>
                            My career has allowed me to actively contribute to full life cycle development of software and solutions for large-scale enterprise applications. <br/>
                            My work has centered around design, development, maintenance, and enhancement projects.<br/>
                        </h4>
                    </div>
                </div>
            </main>

        </>
    );
}

export default About;
