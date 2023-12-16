import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

type Props = {};

function SectionOne({}: Props) {
  const [selectedTime, setSelectedTime] = useState("6-7 AM (IST)"); // Default selected time
  const [isOpen, setIsOpen] = useState(false);
  const timeOptions = ["6-7 AM (IST)", "7-8 AM (IST)", "6-7 PM (IST)"];

  const handleTimeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(event.target.value);
  };

  const selectRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="row">
      <div className="col-lg-9">
        <div className="grid gtc-lg-4 gtc-md-2 gtc gtc-sm-1 date_time_block">
          <motion.div
            initial={{
              y: -500,
              opacity: 0,
              scale: 0.4,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
            }}
            className="item date_time"
          >
            <img loading="lazy" src="/img/box/start.png" alt="Appointment" />
            <div className="stdate">Start Date</div>
            <div className="fulldate" id="workshop_date">
              1st Jan, 2024 <br />
            </div>
          </motion.div>

          <motion.div
            initial={{
              y: -500,
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="item date_time"
          >
            <img loading="lazy" src="/img/box/timings.png" alt="Time" />
            <div className="stdate">Timings</div>
            <div className="fulldate">
              <div className="custom-select">
                <div
                  id=""
                >
                  <div className="" onClick={toggleDropdown}>
                    6-7 AM (IST)
                    
                  </div>
                  <div className="" onClick={toggleDropdown}>
                    7-8 AM (IST)
                    
                  </div>
                  <div className="" onClick={toggleDropdown}>
                    6-7 PM (IST)
                    
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              y: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="item date_time"
          >
            <img loading="lazy" src="/img/box/languages.png" alt="Global" />
            <div className="stdate">Language</div>
            <div className="fulldate">English</div>
          </motion.div>

          <motion.div
            initial={{
              y: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.0,
            }}
            className="item date_time duaration_time"
          >
            <img loading="lazy" src="/img/box/Duration1.png" alt="Duration" />
            <div className="stdate">Duration</div>
            <div className="fulldate">
              3 months / 12 Weeks <br />
              Mon-Fri
              <br />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
