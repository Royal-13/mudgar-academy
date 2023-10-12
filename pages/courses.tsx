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
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="curr_right d-flex d-sm-block align-content-center flex-wrap">
                          <div className="heading_cur1">
                            Swing 1 - Shoulder and chest-targeted swings
                          </div>
                          <div className="heading_cur3">
                            Swings that target the shoulders and chest.
                          </div>
                        </div>
                        <div className="curr_left">
                          <div className="heading_cur1 habit_icon m-0 p-0">
                            <img
                              loading="lazy"
                              src="/img/habit2/tiny/muscles.png"
                              alt="healthy"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="curr_right d-flex d-sm-block align-content-center flex-wrap">
                          <div className="heading_cur1">
                            Swing 2 - Tricep and bicep-focused swings
                          </div>
                          <div className="heading_cur3">
                            Swings that target the triceps and biceps.
                          </div>
                        </div>
                        <div className="curr_left">
                          <div className="heading_cur1 habit_icon m-0 p-0">
                            <img
                              loading="lazy"
                              src="/img/habit2/tiny/hand.png"
                              alt="healthy"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="curr_right d-flex d-sm-block align-content-center flex-wrap">
                          <div className="heading_cur1">
                            Swing 3 - Wrist and forearm-targeted swings
                          </div>
                          <div className="heading_cur3">
                            Swings that target the wrists and forearms.
                          </div>
                        </div>
                        <div className="curr_left">
                          <div className="heading_cur1 habit_icon m-0 p-0">
                            <img
                              loading="lazy"
                              src="/img/habit2/tiny/spine.png"
                              alt="healthy"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="curr_right d-flex d-sm-block align-content-center flex-wrap">
                          <div className="heading_cur1">
                            Swing 4 - Core and spine-focused swings
                          </div>
                          <div className="heading_cur3">
                            Swings that target the spine and core.
                          </div>
                        </div>
                        <div className="curr_left">
                          <div className="heading_cur1 habit_icon m-0 p-0">
                            <img
                              loading="lazy"
                              src="/img/habit2/tiny/leg.png"
                              alt="healthy"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="curr_right d-flex d-sm-block align-content-center flex-wrap">
                          <div className="heading_cur1">
                            Swing 5 - Leg-targeted swings
                          </div>
                          <div className="heading_cur3">
                            Swings that target the legs.
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
