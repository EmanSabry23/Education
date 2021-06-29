import React , {Component} from 'react';
import axios from 'axios';
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


class Portfolio extends Component{

    state = {
        portfolio : []
    }

    componentDidMount() {
        axios.get('data.json').then( res => {this.setState({ portfolio: res.data.portfolio})} )
    }

    render(){

        const {portfolio} = this.state;

        const portfolioList = portfolio.map( (portfolioItem) => {
            return(
                <div className="col-md-4">
                        <Boxportfoliobox active={portfolioItem.id} key={portfolioItem.id}>
                            <Imgportfolio src={portfolioItem.image}/>
                            <Portfolioboxtext>
                                <Portfolioboxtexth3>{portfolioItem.textH3}</Portfolioboxtexth3>
                                <Portfolioboxtextp>{portfolioItem.textP}</Portfolioboxtextp>
                                <Portfolioboxtexta buttonActive={portfolioItem.id}>{portfolioItem.linkA} <ArrowForwardIcon style={{
                                    backgroundColor: "var(--subColor)" ,
                                    width: "30px"  ,                                
                                    height: "30px" , 
                                    padding: "7px",
                                    borderRadius: "25px",
                                    marginTop: "-3px",
                                    marginLeft: "10px"

                                }}/></Portfolioboxtexta>
                            </Portfolioboxtext>
                        </Boxportfoliobox>
                </div>
            )
        } )

        return(
            <>
                <Sectionportfolio>
                    <div className="container">
                        <Titleh2> Our Portfolio</Titleh2>
                        <div className="row">
                            {portfolioList}
                        </div>
                    </div>
                </Sectionportfolio>
            </>
        )

    }
    
}

export default Portfolio