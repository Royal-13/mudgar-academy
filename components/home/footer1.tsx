import React from "react";
import styles1 from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";

type Props = {};

function Footer1({}: Props) {
  return (
    <div className="footer-body">
    <footer className={styles1.footer}>
      <div className={styles1['footer__addr']}>
        <img className={styles1['footer__logo']} src="/img/mudgaracademylogo.png"/>
        {/* <h1 className={styles1['footer__logo']}>Something</h1> */}
        <h2 className={styles1['footer-h2']}>Visit Us</h2>
        <address className={styles1['footer-address']}>
        59 Pritam Road, Dalanwala, Dehradun ,<br/> 
        Uttarakhand, 248001
          <br />
          {/* <a className={styles1['footer__btn']} href="mailto:example@gmail.com">
            Email Us
          </a> */}
        </address>
      </div>
      <ul className={styles1['footer__nav']}>
        <li className={styles1['nav__item']}>
          <h2 className={styles1['nav__title']}>Quick links</h2>
          <ul className={styles1['nav__ul']}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
          </ul>
        </li>
        <li className={styles1['nav__item'] + ' ' + styles1['nav__item--extra']}>
          <h2 className={styles1['nav__title']}>Pages</h2>
          <ul className={styles1['nav__ul'] + ' ' + styles1['nav__ul--extra']}>
            <li>
              <a href="https://mudgarclub.com/p/aboutus">Contact </a>
            </li>
            <li>
              <a href="https://mudgarclub.com/policy?page_type=3">Privacy Policy</a>
            </li>
            <li>
              <a href="https://mudgarclub.com/policy?page_type=1">Terms & Conditions</a>
            </li>
          </ul>
        </li>
        {/* <li className={styles1['nav__item']}>
          <h2 className={styles1['nav__title']}>Legal</h2>
          <ul className={styles1['nav__ul']}>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li> */}
      </ul>
      <div className={styles1.legal}>
        <p>© 2023 . All rights reserved.</p>
        {/* <div className={styles1['legal__links']}>
          <span>
            Made with <span className={styles1.heart}>♥</span> by Czar
          </span>
        </div> */}
      </div>
      <div className={styles1.socialIcons}>
          <a
            href="https://youtube.com/@MudgarClub?si=itOu-qmO42WkGxpz"
            className={styles1.socialIcon}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://youtube.com/@MudgarClub?si=itOu-qmO42WkGxpz"
            className={styles1.socialIcon}
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href="https://instagram.com/mudgarclub?igshid=MzRlODBiNWFlZA=="
            className={styles1.socialIcon}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
    </footer>
    </div>
  );
}

export default Footer1;
