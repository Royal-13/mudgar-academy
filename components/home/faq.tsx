import React from "react";
type Props = {};
function FAQ({}: Props) {
  return (
    <div id="faq" className="white_block text-center faq">
      <div className="faq_mobile">
        <img
          loading="lazy"
          className="img-fluid"
          srcSet="/img/faqs/tiny/faq-image.webp 480w,/img/faqs/tiny/faq-image.webp 800w"
          sizes="(max-width: 600px) 480px, 800px"
          src="/img/faqs/tiny/faq-image.webp"
          id="faq_image"
        />
      </div>
      <h3 className="brown_heading py-3">FAQs</h3>
      <div className="faq_desktop">
        <img
          loading="lazy"
          className="img-fluid"
          srcSet="/img/faqs/tiny/faq-image.webp 480w,/img/faqs/tiny/faq-image.webp 800w"
          sizes="(max-width: 600px) 480px, 800px"
          src="/img/faqs/tiny/faq-image.webp"
        />
      </div>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading1">
            <button
              className="accordion-button "
              data-q_no={1}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-expanded="true"
              aria-controls="collapse1"
            >
              Can mudgar swings help with weight loss?{" "}
            </button>
          </h2>
          <div
            id="collapse1"
            className="accordion-collapse collapse show"
            aria-labelledby="heading1"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes, consistent and regular mudgar swings can aid in weight loss.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading2">
            <button
              className="accordion-button collapsed"
              data-q_no={2}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2"
              aria-expanded="true"
              aria-controls="collapse2"
            >
              Is it safe for someone with back pain to do mudgar?{" "}
            </button>
          </h2>
          <div
            id="collapse2"
            className="accordion-collapse collapse "
            aria-labelledby="heading2"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes, mudgar is safe for people with back pain and assists in
              strengthening the back to alleviate persistent pain.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading3">
            <button
              className="accordion-button collapsed"
              data-q_no={3}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse3"
              aria-expanded="true"
              aria-controls="collapse3"
            >
              Does mudgar include a lower body workout?{" "}
            </button>
          </h2>
          <div
            id="collapse3"
            className="accordion-collapse collapse "
            aria-labelledby="heading3"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes, mudgar strengthens and improves the range of motion and
              mobility of the entire body.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading4">
            <button
              className="accordion-button collapsed"
              data-q_no={4}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse4"
              aria-expanded="true"
              aria-controls="collapse4"
            >
              Is the weight assigned to mudgar movements appropriate for men and
              women?{" "}
            </button>
          </h2>
          <div
            id="collapse4"
            className="accordion-collapse collapse "
            aria-labelledby="heading4"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes, the weight assigned to mudgar movements is suitable for
              someone who is starting theirjourney with mudgar.{" "}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="heading5">
            <button
              className="accordion-button collapsed"
              data-q_no={5}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse5"
              aria-expanded="true"
              aria-controls="collapse5"
            >
              How much time will it take for mudgar to reach ?{" "}
            </button>
          </h2>
          <div
            id="collapse5"
            className="accordion-collapse collapse "
            aria-labelledby="heading5"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              It will take 7-15days depending on the location.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading6">
            <button
              className="accordion-button collapsed"
              data-q_no={6}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse6"
              aria-expanded="true"
              aria-controls="collapse6"
            >
              What is pre course fitness requirement to start this course?{" "}
            </button>
          </h2>
          <div
            id="collapse6"
            className="accordion-collapse collapse "
            aria-labelledby="heading6"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              There is no pre requirement as such, one can start their fitness
              journey with us.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading7">
            <button
              className="accordion-button collapsed"
              data-q_no={7}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse7"
              aria-expanded="true"
              aria-controls="collapse7"
            >
              Is mudgar included in course fees ?{" "}
            </button>
          </h2>
          <div
            id="collapse7"
            className="accordion-collapse collapse "
            aria-labelledby="heading7"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes, u shall be delivered mudgar once you register for the course.
              3kgs for women and 5kgs for men.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading8">
            <button
              className="accordion-button collapsed"
              data-q_no={8}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse8"
              aria-expanded="true"
              aria-controls="collapse8"
            >
              How many times should we practice mudgar in a day after the class?{" "}
            </button>
          </h2>
          <div
            id="collapse8"
            className="accordion-collapse collapse "
            aria-labelledby="heading8"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              There is no need to practice as 45mins of 1 mudgar session is
              perfect for one day.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading9">
            <button
              className="accordion-button collapsed"
              data-q_no={9}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse9"
              aria-expanded="true"
              aria-controls="collapse9"
            >
              Do we have to follow a particular diet while learning Mudgar
              swings?{" "}
            </button>
          </h2>
          <div
            id="collapse9"
            className="accordion-collapse collapse "
            aria-labelledby="heading9"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              No, one can continue with their normal diet.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading10">
            <button
              className="accordion-button collapsed"
              data-q_no={10}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse10"
              aria-expanded="true"
              aria-controls="collapse10"
            >
              What if we miss the class due to some work? {" "}
            </button>
          </h2>
          <div
            id="collapse10"
            className="accordion-collapse collapse "
            aria-labelledby="heading10"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            That’s not an issue as u shall be provided with the recorded session of every class for 3months of the course.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="heading11">
            <button
              className="accordion-button collapsed"
              data-q_no={11}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse11"
              aria-expanded="true"
              aria-controls="collapse11"
            >
              Is the weight assigned to mudgar movements appropriate for men and
              women?{" "}
            </button>
          </h2>
          <div
            id="collapse11"
            className="accordion-collapse collapse "
            aria-labelledby="heading11"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes, the weight assigned to mudgar movements is suitable for
              someone who is starting theirjourney with mudgar.{" "}
            </div>
          </div>
        </div>
        {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="heading5">
                      <button className="accordion-button collapsed" data-q_no={5} type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                        What are the charges for this course? </button>
                    </h2>
                    <div id="collapse5" className="accordion-collapse collapse " aria-labelledby="heading5" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        The charges for this workshop are 590 rupees (500 rupees + GST). </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading6">
                      <button className="accordion-button collapsed" data-q_no={6} type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                        Is it necessary to join through a laptop? Can I join using my phone? </button>
                    </h2>
                    <div id="collapse6" className="accordion-collapse collapse " aria-labelledby="heading6" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Yes, you can join using your phone. However, it is advisable to join using a laptop for the best learning experience. </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading7">
                      <button className="accordion-button collapsed" data-q_no={7} type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                        When will I receive the confirmation email? </button>
                    </h2>
                    <div id="collapse7" className="accordion-collapse collapse " aria-labelledby="heading7" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        As soon as you register you will receive an email and a whatsapp message with the confirmation details. </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading8">
                      <button className="accordion-button collapsed" data-q_no={8} type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="true" aria-controls="collapse8">
                        What if I miss any session? </button>
                    </h2>
                    <div id="collapse8" className="accordion-collapse collapse " aria-labelledby="heading8" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        Please do not worry, if you miss any session, you can continue from the next session. We share detailed notes for each session on our dashboard, you can study them and stay up to date. </div>
                    </div>
                  </div> */}
        {/* <a class="load_more" id="load" href="#">Load More</a> */}
      </div>
    </div>
  );
}
export default FAQ;
