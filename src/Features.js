import React from 'react';
import './App.css'; // Import your CSS file for styling
import { BsInfoCircle } from 'react-icons/bs';


function Feature() {
    const jsonData = [
        {
            id: 1, content: 'TRUSTPILOT', content2: 'RATED EXCELLENT', icon: "https://res.cloudinary.com/enchanting/q_70,f_auto,w_40,h_40,c_lfill,g_auto/exodus-web/2022/05/trustpilot_brandmark_teal-rgb.png",
        },
        { id: 2, content: 'REFUND', content2: "GUARANTEE", icon: "https://res.cloudinary.com/enchanting/q_70,f_auto,w_40,h_40,c_lfill,g_auto/exodus-web/2023/05/MicrosoftTeams-image-179.png" },
        { id: 3, content: 'FLEXIBLE', content2: "BOOKINGS", icon: "https://res.cloudinary.com/enchanting/q_70,f_auto,w_40,h_40,c_lfill,g_auto/exodus-web/2023/05/MicrosoftTeams-image-180.png" },
        { id: 4, content: 'EXPERT', content2: "LOCAL GUIDES", icon: "https://res.cloudinary.com/enchanting/q_70,f_auto,w_40,h_40,c_lfill,g_auto/exodus-web/2023/02/leader-icon-usp.png" },
    ];

    return (
        <>
            <div className="feature">
                {jsonData.map((item) => (
                    <div key={item.id} className="column d-flex align-items-center gap-2" style={{ border: "none", borderRight: "1px solid #ccc", borderRadius: "0px" }}>
                        <img src={item.icon} alt={`Icon 1`} />
                        <div className='flex-column d-flex align-items-center justify-content-center f-text' >
                            <span className='feature-text'>{item.content}</span>
                            <span className='feature-text'>{item.content2}</span>
                        </div>
                        <BsInfoCircle size={22} />

                    </div>
                ))}
            </div>
        </>
    );
}

export default Feature;
