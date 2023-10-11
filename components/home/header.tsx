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
              src="/img/mudgarclub_logo.jpg"
              alt="Logo"
              width="70px"
              height="70px"
            />
          </a>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a
                className="nav-link scrollto menu-btn"
                data-menu="benefit"
                href="/courses"
                target=""
              >
                Courses
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto menu-btn"
                data-menu="benefit"
                href="#benefits"
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto menu-btn"
                data-menu="faq"
                href="#faq"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto menu-btn"
                data-menu="about"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              {" "}
              <a
                className="nav-link scrollto register-now register-now-track-btn"
                data-btn="top-bar"
                href="#register_form"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
