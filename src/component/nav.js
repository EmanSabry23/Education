import React from 'react';
import '../styles/nav.css';
import {Link , NavLink} from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';
// import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';

function Nav() {

    // const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(numberOfItems);

    return(
        <>
            <div className="nav">
                <div className="container">
                    <div className="parent">
                        <div className="row">
                            <div className="col-md-2">
                                <img src={"./images/logo.png"}/>
                            </div>
                            <div className="col-md-10">
                                <div className="links">
                                    <NavLink exact to="/">Home</NavLink >
                                    <NavLink  to="/pageAbout">About</NavLink >
                                    <NavLink  to="/pageServices">Services</NavLink >
                                    <NavLink  to="/pageTestimonials">Testimonials</NavLink >
                                    <NavLink  to="/pagePortfolio">Portfolio</NavLink >
                                    <div className="icon-log">
                                        <a><ExitToAppIcon/> Login</a>
                                        <a><SearchIcon/> </a>
                                        {/* <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Dropdown Button
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown> */}
                                        {/* <button {...buttonProps}>Example</button>
                                        <div className={isOpen ? 'visible' : ''} role='menu'>
                                            <a {...itemProps[0]} href='https://example.com'>Regular link</a>
                                            <a {...itemProps[1]} onClick={handleClick}>With click handler</a>
                                        </div> */}
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

export default Nav