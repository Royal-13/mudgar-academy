import React from "react";
import * as $ from 'jquery';


type Props = {};

function youtubeVideoPlay(id: string | number, link: string) {
    const thumbElement = document.getElementById('thumb_' + id);
    if (thumbElement) {
      thumbElement.innerHTML = `<iframe loading="lazy" width="100%" height="360" src="${link}?autoplay=1" title="YouTube video player" frameborder="0" style="border-radius: 30px; width:636px;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
}
function thankYouPageYoutubeVideoPlay(id: string, link: any) {
    const welcomeVideoElement = document.getElementById('welcome_video_' + id);
    if (welcomeVideoElement) {
      const iframeHeight = welcomeVideoElement.clientHeight;
      welcomeVideoElement.innerHTML = `<iframe loading="lazy" src="${link}?autoplay=1" title="YouTube video player" frameborder="0" style="width: -webkit-fill-available; width: -moz-available; border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; position: relative; top: 7px; height: ${iframeHeight}px;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
  }
  

function Hero({}: Props) {
  return (
    <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-4">
              <h1 id="title">Movement 
                With Mudgar</h1>
              <h2>Basic to intermediate 3 months Mudgar Swings</h2>
              <div>
                <a href="index.html#register_form" id="register_now_btn" className="btn-get-started scrollto register-now-track-btn" data-btn="main-cta">Register Now<img loading="lazy" className="btn_arrow" id="register-arrow" src="resources/img/btn-arrow.png" alt="Arrow" width="20px" height="14px" style={{display: 'none'}} /></a>
              </div>
              <div className="people_joined"><span id="user_count">
                  408 </span> people have already joined</div>
              <div className="gray_line" />
              <div className="countdown_desktop"><div className="counter_block">
                  <div className="counter_block_text">Challenge starting in</div>
                  <div id="clockdiv" className="counter_digit_block">
                    <div className="block"><div className="counter_digit days " /><span>days</span></div>
                    <div className="block"><div className="counter_digit hours" /><span>hours</span></div>
                    <div className="block"><div className="counter_digit minutes" /><span>mins</span></div>
                    <div className="block"><div className="counter_digit seconds" /><span>secs</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-4 main_video pe-0 pe-sm-5 d-flex align-content-end" id="homepageimage">
                <div className="video_container top_video p-0 mx-3 me-sm-5" id="thumb_0">
                <picture>
                <source srcSet="resources/img/yt_thumbnail_test.jpg" style={{ borderRadius: '30px', cursor: 'pointer', textAlign: 'center' }} onClick={() => youtubeVideoPlay(0, 'https://www.youtube.com/embed/V5IebYv2kIw?si=XcRmundmdqoR_ekC')} />
                <source srcSet="resources/img/yt_thumbnail_test.jpg" media="(max-width: 400px)" style={{ borderRadius: '30px', width: '100%', cursor: 'pointer', textAlign: 'center' }} onClick={() => youtubeVideoPlay(0, 'https://www.youtube.com/embed/V5IebYv2kIw?si=XcRmundmdqoR_ekC')} />
                <img loading="eager" id="mobile-width-fix" src="resources/img/yt_thumbnail_test.jpg" style={{ borderRadius: '30px', cursor: 'pointer', textAlign: 'center' }} onClick={() => youtubeVideoPlay(0, 'https://www.youtube.com/embed/V5IebYv2kIw?si=XcRmundmdqoR_ekC')} />
                </picture>
            </div>
        </div>
    </div>
    </div>
    </section>
  )
}
export default Hero;