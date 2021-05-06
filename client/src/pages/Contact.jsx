/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      {/* Page Title */}
      <section className="page-title">
        <div className="auto-container">
          <h1>Contact Us</h1>
          {/* Search Boxed */}
          <div className="search-boxed">
            <div className="search-box">
              <form method="post" action="contact.html">
                <div className="form-group">
                  <input
                    type="search"
                    name="search-field"
                    defaultValue
                    placeholder="What do you want to learn?"
                    required
                  />
                  <button type="submit">
                    <span className="icon fa fa-search" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*End Page Title*/}
      {/* Contact Page Section */}
      <section className="contact-page-section">
        <div
          className="patern-layer-one paroller"
          data-paroller-factor="0.40"
          data-paroller-factor-lg="0.20"
          data-paroller-type="foreground"
          data-paroller-direction="vertical"
          style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
        />
        <div
          className="patern-layer-two paroller"
          data-paroller-factor="0.40"
          data-paroller-factor-lg="-0.20"
          data-paroller-type="foreground"
          data-paroller-direction="vertical"
          style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
        />
        <div className="auto-container">
          <div className="inner-container">
            {/* Sec Title */}
            <div className="sec-title centered">
              <h2>
                <a href="http://idioms.in/in-touch/">Get in touch</a>
              </h2>
            </div>
            {/* Contact Form */}
            <div className="contact-form">
              {/* Profile Form */}
              <form method="post" action="sendemail.php" id="contact-form">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="username"
                      placeholder="First Name*"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name*"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      required
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number*"
                      required
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea
                      className
                      name="message"
                      placeholder="Send Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 form-group text-right">
                    <button
                      className="theme-btn btn-style-three"
                      type="submit"
                      name="submit-form"
                    >
                      <span className="txt">
                        Send Message <i className="fa fa-angle-right" />
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Contact Info Section */}
          <div className="contact-info-section">
            <div className="title-box">
              <h2>Contact Information</h2>
              <div className="text">
                Lorem Ipsum is simply dummy text of the printing <br /> and
                typesetting industry.
              </div>
            </div>
            <div className="row clearfix">
              {/* Info Column */}
              <div className="info-column col-lg-4 col-md-6 col-sm-12">
                <div className="info-inner">
                  <div className="icon fa fa-phone" />
                  <strong>Phone</strong>
                  <ul>
                    <li>
                      <a href="tel:+1-123-456-7890">+1 (123) 456-7890</a>
                    </li>
                    <li>
                      <a href="tel:+1-123-456-7890">+1 (123) 456-7890</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Info Column */}
              <div className="info-column col-lg-4 col-md-6 col-sm-12">
                <div className="info-inner">
                  <div className="icon fa fa-envelope-o" />
                  <strong>Email</strong>
                  <ul>
                    <li>
                      <a href="mailto:info@yourcompany.com">
                        info@yourcompany.com
                      </a>
                    </li>
                    <li>
                      <a href="mailto:infobootcamp@gmail.com">
                        infobootcamp@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Info Column */}
              <div className="info-column col-lg-4 col-md-6 col-sm-12">
                <div className="info-inner">
                  <div className="icon fa fa-map-marker" />
                  <strong>Address</strong>
                  <ul>
                    <li>
                      Portfolio Technology 07, Capetown 12 Road, Chicago, 2436,
                      USA
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Page Section */}
      {/* Map Section */}
      <section className="map-section">
        {/* Map Boxed */}
        <div className="map-boxed">
          {/*Map Outer*/}
          <div className="map-outer">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      {/* End Map Section */}
    </div>
  );
}
export default Contact;
