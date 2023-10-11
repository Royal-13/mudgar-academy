import Float from "@/components/home/float";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import RegisterForm from "@/components/home/registerform";
import SectionThree from "@/components/home/section3";
import React from "react";
const index = () => {
  return (
    <><Header /><main id="main">
          <section id="included" className="Included">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-9">
                          <h3 className="brown_heading py-3">Courses</h3>
                          <SectionThree />
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
