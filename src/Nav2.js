import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPhone, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';
import { MdOutlineCall } from 'react-icons/md';

function Nav2() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const countries = [
        { name: 'USA', flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png' },
        { name: 'Canada', flag: 'https://www.worldatlas.com/r/w960-q80/img/flag/ca-flag.jpg' },
        { name: 'China', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1200px-Flag_of_the_People%27s_Republic_of_China.svg.png' },
        // Add more countries as needed
    ];


    return (
        <div className="nav2 mx-2">
            <div style={{ flex: 0.1 }}>

                <img src="https://ik.imgkit.net/3vlqs5axxjf/MM-TP/ik-seo/https://cdn.travelpulse.com/images/99999999-9999-9999-9999-999999999999/58622247-5042-48ca-80c4-f64038d9111f/source/Exodus-Travels.jpg?tr=h-420%2Cfo-auto" height="120" width="200" alt="Image Description" />

            </div>

            <Navbar expand="lg" variant="light">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#destinations" className="nav-link-custom">Destinations</Nav.Link>
                        <Nav.Link href="#activities" className="nav-link-custom">Activities</Nav.Link>
                        <Nav.Link href="#ways-to-travel" className="nav-link-custom">Ways to Travel</Nav.Link>
                        <Nav.Link href="#offers" className="nav-link-custom">Offers</Nav.Link>
                        <Nav.Link href="#late-gateways" className="nav-link-custom">Late Gateways</Nav.Link>
                        <Nav.Link href="#sustainable-travel" className="nav-link-custom">Sustainable Travel</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="icons-row" style={{ flex: 0.3 }}>
                <FontAwesomeIcon icon={faSearch} className="mirror-icon" />
                <FontAwesomeIcon icon={faHeart} className="icon" style={{ color: "#5b6a6a" }} />
                <div className="number">1234567898</div>
                <MdOutlineCall size={25} color="#00a8b6" style={{ transform: 'scaleX(-1)', marginRight: "10px" }} />
                <button className="custom-button" style={{ width: '100px', marginRight: "10px" }}>CONTACT</button>
                <div className="dropdown-container">
                    <div className="dropdown" onClick={togglePopup}>
                        <img
                            src="https://wallpapercave.com/wp/wp2190362.png"
                            alt="Dropdown Image"
                            className="dropdown-image"
                        />

                        <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
                    </div>

                    {isPopupOpen && (
                        <div className="popup">
                            {countries.map((country, index) => (
                                <div key={index} className="country-item" onClick={closePopup}>
                                    <img src={country.flag} alt={`Flag of ${country.name}`} className="country-flag" />
                                    <span className="country-name">{country.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}

export default Nav2;
