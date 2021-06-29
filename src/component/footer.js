import React from 'react';
import '../styles/footer.css';

function Footer() {
    return(
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="div-img">
                                <p>
                                    Join millions of people from around the world learning 
                                </p>
                            </div>
                        </div>
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
                                <form>
                                    <input type="text" placeholder="Type........." className="form-control"/>
                                    <button>Subscribe</button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer