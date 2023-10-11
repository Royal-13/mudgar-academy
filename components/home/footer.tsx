import React from "react";
type Props = {};
function Footer({ }: Props) {

  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 footer_column_1">
            <a href="index.html"><img loading="lazy" src="" alt="icon" width={225} height="" /></a>
            <p className="copyright1 mt-4">©2022 Mudgar | <a href="https://mudgarclub.com/policy?page_type=3" target="_blank">Privacy Policy</a></p>
          </div>
          <div className="content-uhc" style={{ display: 'none' }}>
            <div className="col-lg-3 col-md-6 footer_column_2">
            </div>
            <div className="col-lg-3 col-md-6 footer_column_3">
              <div className="social_media d-none">
                <a href="https://www.facebook.com/"><img loading="lazy" src="resources/img/fb.png" alt="social" width={100} height={100} /></a>
                <a href="https://www.instagram.com/"><img loading="lazy" src="resources/img/sm.png" alt="social" width={100} height={100} /></a>
                <a href="https://www.youtube.com/"><img loading="lazy" className="yt" src="resources/img/yt.png" alt="social" width={100} height={100} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;