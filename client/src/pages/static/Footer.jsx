/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <>
      <section
        className="call-to-action-section-two"
        style={{ backgroundImage: "url(images/background/3.png)" }}
      >
        <div className="auto-container">
          <div className="content">
            <h2>Ready to get started?</h2>
            <div className="text">
              Replenish him third creature and meat blessed void a fruit
              gathered you’re, they’re two <br /> waters own morning gathered
              greater shall had behold had seed.
            </div>
            <div className="buttons-box">
              <a href="course.html" className="theme-btn btn-style-one">
                <span className="txt">
                  Get Stared <i className="fa fa-angle-right" />
                </span>
              </a>
              <a href="course.html" className="theme-btn btn-style-two">
                <span className="txt">
                  All Courses <i className="fa fa-angle-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Call To Action Section Two */}
      {/*Main Footer*/}
      <footer className="main-footer">
        {/* Pattern Layer */}
        <div
          className="pattern-layer paroller"
          data-paroller-factor="0.60"
          data-paroller-factor-lg="0.20"
          data-paroller-type="foreground"
          data-paroller-direction="vertical"
          style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
        />
        <div
          className="pattern-layer-two"
          data-paroller-factor=" 0.60"
          data-paroller-factor-lg="0.20"
          data-paroller-type="foreground"
          data-paroller-direction="vertical"
          style={{ backgroundImage: "url(images/icons/icon-3.png)" }}
        />
        <div className="auto-container">
          {/* Widgets Section */}
          <div className="widgets-section">
            <div className="row clearfix">
              {/* Big Column */}
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  {/*Footer Column*/}
                  <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                    <div className="footer-widget logo-widget">
                      <div className="logo">
                        <a href="index.html">
                          <img src="images/footer-logo.png" alt="" />
                        </a>
                      </div>
                      <div className="text">
                        Replenish him third creature and meat blessed void a
                        fruit gathered you’re, they’re two waters own morning
                        gathered greater.
                      </div>
                      <div className="social-box">
                        <a href="#" className="fa fa-facebook" />
                        <a href="#" className="fa fa-instagram" />
                        <a href="#" className="fa fa-twitter" />
                        <a href="#" className="fa fa-google" />
                        <a href="#" className="fa fa-pinterest-p" />
                      </div>
                      <div className="copyright">
                        Copyright © 2020 AuburnForest
                      </div>
                    </div>
                  </div>
                  {/*Footer Column*/}
                  <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4>About Us</h4>
                      <ul className="links-widget">
                        <li>
                          <a href="#">Afficiates</a>
                        </li>
                        <li>
                          <a href="#">Partners</a>
                        </li>
                        <li>
                          <a href="#">Reviews</a>
                        </li>
                        <li>
                          <a href="#">Blogs</a>
                        </li>
                        <li>
                          <a href="#">Newsletter</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Big Column */}
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  {/*Footer Column*/}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4>Resource</h4>
                      <ul className="links-widget">
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Support Area</a>
                        </li>
                        <li>
                          <a href="#">Documentations</a>
                        </li>
                        <li>
                          <a href="#">How it works</a>
                        </li>
                        <li>
                          <a href="#">Terms of Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*Footer Column*/}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4>Quick Links</h4>
                      <ul className="links-widget">
                        <li>
                          <a href="#">home</a>
                        </li>
                        <li>
                          <a href="#">About us</a>
                        </li>
                        <li>
                          <a href="#">Features</a>
                        </li>
                        <li>
                          <a href="#">Pricing</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*  End Main Footer */}
    </>
  );
}

export default Footer;
