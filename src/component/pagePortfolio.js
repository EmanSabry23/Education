import React from 'react';
import '../styles/pagePortfolio.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


function PagePortfolio() {
    return(
        <>
            <div className="pagePortfolio">
                <div className="container">
                    <h2> Our Portfolio</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box">
                                <img src={"./images/2.jpg"}/>
                                <div className="box-text">
                                    <h3>Portfolio</h3>
                                    <p>
                                        The automated process all your website tasks. Discover tools and 
                                        techniques to engage .
                                    </p>
                                    <a>More <ArrowForwardIcon/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box">
                                <img src={"./images/3.jpg"}/>
                                <div className="box-text">
                                    <h3>Portfolio</h3>
                                    <p>
                                        The automated process all your website tasks. Discover tools and 
                                        techniques to engage .
                                    </p>
                                    <a>More <ArrowForwardIcon/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box">
                                <img src={"./images/5.jpg"}/>
                                <div className="box-text">
                                    <h3>Portfolio</h3>
                                    <p>
                                        The automated process all your website tasks. Discover tools and 
                                        techniques to engage .                                    
                                    </p>
                                    <a>More <ArrowForwardIcon/></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PagePortfolio