/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";
function ComingSoon() {
  return (
    <div>
      <div className="page-wrapper">
        {/* Preloader */}
        <div className="preloader" />
        <section
          className="comming-soon"
          style={{ backgroundImage: "url(images/background/pattern-3.png)" }}
        >
          <div className="auto-container">
            <div className="content">
              <div className="content-inner">
                <div className="logo">
                  <Link href="/">
                    <img src="images/logo-3.png" alt="" />
                  </Link>
                </div>
                <h1>Coming Soon</h1>
                <div className="time-counter">
                  <div
                    className="time-countdown clearfix"
                    data-countdown="2020/12/30"
                  />
                </div>
                <div className="miss">Don’t miss our news and updates!</div>
                {/*Emailed Form*/}
                <div className="emailed-form">
                  <form method="post" action="contact.html">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        defaultValue
                        placeholder="Enter your Email"
                        required
                      />
                      <button
                        type="submit"
                        className="theme-btn btn-style-three"
                      >
                        <span className="txt">Submit</span>
                      </button>
                    </div>
                  </form>
                </div>
                {/* Social Box */}
                <div className="social-box">
                  <a href="#" className="fa fa-facebook-square" />
                  <a href="#" className="fa fa-twitter-square" />
                  <a href="#" className="fa fa-linkedin-square" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*End pagewrapper*/}
      {/*Scroll to top*/}
      <div className="scroll-to-top scroll-to-target" data-target="html">
        <span className="fa fa-arrow-circle-up" />
      </div>
    </div>
  );
}

export default ComingSoon;
