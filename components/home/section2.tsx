import React from "react";
import {motion} from 'framer-motion';
type Props = {};
function SectionTwo({ }: Props) {

  return (


    <div className="row">
      <div className="col-lg-9">
        <div className="white_block white_block_transparent count_block_whiteblock">
          <h3 className="brown_heading whats_head py-3">What's Included?</h3>
          <div className="include_details">
            <div>
              <motion.img 
                initial={{y:-300,
                opacity:0}}
                transition={{duration:1.2}}
                whileInView={{opacity:1,
                y:0}} loading="lazy" className="rounded-whats-img" srcSet="/img/whats/tiny_v3/mudgar1.jpg 480w,/img/whats/tiny_v3/mudgar1.jpg 800w" sizes="(max-width: 600px) 480px, 800px" src="/img/whats/tiny_v3/mudgar1.jpg" />
              <div className="include_details_bg">
                <h4>COMPLEMENTARY MUDGAR</h4>
                <div className="include_text">Your mudgar will be delivered at your given address in 12-15 days.</div>
              </div>
            </div>
          </div>
          <div className="include_details">
            <div>
              <motion.img 
                initial={{y:-300,
                opacity:0}}
                transition={{duration:1.2}}
                whileInView={{opacity:1,
                y:0}} loading="lazy"className="rounded-whats-img" srcSet="/img/whats/tiny_v3/live class1.jpg 480w,/img/whats/tiny_v3/live class1.jpg 800w" sizes="(max-width: 600px) 480px, 800px" src="/img/whats/tiny_v3/live class1.jpg" />
              <div className="include_details_bg">
                <h4>45-MINUTE LIVE CLASS</h4>
                <div className="include_text">For the next three months, a 45-minute live class will be conducted from Monday to Friday.</div>
              </div>
            </div>
          </div>
          <div className="include_details">
            <div>
              <motion.img 
                initial={{y:-300,
                opacity:0}}
                transition={{duration:1.2}}
                whileInView={{opacity:1,
                y:0}} loading="lazy" className="rounded-whats-img" srcSet="/img/whats/tiny_v3/recording.jpg 480w,/img/whats/tiny_v3/recording.jpg 800w" sizes="(max-width: 600px) 480px, 800px" src="/img/whats/tiny_v3/recording.jpg" />
              <div className="include_details_bg">
                <h4>RECORDED SESSIONS OF EVERY CLASS</h4>
                <div className="include_text pb-4">Daily recorded sessions of all classes will be available for the next three months from the start of the course.</div>
              </div>
            </div>
          </div>
          <div className="include_details">
            <div>
              <motion.img 
                initial={{y:-300,
                opacity:0}}
                transition={{duration:1.2}}
                whileInView={{opacity:1,
                y:0}} loading="lazy" className="rounded-whats-img" srcSet="/img/whats/tiny_v3/people1.jpg 480w,/img/whats/tiny_v3/people1.jpg 800w" sizes="(max-width: 600px) 480px, 800px" src="/img/whats/tiny_v3/people1.jpg" />
              <div className="include_details_bg">
                <h4>COMMUNITY OF THOUSANDS OF PEOPLE</h4>
                <div className="include_text">You will have the opportunity to connect and grow with like-minded people and become part of the biggest mudgar club possible for the next three months.</div>
              </div>
            </div>
          </div>
          <div className="include_details">
            <div>
              <motion.img 
                initial={{y:-300,
                opacity:0}}
                transition={{duration:1.2}}
                whileInView={{opacity:1,
                y:0}} loading="lazy" className="rounded-whats-img" srcSet="/img/whats/tiny_v3/maintainance1.jpg 480w,/img/whats/tiny_v3/maintainance1.jpg 800w" sizes="(max-width: 600px) 480px, 800px" src="/img/whats/tiny_v3/maintainance1.jpg" />
              <div className="include_details_bg">
                <h4>MUDGAR MAINTENANCE</h4>
                <div className="include_text">We will teach you how to take care of your mudgar in the long run since it is made of premium quality Mahaghony Wood.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}
export default SectionTwo;