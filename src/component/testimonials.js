import React, { Component } from 'react';
import WOW from 'wowjs';
import '../styles/testimonials.css';

class Testimonials extends Component{

    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    
    render() {
        return(
            <>
                <div className="testimonials">
                    <div className="container">
                        <h2>Our Testimonials</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="img-test wow slideInLeft" data-wow-duration="2s" data-wow-delay=".3s">
                                    <img src={"./images/testimonials.png"} />
                                    <span className="one">Mr. Urela</span>
                                    <span className="two">Age 32</span>
                                    <span className="three">Hr Company </span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="text-box wow slideInRight" data-wow-duration="1s" data-wow-delay=".3s">
                                    <h3>Mr. Urela</h3>
                                    <p>
                                    The automated process all your website tasks. Discover tools and 
                                    techniques to engage effectively with vulnerable children and young people
                                    </p>
                                    <p>
                                    The automated process all your website tasks. Discover tools and 
                                    techniques to engage effectively with vulnerable children and young people
                                    </p>
                                    <p>
                                    The automated process all your website tasks. Discover tools and 
                                    techniques to engage effectively with vulnerable children and young people
                                    </p>
    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Testimonials