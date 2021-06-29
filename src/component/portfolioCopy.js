import React from 'react';
import {
    Sectionportfolio
    , Titleh2
    , Boxportfoliobox
    , Imgportfolio 
    , Portfolioboxtext 
    , Portfolioboxtexth3 
    , Portfolioboxtextp 
    , Portfolioboxtexta 
    // , Portfolioboxtextasvg
} from '../styles/portfolio.js';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


function Portfolio() {
    return(
        <>
            <Sectionportfolio>
                <div className="container">
                    <Titleh2> Our Portfolio</Titleh2>
                    <div className="row">
                        <div className="col-md-4">
                            <Boxportfoliobox>
                                <Imgportfolio src={"./images/2.jpg"}/>
                                <Portfolioboxtext>
                                    <Portfolioboxtexth3>Portfolio</Portfolioboxtexth3>
                                    <Portfolioboxtextp>
                                        The automated process all your website tasks. Discover tools and 
                                        techniques to engage .
                                    </Portfolioboxtextp>
                                    <Portfolioboxtexta>More <ArrowForwardIcon/></Portfolioboxtexta>
                                </Portfolioboxtext>
                            </Boxportfoliobox>
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
            </Sectionportfolio>
        </>
    )
}

export default Portfolio