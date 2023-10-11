import React from "react";
type Props = {};
function SectionOne({}: Props) {

return (
<section id="included" className="Included">
<div className="container">
        <div className="row ">
          <div className="col-lg-9">
            <div className="grid gtc-lg-4 gtc-md-2 gtc gtc-sm-1 date_time_block">
              <div className="item date_time">
                <img loading="lazy" src="/img/box/start_date.png" alt="Appointment" />
                <div className="stdate">Start Date</div>
                <div className="fulldate" id="workshop_date">
                  4th Sep, 2023 <br />
                </div>
              </div>
              <div className="item date_time">
                <img loading="lazy" src="/img/box/time.png" alt="Time" />
                <div className="stdate">Timings</div>
                <div className="fulldate">
                  7 AM (IST)
                </div>
              </div>
              <div className="item date_time">
                <img loading="lazy" src="/img/box/language.png" alt="Global" />
                <div className="stdate">Language</div>
                <div className="fulldate">English</div>
              </div>
              <div className="item date_time duaration_time">
                <img loading="lazy" src="/img/box/Duration.png" alt="Duration" />
                <div className="stdate">Duration</div>
                <div className="fulldate">
                  3 months <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
)
}
export default SectionOne;