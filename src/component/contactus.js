import React from 'react';
import '../styles/contactus.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


function Contact() {
    return(
        <>
            <div className="contact">
                <div className="container">
                    <div className="parent">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="box-text">
                                    <div className="child">
                                        <span>1</span>
                                        <div className="picec">
                                            <h3>Address</h3>
                                            <p>
                                                May over was. Be signs two. Spirit. Brought said
                                                dry own firmament lesser best sixth deep abundantly
                                            </p>
                                        </div>
                                    </div>
                                    <div className="child">
                                        <span>2</span>
                                        <div className="picec">
                                            <h3>Phone</h3>
                                            <p>
                                                +91-8010200777
                                            </p>
                                        </div>
                                    </div>
                                    <div className="child">
                                        <span>3</span>
                                        <div className="picec">
                                            <h3>E-Mail</h3>
                                            <p>
                                                Info@Gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <form>
                                    <h4>Send Message</h4>
                                    <input className="form-control" type="text" placeholder="Full Name"/>
                                    <input className="form-control" type="email" placeholder="Your Email "/>
                                    <textarea className="form-control" placeholder="Type Your Message"></textarea>
                                    <button>Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact