import React from "react";
type Props = {};
function SectionFour({}: Props) {

return (
    <div id="included" className="Included">
    <div className="container">
        <div className="row">
          <div className="col-lg-9">
    <div id="who" className="white_block who ">
        <h3 className="brown_heading py-3">Who is this for? <img loading="lazy" src="/img/who/green_tick.webp" /></h3>
        <div className="row">
          <div className="col-lg-6">
            <img loading="lazy" src="/img/who/16.webp" alt="healthy" height={50} />
            <h3 className="heading_who px-md-3">For Working Professionals</h3>
            <div className="text_who px-2 px-md-3">If you have a busy schedule and no time to focus on your health, this
              course is perfect for you. By committing just 45 minutes a day, you can transform into a fitter and
              healthier you.</div>
          </div>
          <div className="col-lg-6">
            <img loading="lazy" src="/img/who/15_new.png" alt="healthy" height={50} />
            <h3 className="heading_who px-md-3">For Homemakers</h3>
            <div className="text_who px-2 px-md-3">Are you always taking care of others but forget to prioritize your own fitness? It's
              time to focus on yourself so that you can better support your family.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img loading="lazy" src="/img/who/14.webp" alt="healthy" height={50} />
            <h3 className="heading_who px-md-3">For Students Wanting <span>Better Focus</span></h3>
            <div className="text_who px-2 px-md-3">An active mind is essential for better studies. 45 minutes of
              active training can give you a high level of energy to accomplish your goals in studies.
            </div>
          </div>
          <div className="col-lg-6">
            <img loading="lazy" src="/img/who/13.webp" alt="healthy" height={50} />
            <h3 className="heading_who px-md-3">For Parents</h3>
            <div className="text_who px-2 px-md-3">Parents are the first idol of any child. This course is the best way to set an example for
              your child's fitness journey while keeping you active as a parent to match their energy levels.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img loading="lazy" src="/img/who/12.webp" alt="healthy" height={50} />
            <h3 className="heading_who px-md-3">For Teenagers &amp; Young Adults</h3>
            <div className="text_who px-2 px-md-3">The course is designed to help you lead a fitter and healthier lifestyle.
              The 3-month program will help you think about fitness beyond just physique.
            </div>
          </div>
          <div className="col-lg-6">
            <img loading="lazy" src="/img/who/athlete.webp" alt="healthy" height={50} />
            <h3 className="heading_who px-md-3">For Gym professionals and athletes</h3>
            <div className="text_who px-2 px-md-3">Mudgar increases the range of motion and mobility,
              strengthens joints, and helps in doing injury-free workouts.
            </div>
          </div>
        </div>
      </div>
      <div id="who_not" className="white_block who">
        <h3 className="brown_heading py-3 mb-0">Who this program
          is not for <img loading="lazy" src="/img/not_for/red_cross.webp" /></h3>
        {/* <h5 class="mb-4">The meal plan followed in this challenge will <u><strong>not</strong></u> be sufficient for:</h5> */}
        <div className="row">
          <div className="col-lg-6 d-block d-sm-flex align-items-center justify-content-center justify-content-sm-start pb-3 pb-sm-0">
            <img loading="lazy" src="/img/not_for/1.webp" alt="healthy" width={60} />
            <h3 className="heading_who ps-2">Pregnant women in<br />their third trimester</h3>
          </div>
          <div className="col-lg-6 d-block d-sm-flex align-items-center justify-content-center justify-content-sm-start pb-3 pb-sm-0">
            <img loading="lazy" src="/img/not_for/2.webp" alt="healthy" width={60} />
            <h3 className="heading_who ps-2">Elderly citizens with<br />chronic diseases</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 d-block d-sm-flex align-items-center justify-content-center justify-content-sm-start pb-3 pb-sm-0">
            <img loading="lazy" src="/img/not_for/3.webp" alt="healthy" width={60} />
            <h3 className="heading_who ps-2">Children under<br /> age of 14</h3>
          </div>
          <div className="col-lg-6 d-block d-sm-flex align-items-center justify-content-center justify-content-sm-start pb-3 pb-sm-0">
            <img loading="lazy" src="/img/not_for/gym.webp" alt="healthy" width={60} />
            <h3 className="heading_who ps-2">Individuals focused<br />on muscle gain</h3>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
}
export default SectionFour;