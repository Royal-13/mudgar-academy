import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  session?: boolean;
};

function Header({session}: Props) {
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const logout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (!error) {
      location.reload();
    }
  }
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between my-1 px-4">
        <h1 className="logo">
          <a href="/">
            <img
              loading="lazy"
              src="/img/mudgaracademylogo.png"
              alt="Logo"
              width="200px"
              height="50px"
            />
          </a>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a
                className="nav-link scrollto menu-btn"
                data-menu="shop"
                href="https://mudgarclub.com/"
                target=""
              >
                Our Shop
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto menu-btn"
                data-menu="benefit"
                href="/#benefits"
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto menu-btn"
                data-menu="faq"
                href="/#faq"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto menu-btn"
                data-menu="about"
                href="/#about"
              >
                About
              </a>
            </li>
            {session ? (
              <li>
              <button
                className="nav-link scrollto menu-btn"
                data-menu="login"
                onClick={logout}
              >
                Logout
              </button>
            </li>
            ):(
              <li>
              <button
                className="nav-link scrollto menu-btn"
                data-menu="login"
                onClick={() => {router.push("/login")}}
              >
                Login
              </button>
            </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
