import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BenefitsSection({}: Props) {
  return (
    <div id="benefits" className=" text-center">
      <motion.h3
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="brown_heading py-3"
      >
        BENEFITS YOU GET <span className="gray">by swinging mudgar</span>
      </motion.h3>
      <div className="benefits_block">
        <div className="row">
          <div className="col-lg-4 col-6">
            <div className="benefits_block_content">
              <img
                loading="lazy"
                className="img-fluid"
                srcSet="/img/benifits/tiny2/active start.jpg 480w,/img/benifits/tiny2/active start.jpg 800w"
                sizes="(max-width: 600px) 480px, 800px"
                src="/img/benifits/tiny2/active start.jpg"
              />
              <div className="benefits_desc">
                <div>Active start</div>
                <div>
                  <strong>to the day</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-6">
            <div className="benefits_block_content">
              <img
                loading="lazy"
                className="img-fluid"
                srcSet="/img/benifits/tiny2/strength.jpg 480w,/img/benifits/tiny2/strength.jpg 800w"
                sizes="(max-width: 600px) 480px, 800px"
                src="/img/benifits/tiny2/strength.jpg"
              />
              <div className="benefits_desc">
                <div>
                  Overall body
                  <strong />
                </div>
                <strong>strength</strong>
                <div>
                  <strong />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-6">
            <div className="benefits_block_content">
              <img
                loading="lazy"
                className="img-fluid"
                srcSet="/img/benifits/tiny2/motion.jpg 480w,/img/benifits/tiny2/motion.jpg 800w"
                sizes="(max-width: 600px) 480px, 800px"
                src="/img/benifits/tiny2/motion.jpg"
              />
              <div className="benefits_desc">
                <div>
                  Increased range<strong> of motion</strong>{" "}
                </div>
                <div> and mobility</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-6">
            <div className="benefits_block_content">
              <img
                loading="lazy"
                className="img-fluid"
                srcSet="/img/benifits/tiny2/body.jpg 480w,/img/benifits/tiny2/body.jpg 800w"
                sizes="(max-width: 600px) 480px, 800px"
                src="/img/benifits/tiny2/body.jpg"
              />
              <div className="benefits_desc">
                <div>
                  Better<strong> body</strong>
                </div>
                <div>
                  <strong> posture </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-6">
            <div className="benefits_block_content benefits_block_content_middle pt-0">
              <img
                loading="lazy"
                className="img-fluid"
                srcSet="/img/benifits/tiny2/mind.jpg 480w,/img/benifits/tiny2/mind.jpg 800w"
                sizes="(max-width: 600px) 480px, 800px"
                src="/img/benifits/tiny2/mind.jpg"
              />
              <div className="benefits_desc">
                <div>Better mind and</div>
                <div>
                  <strong> body coordination</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-6">
            <div className="benefits_block_content">
              <img
                loading="lazy"
                className="img-fluid"
                srcSet="/img/benifits/tiny2/freedom.jpg 480w,/img/benifits/tiny2/freedom.jpg 800w"
                sizes="(max-width: 600px) 480px, 800px"
                src="/img/benifits/tiny2/freedom.jpg"
              />
              <div className="benefits_desc">
                <div>
                  Freedom<strong> of</strong>
                </div>
                <div>
                  <strong> movement</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
