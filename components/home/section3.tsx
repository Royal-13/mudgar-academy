import React from "react";
import { motion } from "framer-motion";
type Props = {};
function SectionThree({}: Props) {
  return (
    <div id="curriculum" className="white_block text-center curriculum">
      <h3 className="brown_heading py-3">
        Different types of swings that you will learn:
      </h3>
      <div className="content">
        <div className="content-item active">
          <div className="grid gtc curr-sm-2 curr-md-2 curr-lg-2 curr_grid">
            <div className="curr_left">
              <div className="heading_cur1 habit_icon">
                <img
                  loading="lazy"
                  src="/img/habit2/tiny/swing 1.jpg"
                  alt="swings"
                  className="img-mobile"
                  height={110}
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="curr_right d-flex d-sm-block align-content-center flex-wrap"
            >
              <div className="heading_cur1">
                Swing 1 - Shoulder and chest-targeted swings
              </div>
              <div className="heading_cur3">
                Swings that target the shoulders and chest.
              </div>
            </motion.div>
            <div className="curr_left">
              <div className="heading_cur1 habit_icon">
                <img
                  loading="lazy"
                  src="/img/habit2/tiny/swing 2.jpg"
                  alt="swings"
                  className="img-mobile-1"
                  height={110}
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="curr_right d-flex d-sm-block align-content-center flex-wrap"
            >
              <div className="heading_cur1">
                Swing 2 - Tricep and bicep-focused swings
              </div>
              <div className="heading_cur3">
                Swings that target the triceps and biceps.
              </div>
            </motion.div>
            <div className="curr_left">
              <div className="heading_cur1 habit_icon m-0 p-0">
                <img
                  loading="lazy"
                  src="/img/habit2/tiny/wrist.jpg"
                  alt="swings"
                  className="img-mobile-2"
                  height={110}
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="curr_right d-flex d-sm-block align-content-center flex-wrap"
            >
              <div className="heading_cur1">
                Swing 3 - Wrist and forearm-targeted swings
              </div>
              <div className="heading_cur3">
                Swings that target the wrists and forearms.
              </div>
            </motion.div>
            <div className="curr_left">
              <div className="heading_cur1 habit_icon m-0 p-0">
                <img
                  loading="lazy"
                  src="/img/habit2/tiny/core.jpg"
                  alt="swings"
                  className="img-mobile-2"
                  height={110}
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="curr_right d-flex d-sm-block align-content-center flex-wrap"
            >
              <div className="heading_cur1">
                Swing 4 - Core and spine-focused swings
              </div>
              <div className="heading_cur3">
                Swings that target the spine and core.
              </div>
            </motion.div>
            <div className="curr_left">
              <div className="heading_cur1 habit_icon m-0 p-0">
                <img
                  loading="lazy"
                  src="/img/habit2/tiny/legs.jpg"
                  alt="swings"
                  className="img-mobile-2"
                  height={110}
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="curr_right d-flex d-sm-block align-content-center flex-wrap"
            >
              <div className="heading_cur1">Swing 5 - Leg-targeted swings</div>
              <div className="heading_cur3">Swings that target the legs.</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SectionThree;
