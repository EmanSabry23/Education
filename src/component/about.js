import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Parentabout , AboutH2 , AboutBox , AboutboxAbsolute, AboutboxBefore , AboutboxH3, AboutboxP , AboutboxA, AboutImg } from '../styles/about.js';
import axios from 'axios';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class About extends Component {

    state = {
        about : []
    }

    componentDidMount() {
        axios.get('data.json').then( res => {this.setState({ about: res.data.about})} );
    }

    render() {

        const {about} = this.state;

        const aboutsection = about.map( (aboutItem) => {
            return(
                
                <div className="row">
                    <div className="col-md-6">
                        <AboutBox>
                            <AboutboxAbsolute src={aboutItem.imageAb}/>
                            <AboutboxBefore src={aboutItem.imageBe}/>
                            <AboutboxH3>{aboutItem.titleH3}</AboutboxH3>
                            <AboutboxP>{aboutItem.pargraph}</AboutboxP>
                            <AboutboxA>{aboutItem.link}<ArrowForwardIcon style={{
                                 backgroundColor: "var(--subColor)" ,
                                 width: "30px"  ,                                
                                 height: "30px" , 
                                 padding: "7px",
                                 color: "#fff",
                                 borderRadius: "25px",
                                 marginTop: "-3px",
                                 marginLeft: "10px"
                            }}/></AboutboxA>
                        </AboutBox>
                    </div>
                    <div className="col-md-6">
                        <AboutImg src={aboutItem.imageAbout}/>
                    </div>
                </div>
            )
        } )


        return(
            <>
                <Parentabout>
                    <div className="container">
                        <AboutH2>About Us</AboutH2>
                        {aboutsection}
                    </div>
                </Parentabout>
            </>
        )

    }

   
}

export default About
