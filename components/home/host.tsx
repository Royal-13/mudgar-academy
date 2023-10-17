import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Host({}: Props) {
  return (
    <div id="about" className="white_block_no_padding about">
      <div id="about-1" className="white_block about-1 text-center">
        <h4 className="brown_heading py-3">Our Hosts</h4>
        <div className="row " id="pad-1">
          <motion.div
            initial={{ opacity: 0, y: -300 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-md-6"
          >
            <div className="card mb-4">
              <a href="/hostdetails">
                <img
                  loading="lazy"
                  src="/img/card-image.jpg"
                  alt="Host 1"
                  className="about_img "
                />
              </a>
              <div className="card-body">
                <a href="/hostdetails">
                  <h3 className="brown_heading_1">Anjit Suhag</h3>
                </a>
                <p className="about_text">Founder and Mentor</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -300 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-md-6"
          >
            <div className="card mb-4">
              <a href="/instructordetails">
                <img
                  loading="lazy"
                  src="/img/card-image-1.jpg"
                  alt="Host 2"
                  className="about_img "
                />
              </a>
              <div className="card-body">
                <a href="/instructordetails">
                  <h3 className="brown_heading_1">Jyotsana</h3>
                </a>
                <p className="about_text">Mentor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Host;
