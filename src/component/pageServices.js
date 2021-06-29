import React from 'react';
import '../styles/pageServices.css';
import HeadsetIcon from '@material-ui/icons/Headset';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import RowingIcon from '@material-ui/icons/Rowing';
import FunctionsIcon from '@material-ui/icons/Functions';
import ScheduleIcon from '@material-ui/icons/Schedule';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';

function PageServices() {
    return(
        <>
                <div className="pageServices">
                    <div className="container">
                        <h2>Our Services</h2>
                        <div className="parent">
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="item">
                                       <div className="box">
                                            <HeadsetIcon/>
                                            <div className="text">
                                                <h3>Art Studio</h3>
                                                <p>
                                                    Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.
                                                    Vivamus interdum ultrices augue. Aenean dos cursus lania.
                                                </p>
                                            </div>
                                       </div> 
                                       <div className="box">
                                            <TrackChangesIcon/>
                                            <div className="text">
                                                <h3>Great Facility</h3>
                                                <p>
                                                    Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.
                                                    Vivamus interdum ultrices augue. Aenean dos cursus lania.
                                                </p>
                                            </div>
                                       </div> 
                                       <div className="box">
                                            <RowingIcon/>
                                            <div className="text">
                                                <h3>Activity Hub</h3>
                                                <p>
                                                    Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.
                                                    Vivamus interdum ultrices augue. Aenean dos cursus lania.
                                                </p>
                                            </div>
                                       </div> 
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                       <div className="box">
                                            <FunctionsIcon/>
                                            <div className="text">
                                                <h3>Fully Qualified</h3>
                                                <p>
                                                    Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.
                                                    Vivamus interdum ultrices augue. Aenean dos cursus lania.
                                                </p>
                                            </div>
                                       </div> 
                                       <div className="box">
                                            <ScheduleIcon/>
                                            <div className="text">
                                                <h3>Flexible Schedule</h3>
                                                <p>
                                                    Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.
                                                    Vivamus interdum ultrices augue. Aenean dos cursus lania.
                                                </p>
                                            </div>
                                       </div> 
                                       <div className="box">
                                            <EventAvailableOutlinedIcon/>
                                            <div className="text">
                                                <h3>Chemistry Lab</h3>
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
                </div>
        </>
    )
}

export default PageServices