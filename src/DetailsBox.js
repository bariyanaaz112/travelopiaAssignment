import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Enquiry from './Enquiry';
import { IoMdStar } from 'react-icons/io';



const DetailsBox = () => {

  const [formData, setFormData] = useState({
    destination: '',
    departureDate: '',
    numberOfPassengers: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <>

      <div className='row'>
        <div className='col-md-8'>
          <Enquiry />
        </div>

        <div className='col-md-4'>
          <div className="enquiry-first">
            <div className='call'
            >Call for general departures:</div>
            <div className='contact'>  020 3553 9076 </div>
          </div>
          <div className='enquiry'>

            <div className='enquiry-form'>
              <h4 className='hii'>Make an enquiry
              </h4 >
              <text className='hii'>Step 1 of 2</text>

              <form onSubmit={handleSubmit}>
                <label>
                  DESTINATION
                  <input
                    type='text'
                    placeholder='Armenia'
                    name='destination'
                    value={formData.destination}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  DEPARTURE DATE
                  <input
                    type='date'
                    name='departureDate'
                    placeholder='dd/mm/yy'
                    value={formData.departureDate}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  NUMBER OF PASSENGERS *
                </label>

                <select className='passengers' id="passengers" name="passengers">
                  <option value="0">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>/
                  <option value="3">3</option>

                </select>


                <label>
                  MESSAGE *
                  <textarea className='message'
                    name='message'
                    value={formData.message}
                    placeholder="How can we help you?"
                    onChange={handleChange}
                    rows={7}

                  ></textarea>
                </label>

                <h4 className='link'> To enquire about an existing booking <a className='link' href="">click here</a> </h4>
                <button type='submit'>Next</button>
                <div className='text2' >
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20">
                    <g fill="none" fill-rule="evenodd">
                      <path fill="currentColor" fill-rule="nonzero" d="M1.807,9.334 C1.79833333,9.37733333 1.794,9.42933333 1.794,9.49 C1.794,9.698 1.86766667,9.802 2.015,9.802 C2.093,9.802 2.17966667,9.776 2.275,9.724 C2.37033333,9.672 2.49166667,9.58533333 2.639,9.464 L2.808,9.867 C2.66066667,10.0663333 2.44183333,10.2656667 2.1515,10.465 C1.86116667,10.6643333 1.508,10.764 1.092,10.764 C0.754,10.764 0.489666667,10.6968333 0.299,10.5625 C0.108333333,10.4281667 0.013,10.244 0.013,10.01 L0.026,9.88 C0.078,9.42933333 0.255666667,8.12066667 0.559,5.954 L0.767,4.446 L0,4.082 L0.091,3.575 L2.327,3.263 L2.639,3.406 L1.807,9.334 Z M1.95,2.015 C1.716,2.015 1.5145,1.92616667 1.3455,1.7485 C1.1765,1.57083333 1.092,1.365 1.092,1.131 C1.092,0.810333333 1.19816667,0.541666667 1.4105,0.325 C1.62283333,0.108333333 1.89366667,-2.84217094e-14 2.223,-2.84217094e-14 C2.49166667,-2.84217094e-14 2.704,0.0845 2.86,0.2535 C3.016,0.4225 3.094,0.624 3.094,0.858 C3.094,1.18733333 2.99433333,1.4625 2.795,1.6835 C2.59566667,1.9045 2.314,2.015 1.95,2.015 Z" transform="translate(8.338 4.366)"></path>
                      <circle cx="10" cy="10" r="9.5" stroke="currentColor" opacity=".403"></circle>
                    </g>
                  </svg>Find out more about how we use your data
                </div>

              </form>


            </div>
          </div>
          <button className='chat' type='submit' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Live Chat
            <FontAwesomeIcon icon={faArrowRight} size="sm" />
          </button>


          <button className='chat' type='submit' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            Request a Brochure
            <FontAwesomeIcon icon={faArrowRight} size="sm" />
          </button>

          <div className="enquiry-last">
            <div className='stars'
            >Our travellers rate our Armenia holidays as</div>
            <div className='rating'>
              <text style={{ paddingLeft: "16px" }}><b> 3.8 / 5 </b>based on </text><div className='review'> 32 reviews</div>   </div>
            <IoMdStar color='#F1CF6A' style={{ marginLeft: "12px" }} /><IoMdStar color='#F1CF6A' /><IoMdStar color='#F1CF6A' /><IoMdStar color='#F1CF6A' /><IoMdStar color='grey' />


          </div>
        </div>
      </div>

      <hr></hr>



    </>
  );
}

export default DetailsBox;
