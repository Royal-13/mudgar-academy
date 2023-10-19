import React from "react";
import { motion } from "framer-motion";
type Props = {};
function Testimonial({}: Props) {
  return (
    <div id="people" className="white_block people">
      <h3 className="brown_heading text-center mb-2">People are saying</h3>
      <h5 className="text-center review_location  mb-4 ln-23">
        1200+ people have already completed the Movement With Mudgar
      </h5>
      <div className="row">
        <div className="col-sn-12 col-nd-5 col-lg-4">
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="highlight_review_mobile"
          >
            <div className="highlight_review text-center mt-0">
              <div className="review">Highlighted review</div>
              <img
                loading="lazy"
                className="review_img"
                src="/img/testimonials/vipin.jpeg"
                alt="People"
              />
              <div className="review_name">Vipina Sinha</div>
              <div className="review_location"></div>
              <div>
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
              </div>
              <div className="review_detail show-read-more">
                Mudgar practice has worked for me. I had not done any exercise
                in the last 10 year and was looking to start exercising again.
                Tried martial art warm-ups but my hamstring got pulled on the
                first day, tried yoga training and damaged by knee while
                stretching, then setup a gym at home for light weight training
                and tore my shoulder muscle and couldnt do any exercise for 4
                months. Had developed problem in lower back as well. Have been
                practicing Mudgar following your training with disciple since a
                month and have been improving daily. My hand grip has improved,
                whole arms are developing nicely and also my core is becoming
                stronger. Thank you.
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="highlight_review_desktop mt-0"
          >
            <div className="highlight_review text-center mt-0">
              <div className="review">Highlighted review</div>
              <img
                loading="lazy"
                className="review_img"
                src="/img/testimonials/vipin.jpeg"
                alt="People"
              />
              <div className="review_name">Vipina</div>
              <div className="review_location"></div>
              <div>
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
              </div>
              <div className="review_detail show-read-more">
                Mudgar practice has worked for me. I had not done any exercise
                in the last 10 year and was looking to start exercising again.
                Tried martial art warm-ups but my hamstring got pulled on the
                first day, tried yoga training and damaged by knee while
                stretching, then setup a gym at home for light weight training
                and tore my shoulder muscle and couldn&apos;t do any exercise for 4
                months. Had developed problem in lower back as well. Have been
                practicing Mudgar following your training with disciple since a
                month and have been improving daily. My hand grip has improved,
                whole arms are developing nicely and also my core is becoming
                stronger. Thank you.
              </div>
            </div>
          </motion.div>
        </div>
        <div className="col-sn-12 col-nd-7 col-lg-8">
          <div id="one" className="testimonial active">
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="people_block"
            >
              <img
                loading="lazy"
                className="person"
                src="/img/review_images/new/kavita_reddy.png"
                alt="People"
                width={100}
                height={100}
              />
              <div className="name_star">
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                {/* <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                /> */}
                {/* <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                /> */}
              </div>
              <div className="name">Kavita Reddy</div>
              <div className="place">27, West Bengal</div>
            </motion.div>
            <div className="detail show-read-more">
              As a busy professional, I had neglected my health. But thanks to
              'Movement with Mudgar,' I've found a perfect balance. This class
              has not only improved my fitness but also my work-life balance.
              I'm forever grateful.
            </div>
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="people_block"
            >
              <img
                loading="lazy"
                className="person"
                src="/img/review_images/new/sanjay_mehta.png"
                alt="People"
                width={100}
                height={100}
              />
              <div className="name_star">
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                {/* <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                /> */}
              </div>
              <div className="name">Sanjay Mehta </div>
              <div className="place">25, Noida</div>
            </motion.div>
            <div className="detail show-read-more">
              My journey with 'Movement with Mudgar' under the mentorship of
              best has been a revelation. It has not only improved my physical
              strength but also my mental clarity. This program is a
              life-changer!
            </div>
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="people_block"
            >
              <img
                loading="lazy"
                className="person"
                src="/img/review_images/new/nitin_sharma.jpg"
                alt="People"
                width={100}
                height={100}
              />
              <div className="name_star">
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                {/* <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                /> */}
              </div>
              <div className="name">Nitin Sharma</div>
              <div className="place">32, Mumbai</div>
            </motion.div>
            <div className="detail show-read-more">
              I've always been skeptical about online fitness programs, but
              Anjit's 'Movement with Mudgar' won me over. I'm fitter and more
              confident now.
            </div>
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="people_block"
            >
              <img
                loading="lazy"
                className="person"
                src="/img/review_images/new/rajeev_kapoor.png"
                alt="People"
                width={100}
                height={100}
              />
              <div className="name_star">
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                />
                {/* <img
                  loading="lazy"
                  src="/img/star.png"
                  alt="Star"
                  width={20}
                  height={19}
                /> */}
              </div>
              <div className="name">Rajiv Kapoor</div>
              <div className="place">42, Delhi</div>
            </motion.div>
            <div className="detail show-read-more">
              Movement with Mudgar' came into my life when I needed it the most.
              I'm stronger, healthier, and happier thanks for his guidance.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
