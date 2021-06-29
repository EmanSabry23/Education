import React from 'react';
import '../styles/pageAbout.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function PageAbout() {
    return(
        <>
            <div className="pageAbout">
                <div className="container">
                    <h2>About Us</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box">
                                <img className="ab" src={"./images/2.png"}/>
                                <img className="be" src={"./images/2.png"}/>
                                <h3>Hover State Styling</h3>
                                <p>
                                    Using hover options, you can create stunning hover effects and transform 
                                    Divi modules into fun and interactive elements. Our hover option interface 
                                    is unique and amazingly easy to use. Every design setting in
                                    Divi that supports transitions can now be customized on hover with ease
                                </p>
                                <a>Learn More  <ArrowForwardIcon/></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={"./images/about.webp"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageAbout
