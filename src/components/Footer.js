import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { darkMode } =
    useContext(ThemeContext);

  return (
    <footer
      className={
        darkMode
          ? "footer footer-dark"
          : "footer footer-light"
      }
    >
      <div className="footer-container">
        
        {/* Logo & About */}
        <div className="footer-section">
          <h2 className="footer-logo">
            ShopEasy
          </h2>

          <p className="footer-text">
            Discover amazing products
            with the best prices,
            secure payment, and fast
            delivery services.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>Email: support@shopeasy.com</p>

          <p>Phone: +91 9392559600</p>

          <p>Location: India</p>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>

          <p>Fast Delivery</p>

          <p>24/7 Customer Support</p>

          <p>Secure Payment</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 ShopEasy. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;