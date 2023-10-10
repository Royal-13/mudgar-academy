import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between my-1 px-4">
        <h1 className="logo">
          <a href="index.html">
            <img
              loading="lazy"
              src="resources/img/doit"
              alt="Logo"
              width="250px"
              height="250px"
            />
          </a>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a
                className="nav-link scrollto menu-btn"
                data-menu="benefit"
                href="/"
                target="_blank"
              >
                Workshop Login
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto menu-btn"
                data-menu="benefit"
                href="index.html#benefits"
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto menu-btn"
                data-menu="faq"
                href="index.html#faq"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto menu-btn"
                data-menu="about"
                href="index.html#about"
              >
                About
              </a>
            </li>
            <li>
              {" "}
              <a
                className="nav-link scrollto register-now register-now-track-btn"
                data-btn="top-bar"
                href="index.html#register_form"
              >
                Register Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
