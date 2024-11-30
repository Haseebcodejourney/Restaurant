import React from "react";
import { Link } from "react-router-dom"; // Ensure this is correct
import "../style/footer/style.css";
// import Logo from "../assets/images/EveLogo.webp";

export default function Footer() {
  return (
    <>
      <section className=" footer-wrapper">
        <div className="footer-wrapper-inner">
          <figure>
            {/* <img
              src={Logo}
              alt="Footer Logo"
              width={115}
              height={75}
            /> */}
          </figure>
          <div className="page-wrapper">
            <div className="items-list">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/menu">Our Menus</Link>
                </li>
                <li>
                  <Link to="/locate">Locate</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="under-detail">
              <span className="copy-right">
                Copyright Near-East All Right Reserved.
              </span>
              <div className="btn-wrapper">
                <a>Order Online</a>
                <a>Reservation</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
