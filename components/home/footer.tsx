import React from "react";
type Props = {};
function Footer({ }: Props) {

  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 footer_column_1">
            <a href="/"><img loading="lazy" src="/img/mudgaracademylogo.png" alt="icon" width={200} height={50} /></a>
            <p className="copyright1 mt-4">©2022 Mudgar | <a href="https://mudgarclub.com/policy?page_type=3" target="_blank">Privacy Policy</a></p>
          </div>
          <div className="content-uhc" style={{ display: 'none' }}>
            <div className="col-lg-3 col-md-6 footer_column_2">
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;