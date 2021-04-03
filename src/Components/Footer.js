import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Foot = () => {
  return (
    <div id="footer">
      <footer>
      <h3 class="Dmt glow">Deccan Merchants</h3>
        <div class="main-content">
          <div class="left box">
            <h2 class="h2">Deccan Merchants</h2>
            <div class="content">
              <p class="h2">
                Electronic City, outer ring Road <br />
                Bengaluru - 560 035
                <br /> India Ph: +91 (80) 123456
              
              </p>
             
            </div>
          </div>

          <div class="center box">
            <h2 class="h2">Quick Links</h2>
            <div class="content">
              <div class="place">
                <span class="text">
                  <Link to="/aboutus" class="right ">
                    About Us
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <div class="right box">
            <h2 class="h2">Contact us</h2>
            <div class="content">
              <li>
                <Link to="/contact" class="right text1" href="">
                  Contact Us
                </Link>
              </li>
            </div>
          </div>
          <div class="right box">
            <h2 class="h2">Support & Social</h2>
            <div class="content">
              <h6 class="h6">Email Us At</h6>
              <h6>
                <a class="social" href="/">Deccan Merchants@gmail.com</a>
              </h6>

              <hr class="hr " />
              <h6 class="h6"> Follow Us On</h6>
              
              <div class="social">
                <a href="https://facebook.com/coding.np">
                  <span class=" fab fa-facebook-f"></span>
                </a>
                <a href="#">
                  <span class=" soc fab fa-twitter"></span>
                </a>
                <a href="https://instagram.com/coding.np">
                  <span class="soc fab fa-instagram"></span>
                </a>
                <a href="https://youtube.com/c/codingnepal">
                  <span class="soc fab fa-youtube"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="bottom">
          <center>
            <span class="rights">
              Deccan Merchants E-commerce Limitted &copy; 2020 All Rights
              Reserved.
            </span>
          </center>
        </div>
      </footer>
    </div>
  );
};

export default Foot;




