// ChatbotButton.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { BiSolidChat } from 'react-icons/bi';
import { RxCross1 } from 'react-icons/rx';
import { FiSend } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';



import './App.css'; // Create a CSS file for styling
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const ChatbotButton = () => {
    const [showChatModal, setShowChatModal] = useState(false);

    const openChatModal = () => {
        setShowChatModal(true);
    };

    const closeChatModal = () => {
        setShowChatModal(false);
    };

    return (
        <div>
            {/* Floating chat button */}
            <div className="container-fluid">
                <div className="position-fixed bottom-0 end-0 m-3">
                    <button
                        type="button"
                        className="btn rounded-circle"


                        style={{ width: '60px', height: '60px', backgroundColor: "#077E86" }}
                    >
                        {showChatModal ? (
                            <RxCross1 className='' size={25} color="white" onClick={closeChatModal} />
                        ) : (
                            <BiSolidChat size={35} color="white" onClick={openChatModal} />
                        )}
                    </button>
                </div>
            </div>

            {/* Chat modal */}
            <div
                className={`chat-modal ${showChatModal ? 'show' : ''}`}
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">

                        <div className="modal-header">

                            <button
                                type="button"
                                className="close"
                            >
                                <div className='cross'>
                                    <div> <FontAwesomeIcon icon={faCircleXmark} style={{ height: "30px", margin: "10px" }} /></div>

                                    <div style={{ alignItems: "center", display: "flex" }}>Exodus Live Chat</div>
                                </div>
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* Add your chatbot content or iframe here */}
                            <div className="chat-container">
                                <p className='chat-message'>Want to chat to the experts? We’re here if you need us.</p>
                                <p className='chat-message'>How can I help today?</p>
                                <div className="button-container">
                                    <button className="chat-button">New Bookings</button>
                                    <button className="chat-button">Exiting Bookings</button>

                                </div>
                                <button className="chat-button">Others</button>

                            </div>
                            <hr></hr>
                            <div className="" style={{ fontFamily: "helvetica", fontSize: "12px", color: "#425B76", padding: "20px", paddingTop: "10px" }}>
                                To give you the content requested, we need to store and process your personal data.
                                For information on how to unsubscribe, as well as our privacy practices and commitment
                                to protecting your privacy, please review our <a href='/'> Privacy Policy.</a>
                            </div>
                            <hr></hr>
                            <div className="chat2">
                                <div className='chat-send' style={{ maxWidth: '85%', marginTop: "-10px", marginLeft: "10px" }}>
                                    <text style={{ textAlign: 'center', display: 'flex', padding: '7px' }}>  Choose an option</text>
                                </div>
                                <FiSend color='black' size={20} style={{ marginLeft: 'auto', marginTop: '-27px', marginRight: "12px" }} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default ChatbotButton;
