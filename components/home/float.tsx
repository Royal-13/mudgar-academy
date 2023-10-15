import React, { useState, useRef } from "react";

const Float = () => {
  const [selectedTime, setSelectedTime] = useState("6 AM "); // Default selected time
  const [isOpen, setIsOpen] = useState(false);

  const timeOptions = ["6AM", "7 AM", "10 AM ", "6 PM ", "7 PM "];

  const handleTimeChange = (time: React.SetStateAction<string>) => {
    setSelectedTime(time);
    toggleDropdown();
  };

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="right_block register_desktop mt-5">
        <h3>Movement With Mudgar</h3>
        <span className="date-and-time"><img loading="lazy" src="/img/date.png" alt="Date" width={100} height={100} />
          3 Months / 12 Weeks </span>
        <span className="date-and-time d-flex" onClick={toggleDropdown}>
          <img loading="lazy" src="/img/time-blue.png" alt="Date" width={100} height={100} />
          <div className={`select ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
            <div className="selected" onClick={toggleDropdown}>
              {selectedTime}
              <div className="select-arrow-1"></div>
            </div>
            <ul>
              {timeOptions.map((time, index) => (
                <li
                  key={index}
                  onClick={() => handleTimeChange(time)}
                >
                  {time}
                </li>
              ))}
            </ul>
          </div>
        </span>
        <span className="date-and-time"><img loading="lazy" src="/img/rupee.png" alt="Date" width={100} height={100} /> Price: Rs: 590</span>
        <a href="#register_form" className="btn-get-started scrollto right_register register-now-track-btn" id="register_right_button" data-btn="bottom-side">Register<img loading="lazy" className="btn_arrow" id="right_register_arrow" src="/img/btn-arrow.png" alt="Arrow" width="20px" height="14px" style={{ display: 'none' }} /></a>
        <span className="date-and-time gray"><img loading="lazy" src="/img/green-tick.png" alt="Date" width={100} height={100} />High energy and focus</span>
        <span className="date-and-time gray"><img loading="lazy" src="/img/green-tick.png" alt="Date" width={100} height={100} />Reach your optimal weight</span>
        <span className="date-and-time gray"><img loading="lazy" src="/img/green-tick.png" alt="Date" width={100} height={100} />Eat and sleep better</span>
        <div className="people_joined_right">
          <img loading="lazy" src="/img/group.png" alt="Date" />
          <span>
            <strong>
              408 </strong> people have already joined</span>
        </div>
      </div>
      <div className="register_mobile">
        <div className="register_mobile_heading">
          <h3>Movement <br/>
            With Mudgar</h3>
          <a href="#register_form" className="btn-get-started scrollto right_register_text">Register</a>
        </div>
        <div className="register_mobile_detail">
          <span className="date-and-time"><img loading="lazy" src="/img/rupee.png" alt="Rupee" />Price: Rs: 590</span>
          <span className="date-and-time register_count_mobile"><img loading="lazy" src="/img/group.png" alt="Group" width={100} height={100} /><span><strong>408</strong> registered</span></span>
        </div>
      </div>
    </>
  );
}

export default Float;
