import Float from "@/components/home/float";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import RegisterForm from "@/components/home/registerform";
import React from "react";
const index = () => {
  return (
    <>
      <Header />
      <main id="main">
        <section id="included" className="Included">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 cols-margin">
                <div
                  id="curriculum"
                  className="white_block text-center curriculum"
                >
                  <h3 className="brown_heading py-3">Movement with Mudgar</h3>
                  <div className="content">
                    <div className="content-item active">
                      <div className="grid gtc curr-sm-2 curr-md-2 curr-lg-2 curr_grid">
                        <div className="curr_left">
                          <div className="heading_cur1 habit_icon">
                            <img
                              loading="lazy"
                              src="/img/habit2/tiny/shoulder.png"
                              alt="healthy"
                              className=""
                            />
                          </div>
                        </div>
                        <div className="curr_right d-flex d-sm-block align-content-center flex-wrap">
                          <div className="heading_cur1">
                          COMPLEMENTARY MUDGAR:
                          </div>
                          <div className="heading_cur3">
                          As part of this course, a mudgar weighing 5-6kgs will be provided to men, and a mudgar weighing
3-4kgs will be provided to women, so you don't have to buy it separately.
                          </div>
                        </div>
                        <div className="curr_left">
                          <div className="heading_cur1 habit_icon m-0 p-0">
                            <img
                              loading="lazy"
                              src="/img/habit2/tiny/muscles.png"
                              alt="healthy"
                              className=""
                            />
                          </div>
                        </div>
                        <div className="curr_right d-flex d-sm-block align-content-center flex-wrap">
                          <div className="heading_cur1">
                          45-MINUTE LIVE CLASS:
                          </div>
                          <div className="heading_cur3">
                          For the next three months, a 45-minute live class will be conducted from Monday to Friday.
                          </div>
                        </div>
                        <div className="curr_left">
                          <div className="heading_cur1 habit_icon m-0 p-0">
                            <img
                              loading="lazy"
                              src="/img/habit2/tiny/hand.png"
                              alt="healthy"
                              className=""
                            />
                          </div>
                        </div>
                        <div className="curr_right d-flex d-sm-block align-content-center flex-wrap">
                          <div className="heading_cur1">
                           RECORDED SESSIONS OF EVERY CLASS:
                          </div>
                          <div className="heading_cur3">
                          Daily recorded sessions of all classes will be available for the next three months from the start of
the course.
                          </div>
                        </div>
                        <div className="curr_left">
                          <div className="heading_cur1 habit_icon m-0 p-0">
                            <img
                              loading="lazy"
                              src="/img/habit2/tiny/spine.png"
                              alt="healthy"
                              className=""
                            />
                          </div>
                        </div>
                        <div className="curr_right d-flex d-sm-block align-content-center flex-wrap">
                          <div className="heading_cur1">
                          COMMUNITY OF THOUSANDS OF PEOPLE:
                          </div>
                          <div className="heading_cur3">
                          You will have the opportunity to connect and grow with like-minded people and become part of
the biggest mudgar club possible for the next three months.
                          </div>
                        </div>
                        <div className="curr_left">
                          <div className="heading_cur1 habit_icon m-0 p-0">
                            <img
                              loading="lazy"
                              src="/img/habit2/tiny/leg.png"
                              alt="healthy"
                              className=""
                            />
                          </div>
                        </div>
                        <div className="curr_right d-flex d-sm-block align-content-center flex-wrap">
                          <div className="heading_cur1">
                          MUDGAR MAINTENANCE:
                          </div>
                          <div className="heading_cur3">
                          We will teach you how to take care of your mudgar in the long run since it is made of premium
quality Mahaghony Wood.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <RegisterForm />
              </div>
              <div className="right_block_container">
                <Float />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default index;