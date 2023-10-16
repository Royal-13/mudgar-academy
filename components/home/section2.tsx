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
                y:0}} loading="lazy" className="rounded-whats-img" srcSet="/img/whats/tiny_v3/mudgar.webp 480w,/img/whats/tiny_v3/mudgar.webp 800w" sizes="(max-width: 600px) 480px, 800px" src="/img/whats/tiny_v3/mudgar.webp" />
              <div className="include_details_bg">
                <h4>COMPLEMENTARY MUDGAR</h4>
                <div className="include_text">As part of this course, a mudgar weighing 5-6kgs will be provided to men, and a mudgar weighing 3-4kgs will be provided to women, so you don't have to buy it separately.</div>
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
                y:0}} loading="lazy"className="rounded-whats-img" srcSet="/img/whats/tiny_v3/45min.webp 480w,/img/whats/tiny_v3/45min.webp 800w" sizes="(max-width: 600px) 480px, 800px" src="/img/whats/tiny_v3/45min.webp" />
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
                y:0}} loading="lazy" className="rounded-whats-img" srcSet="/img/whats/tiny_v3/3.webp 480w,/img/whats/tiny_v3/3.webp 800w" sizes="(max-width: 600px) 480px, 800px" src="/img/whats/tiny_v3/3.webp" />
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
                y:0}} loading="lazy" className="rounded-whats-img" srcSet="/img/whats/tiny_v3/community.webp 480w,/img/whats/tiny_v3/community.webp 800w" sizes="(max-width: 600px) 480px, 800px" src="/img/whats/tiny_v3/community.webp" />
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
                y:0}} loading="lazy" className="rounded-whats-img" srcSet="/img/whats/tiny_v3/Maintainance.webp 480w,/img/whats/tiny_v3/Maintainance.webp 800w" sizes="(max-width: 600px) 480px, 800px" src="/img/whats/tiny_v3/Maintainance.webp" />
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