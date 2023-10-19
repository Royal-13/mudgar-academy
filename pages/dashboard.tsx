import Footer1 from "@/components/home/footer1";
import Header from "@/components/home/header";
 

import React, { useState } from "react";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [link, setLink] = useState("");
  const [course, setCourse] = useState("");
  const [selectedDates, setSelectedDates] = useState([]);

  return (
    <>
      <Header />
      <main id="main">
        <section id="included" className="Included">
          <div className="container">
            <div className="row" id="row-center">
              <div className="col-lg-9">
                <div id="who" className="white_block who ">
                  <h3 className="brown_heading py-3">Hello {username}</h3>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="heading_who px-md-3">Class Link:</h3>
                      <div className="text_who px-2 px-md-3">{link}</div>
                      <h3 className="heading_who px-md-3">
                        Last course bought at:
                      </h3>
                      <div className="text_who px-2 px-md-3">{course}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer1 />
      </main>
    </>
  );
};

export default Dashboard;
