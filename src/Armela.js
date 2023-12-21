import React from 'react';
import './App.css'; 

function Armela() {
    return (
        <>
            <div className="overlay-container">

            <img src="https://res.cloudinary.com/enchanting/q_80,f_auto,c_lfill,w_1600,h_400,g_auto/exodus-web/2022/07/armenia-2.jpg"
                    alt="mountains" style={{ width: '100%', height: 'auto' }} />


                <div className="overlay-text">
                    <div className='flex-column d-flex justify-content-center align-items-center' style={{ position: 'absolute', bottom: 40 }}>
                        <text className='h1'>Armenia Tours</text>
                        <text className='text'>Where Asia and Europe meet in a symphony of mountains, history and tradition</text>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Armela;
