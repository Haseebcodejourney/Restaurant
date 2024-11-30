import React from "react";
import { Link } from "react-router-dom"; // Ensure this is correct
import "../style/footer/style.css";

export default function Footer() {
  return (
    <>
      <section className=" footer-wrapper">
        <div className="footer-wrapper-inner">
          <figure>
            <img
              src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo10/wp-content/uploads/sites/10/2021/01/logo-white.png"
              alt="Footer Logo"
              width={115}
              height={75}
            />
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
