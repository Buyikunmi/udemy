/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";

function CourseDetail() {
  return (
    <div>
      {/* Page Title */}
      <section className="page-title">
        <div className="auto-container">
          <h1>Course Introduction</h1>
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
      {/* Intro Courses */}
      <section className="intro-section">
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
        <div className="circle-one" />
        <div className="auto-container">
          <div className="sec-title">
            <h2>
              Learn User Interface and <br /> User Experience
            </h2>
          </div>
          <div className="inner-container">
            <div className="row clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Intro Info Tabs*/}
                  <div className="intro-info-tabs">
                    {/* Intro Tabs*/}
                    <div className="intro-tabs tabs-box">
                      {/*Tab Btns*/}
                      <ul className="tab-btns tab-buttons clearfix">
                        <li
                          data-tab="#prod-overview"
                          className="tab-btn active-btn"
                        >
                          Overview
                        </li>
                        <li data-tab="#prod-curriculum" className="tab-btn">
                          Curriculum
                        </li>
                        <li data-tab="#prod-announcement" className="tab-btn">
                          Announcement
                        </li>
                        <li data-tab="#prod-faq" className="tab-btn">
                          FAQ
                        </li>
                        <li data-tab="#prod-reviews" className="tab-btn">
                          Reviews
                        </li>
                      </ul>
                      {/*Tabs Container*/}
                      <div className="tabs-content">
                        {/*Tab / Active Tab*/}
                        <div className="tab active-tab" id="prod-overview">
                          <div className="content">
                            {/* Cource Overview */}
                            <div className="course-overview">
                              <div className="inner-box">
                                <h4>
                                  25 That Prevent Job Seekers From Overcoming
                                  Failure
                                </h4>
                                <p>
                                  Phasellus enim magna, varius et commodo ut,
                                  ultricies vitae velit. Ut nulla tellus,
                                  eleifend euismod pellentesque vel, sagittis
                                  vel justo. In libero urna, venenatis sit amet
                                  ornare non, suscipit nec risus. Sed consequat
                                  justo non mauris pretium at tempor justo
                                  sodales. Quisque tincidunt laoreet malesuada.
                                  Cum sociis natoque penatibus et magnis dis
                                  parturient montes, nascetur.
                                </p>
                                <ul className="student-list">
                                  <li>23,564 Total Students</li>
                                  <li>
                                    <span className="theme_color">4.5</span>{" "}
                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" />
                                    <span className="fa fa-star" /> (1254
                                    Rating)
                                  </li>
                                  <li>256 Reviews</li>
                                </ul>
                                <h3>What you’ll learn?</h3>
                                <ul className="review-list">
                                  <li>
                                    Phasellus enim magna, varius et commodo ut.
                                  </li>
                                  <li>
                                    Sed consequat justo non mauris pretium at
                                    tempor justo.
                                  </li>
                                  <li>
                                    Ut nulla tellus, eleifend euismod
                                    pellentesque vel, sagittis vel justo
                                  </li>
                                  <li>
                                    Phasellus enim magna, varius et commodo ut.
                                  </li>
                                  <li>
                                    Phasellus enim magna, varius et commodo ut.
                                  </li>
                                  <li>
                                    Sed consequat justo non mauris pretium at
                                    tempor justo.
                                  </li>
                                  <li>
                                    Ut nulla tellus, eleifend euismod
                                    pellentesque vel, sagittis vel justo
                                  </li>
                                  <li>
                                    Phasellus enim magna, varius et commodo ut.
                                  </li>
                                </ul>
                                <h3>Requirements</h3>
                                <ul className="requirement-list">
                                  <li>
                                    Phasellus enim magna, varius et commodo ut,
                                    ultricies vitae velit. Ut nulla tellus,
                                    eleifend euismod pellentesque vel, sagittis
                                    vel justo
                                  </li>
                                  <li>
                                    Ultricies vitae velit. Ut nulla tellus,
                                    eleifend euismod pellentesque vel.
                                  </li>
                                  <li>
                                    Phasellus enim magna, varius et commodo ut.
                                  </li>
                                  <li>
                                    Varius et commodo ut, ultricies vitae velit.
                                    Ut nulla tellus.
                                  </li>
                                  <li>
                                    Phasellus enim magna, varius et commodo ut.
                                  </li>
                                </ul>
                                <h3>Instructors</h3>
                                <div className="row clearfix">
                                  {/* Student Block */}
                                  <div className="student-block col-lg-6 col-md-6 col-sm-12">
                                    <div className="block-inner">
                                      <div className="image">
                                        <img
                                          src="images/resource/student-1.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <h2>Stephane Smith</h2>
                                      <div className="text">
                                        Certified instructor Architecture&amp;
                                        Developer
                                      </div>
                                      <div className="social-box">
                                        <a
                                          href="#"
                                          className="fa fa-facebook-square"
                                        />
                                        <a
                                          href="#"
                                          className="fa fa-twitter-square"
                                        />
                                        <a
                                          href="#"
                                          className="fa fa-linkedin-square"
                                        />
                                        <a href="#" className="fa fa-github" />
                                      </div>
                                      <a href="#" className="more">
                                        Know More{" "}
                                        <span className="fa fa-angle-right" />
                                      </a>
                                    </div>
                                  </div>
                                  {/* Student Block */}
                                  <div className="student-block col-lg-6 col-md-6 col-sm-12">
                                    <div className="block-inner">
                                      <div className="image">
                                        <img
                                          src="images/resource/student-2.jpg"
                                          alt=""
                                        />
                                      </div>
                                      <h2>Marvin Zona</h2>
                                      <div className="text">
                                        Certified instructor Architecture&amp;
                                        Developer
                                      </div>
                                      <div className="social-box">
                                        <a
                                          href="#"
                                          className="fa fa-facebook-square"
                                        />
                                        <a
                                          href="#"
                                          className="fa fa-twitter-square"
                                        />
                                        <a
                                          href="#"
                                          className="fa fa-linkedin-square"
                                        />
                                        <a href="#" className="fa fa-github" />
                                      </div>
                                      <a href="#" className="more">
                                        Know More{" "}
                                        <span className="fa fa-angle-right" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Tab */}
                        <div className="tab" id="prod-curriculum">
                          <div className="content">
                            {/* Accordion Box */}
                            <ul className="accordion-box">
                              {/* Block */}
                              <li className="accordion block">
                                <div className="acc-btn active">
                                  <div className="icon-outer">
                                    <span className="icon icon-plus flaticon-angle-arrow-down" />
                                  </div>{" "}
                                  UI/ UX Introduction
                                </div>
                                <div className="acc-content current">
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play">
                                            <i className="ripple" />
                                          </span>
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* Block */}
                              <li className="accordion block">
                                <div className="acc-btn">
                                  <div className="icon-outer">
                                    <span className="icon icon-plus flaticon-angle-arrow-down" />
                                  </div>{" "}
                                  Color Theory
                                </div>
                                <div className="acc-content">
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play">
                                            <i className="ripple" />
                                          </span>
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* Block */}
                              <li className="accordion block">
                                <div className="acc-btn">
                                  <div className="icon-outer">
                                    <span className="icon icon-plus flaticon-angle-arrow-down" />
                                  </div>{" "}
                                  Basic Typography
                                </div>
                                <div className="acc-content">
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play">
                                            <i className="ripple" />
                                          </span>
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* Block */}
                              <li className="accordion block">
                                <div className="acc-btn">
                                  <div className="icon-outer">
                                    <span className="icon icon-plus flaticon-angle-arrow-down" />
                                  </div>{" "}
                                  Wireframing &amp; Prototyping
                                </div>
                                <div className="acc-content">
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play">
                                            <i className="ripple" />
                                          </span>
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Tab */}
                        <div className="tab" id="prod-announcement">
                          <div className="content">
                            {/* Accordion Box */}
                            <ul className="accordion-box">
                              {/* Block */}
                              <li className="accordion block">
                                <div className="acc-btn active">
                                  <div className="icon-outer">
                                    <span className="icon icon-plus flaticon-angle-arrow-down" />
                                  </div>{" "}
                                  UI/ UX Introduction
                                </div>
                                <div className="acc-content current">
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play">
                                            <i className="ripple" />
                                          </span>
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* Block */}
                              <li className="accordion block">
                                <div className="acc-btn">
                                  <div className="icon-outer">
                                    <span className="icon icon-plus flaticon-angle-arrow-down" />
                                  </div>{" "}
                                  Color Theory
                                </div>
                                <div className="acc-content">
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play">
                                            <i className="ripple" />
                                          </span>
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* Block */}
                              <li className="accordion block">
                                <div className="acc-btn">
                                  <div className="icon-outer">
                                    <span className="icon icon-plus flaticon-angle-arrow-down" />
                                  </div>{" "}
                                  Basic Typography
                                </div>
                                <div className="acc-content">
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play">
                                            <i className="ripple" />
                                          </span>
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* Block */}
                              <li className="accordion block">
                                <div className="acc-btn">
                                  <div className="icon-outer">
                                    <span className="icon icon-plus flaticon-angle-arrow-down" />
                                  </div>{" "}
                                  Wireframing &amp; Prototyping
                                </div>
                                <div className="acc-content">
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play">
                                            <i className="ripple" />
                                          </span>
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Tab */}
                        <div className="tab" id="prod-faq">
                          <div className="content">
                            {/* Accordion Box */}
                            <ul className="accordion-box">
                              {/* Block */}
                              <li className="accordion block">
                                <div className="acc-btn active">
                                  <div className="icon-outer">
                                    <span className="icon icon-plus flaticon-angle-arrow-down" />
                                  </div>{" "}
                                  UI/ UX Introduction
                                </div>
                                <div className="acc-content current">
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play">
                                            <i className="ripple" />
                                          </span>
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* Block */}
                              <li className="accordion block">
                                <div className="acc-btn">
                                  <div className="icon-outer">
                                    <span className="icon icon-plus flaticon-angle-arrow-down" />
                                  </div>{" "}
                                  Color Theory
                                </div>
                                <div className="acc-content">
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play">
                                            <i className="ripple" />
                                          </span>
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* Block */}
                              <li className="accordion block">
                                <div className="acc-btn">
                                  <div className="icon-outer">
                                    <span className="icon icon-plus flaticon-angle-arrow-down" />
                                  </div>{" "}
                                  Basic Typography
                                </div>
                                <div className="acc-content">
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play">
                                            <i className="ripple" />
                                          </span>
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              {/* Block */}
                              <li className="accordion block">
                                <div className="acc-btn">
                                  <div className="icon-outer">
                                    <span className="icon icon-plus flaticon-angle-arrow-down" />
                                  </div>{" "}
                                  Wireframing &amp; Prototyping
                                </div>
                                <div className="acc-content">
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play">
                                            <i className="ripple" />
                                          </span>
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="clearfix">
                                      <div className="pull-left">
                                        <a
                                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                          className="lightbox-image play-icon"
                                        >
                                          <span className="fa fa-play" />
                                          What is UI/ UX Design?
                                        </a>
                                      </div>
                                      <div className="pull-right">
                                        <div className="minutes">
                                          35 Minutes
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* Tab */}
                        <div className="tab" id="prod-reviews">
                          <div className="content">
                            <div className="cource-review-box">
                              <h4>Stephane Smith</h4>
                              <div className="rating">
                                <span className="total-rating">4.5</span>{" "}
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                  256 Reviews
                              </div>
                              <div className="text">
                                Phasellus enim magna, varius et commodo ut,
                                ultricies vitae velit. Ut nulla tellus, eleifend
                                euismod pellentesque vel, sagittis vel justo. In
                                libero urna, venenatis sit amet ornare non,
                                suscipit nec risus.
                              </div>
                              <div className="helpful">
                                Was this review helpful?
                              </div>
                              <ul className="like-option">
                                <li>
                                  <span className="icon fa fa-thumbs-o-up" />
                                </li>
                                <li>
                                  <span className="icon fa fa-thumbs-o-down" />
                                </li>
                                <span className="report">Report</span>
                              </ul>
                            </div>
                            <div className="cource-review-box">
                              <h4>Anna Sthesia</h4>
                              <div className="rating">
                                <span className="total-rating">4.5</span>{" "}
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                  256 Reviews
                              </div>
                              <div className="text">
                                Phasellus enim magna, varius et commodo ut,
                                ultricies vitae velit. Ut nulla tellus, eleifend
                                euismod pellentesque vel, sagittis vel justo. In
                                libero urna, venenatis sit amet ornare non,
                                suscipit nec risus.
                              </div>
                              <div className="helpful">
                                Was this review helpful?
                              </div>
                              <ul className="like-option">
                                <li>
                                  <span className="icon fa fa-thumbs-o-up" />
                                </li>
                                <li>
                                  <span className="icon fa fa-thumbs-o-down" />
                                </li>
                                <span className="report">Report</span>
                              </ul>
                            </div>
                            <div className="cource-review-box">
                              <h4>Petey Cruiser</h4>
                              <div className="rating">
                                <span className="total-rating">4.5</span>{" "}
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                  256 Reviews
                              </div>
                              <div className="text">
                                Phasellus enim magna, varius et commodo ut,
                                ultricies vitae velit. Ut nulla tellus, eleifend
                                euismod pellentesque vel, sagittis vel justo. In
                                libero urna, venenatis sit amet ornare non,
                                suscipit nec risus.
                              </div>
                              <div className="helpful">
                                Was this review helpful?
                              </div>
                              <ul className="like-option">
                                <li>
                                  <span className="icon fa fa-thumbs-o-up" />
                                </li>
                                <li>
                                  <span className="icon fa fa-thumbs-o-down" />
                                </li>
                                <span className="report">Report</span>
                              </ul>
                            </div>
                            <div className="cource-review-box">
                              <h4>Rick O'Shea</h4>
                              <div className="rating">
                                <span className="total-rating">4.5</span>{" "}
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                  256 Reviews
                              </div>
                              <div className="text">
                                Phasellus enim magna, varius et commodo ut,
                                ultricies vitae velit. Ut nulla tellus, eleifend
                                euismod pellentesque vel, sagittis vel justo. In
                                libero urna, venenatis sit amet ornare non,
                                suscipit nec risus.
                              </div>
                              <div className="helpful">
                                Was this review helpful?
                              </div>
                              <ul className="like-option">
                                <li>
                                  <span className="icon fa fa-thumbs-o-up" />
                                </li>
                                <li>
                                  <span className="icon fa fa-thumbs-o-down" />
                                </li>
                                <span className="report">Report</span>
                              </ul>
                              <a href="#" className="more">
                                View More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Video Column */}
              <div className="video-column col-lg-4 col-md-12 col-sm-12">
                <div className="inner-column sticky-top">
                  {/* Video Box */}
                  <div
                    className="intro-video"
                    style={{
                      backgroundImage: "url(images/resource/video-image-1.jpg)",
                    }}
                  >
                    <a
                      href="https://www.youtube.com/watch?v=kxPCFljwJws"
                      className="lightbox-image intro-video-box"
                    >
                      <span className="fa fa-play">
                        <i className="ripple" />
                      </span>
                    </a>
                    <h4>Preview this course</h4>
                  </div>
                  {/* End Video Box */}
                  <div className="price">$11.99</div>
                  <div className="time-left">23 hours left at this price!</div>
                  <a href="#" className="theme-btn btn-style-three">
                    <span className="txt">
                      Add To Cart <i className="fa fa-angle-right" />
                    </span>
                  </a>
                  <a href="#" className="theme-btn btn-style-two">
                    <span className="txt">
                      Buy Now <i className="fa fa-angle-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End intro Courses */}
    </div>
  );
}

export default CourseDetail;
