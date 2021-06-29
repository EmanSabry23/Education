import React, { Component } from 'react';
import WOW from 'wowjs';
import '../styles/header.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class Header extends Component {

    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
   
    render() {
        return(
            <>
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="text-box wow slideInLeft" data-wow-duration="2s" data-wow-delay=".3s">
                                    <h2>Best Online Learning System Start Learning Now!</h2>
                                    <p>
                                        Education is not just about going to school and getting a degree. It's about widening your
                                        knowledge and absorbing the truth about life. Knowledge is power.
                                    </p>
                                    <a>GET STARTED <ArrowForwardIcon/></a>
                                    <span className="before">Education</span>
                                    <span className="after">
                                        <a><FacebookIcon/></a>
                                        <a><InstagramIcon/></a>
                                        <a><LinkedInIcon/></a>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="image wow slideInRight" data-wow-duration="1s" data-wow-delay=".3s">
                                    <div className="befor"><img src={"./images/blob.svg"}/></div>
                                    <img className="ill" src={"./images/header-image.png"}/>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Header