import React, { Component } from 'react';
import WOW from 'wowjs';
import '../styles/services.css';
import HeadsetIcon from '@material-ui/icons/Headset';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import RowingIcon from '@material-ui/icons/Rowing';
import FunctionsIcon from '@material-ui/icons/Functions';
import ScheduleIcon from '@material-ui/icons/Schedule';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';

class Services extends Component{

    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    
    render() {
        return(
            <>
                    <div className="services">
                        <div className="container">
                            <h2>Our Services</h2>
                            <div className="parent">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="box wow slideInLeft" data-wow-duration="3s" data-wow-delay=".6s">
                                            <HeadsetIcon/>
                                            <div className="text">
                                                <h3>Art Studio</h3>
                                                <p>
                                                    Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.
                                                    Vivamus interdum ultrices augue. Aenean dos cursus lania.
                                                </p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="col-md-4">
                                        <div className="box wow slideInLeft" data-wow-duration="2s" data-wow-delay=".6s">
                                            <TrackChangesIcon/>
                                            <div className="text">
                                                <h3>Art Studio</h3>
                                                <p>
                                                    Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.
                                                    Vivamus interdum ultrices augue. Aenean dos cursus lania.
                                                </p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="col-md-4">
                                        <div className="box wow slideInLeft" data-wow-duration="1s" data-wow-delay=".6s">
                                            <RowingIcon/>
                                            <div className="text">
                                                <h3>Art Studio</h3>
                                                <p>
                                                    Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.
                                                    Vivamus interdum ultrices augue. Aenean dos cursus lania.
                                                </p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="col-md-4">
                                        <div className="box wow slideInRight" data-wow-duration="3s" data-wow-delay=".6s">
                                            <FunctionsIcon/>
                                            <div className="text">
                                                <h3>Art Studio</h3>
                                                <p>
                                                    Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.
                                                    Vivamus interdum ultrices augue. Aenean dos cursus lania.
                                                </p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="col-md-4">
                                        <div className="box wow slideInRight" data-wow-duration="2s" data-wow-delay=".6s">
                                            <ScheduleIcon/>
                                            <div className="text">
                                                <h3>Art Studio</h3>
                                                <p>
                                                    Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.
                                                    Vivamus interdum ultrices augue. Aenean dos cursus lania.
                                                </p>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="col-md-4">
                                        <div className="box wow slideInRight" data-wow-duration="1s" data-wow-delay=".6s">
                                            <EventAvailableOutlinedIcon/>
                                            <div className="text">
                                                <h3>Art Studio</h3>
                                                <p>
                                                    Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.
                                                    Vivamus interdum ultrices augue. Aenean dos cursus lania.
                                                </p>
                                            </div>
                                        </div> 
                                    </div>
                                   
                                </div>
                                   
                                           
                            </div>
                        </div>
                    </div>
            </>
        )
    }

}

export default Services