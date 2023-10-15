import React from "react";

type Props = {};

function Host({}: Props) {
  return (
    <div id="about" className="white_block_no_padding about">
      <div id="about-1" className="white_block about-1 text-center">
        <h4 className="brown_heading py-3">Our Hosts</h4>
        <div className="row " id="pad-1">
          <div className="col-md-6">
            <div className="card mb-4">
              <a href="/hostdetails">
                <img
                  loading="lazy"
                  src="/img/faqs/anjit.jpg"
                  alt="Host 1"
                  className="about_img "
                />
              </a>
              <div className="card-body">
                <a href="/hostdetails">
                  <h3 className="brown_heading_1">Anjit Suhag</h3>
                </a>
                <p className="about_text">Founder</p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-4">
              <a href="/hostdetails">
                <img
                  loading="lazy"
                  src="/img/faqs/jyotsana.jpeg"
                  alt="Host 2"
                  className="about_img "
                />
              </a>
              <div className="card-body">
                <a href="/hostdetails">
                  <h3 className="brown_heading_1">Jyotsana</h3>
                </a>
                <p className="about_text">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Host;
