
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



function Dashboard() {
    return (
        <>
            <div className="header-container">
                <div className="header-top__text-container">
                   
                        <span className="header-text">
                            Request your free brochure for adventure inspiration.
                            <a href="https://www.exodus.co.uk/brochures" className="order-link">
                                Order Now     <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </span>
                    </div>

                <div className="account">
                    <div className="icon-column1">
                        <FontAwesomeIcon icon={faUser} className="user-icon" />
                    </div>
                    <div className="account-text">ACCOUNT</div>
                    <div className="icon-column2">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>


                </div>
            </div>

        </>
    );
}

export default Dashboard;
