import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Enquiry from './Enquiry';


const Path = () => {

    return (
        <>
            <div className="nav3" >
                <div className="nav">Home</div>
                <div className="nav">Europe</div>
                <div className="nav">Armenia</div>

            </div>


        </>
    );
}

export default Path;
