/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function StudentProfile() {
  return (
    <div>
      {/* Page Title */}
      <section className="page-title">
        <div className="auto-container">
          <h1>Student Profile</h1>
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
      {/* Student Profile Section */}
      <section className="student-profile-section">
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
        <div className="circle-two" />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Image Section */}
            <div className="image-column col-lg-3 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image">
                  <img src="images/resource/student-2.jpg" alt="" />
                </div>
                <h4>Marvin Zona</h4>
                <div className="text">Pro Member</div>
                <div className="social-box">
                  <a href="#" className="fa fa-facebook-square" />
                  <a href="#" className="fa fa-twitter-square" />
                  <a href="#" className="fa fa-linkedin-square" />
                  <a href="#" className="fa fa-github" />
                </div>
                <ul className="student-editing">
                  <li>
                    <a href="edit-profile.html">Edit Account</a>
                  </li>
                  <li>
                    <a href="intro-profile.html">Notification</a>
                  </li>
                  <li>
                    <a href="edit-profile.html">Membership Upgrade</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Content Section */}
            <div className="content-column col-lg-9 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Profile Info Tabs*/}
                <div className="profile-info-tabs">
                  {/* Profile Tabs*/}
                  <div className="profile-tabs tabs-box">
                    {/*Tab Btns*/}
                    <ul className="tab-btns tab-buttons clearfix">
                      <li
                        data-tab="#prod-overview"
                        className="tab-btn active-btn"
                      >
                        Overview
                      </li>
                      <li data-tab="#prod-bookmark" className="tab-btn">
                        Bookmarks
                      </li>
                      <li data-tab="#prod-billing" className="tab-btn">
                        Billing
                      </li>
                      <li data-tab="#prod-setting" className="tab-btn">
                        Settings
                      </li>
                    </ul>
                    {/*Tabs Container*/}
                    <div className="tabs-content">
                      {/*Tab / Active Tab*/}
                      <div className="tab active-tab" id="prod-overview">
                        <div className="content">
                          {/* Sec Title */}
                          <div className="sec-title">
                            <h2>Courses In Progress</h2>
                          </div>
                          <div className="row clearfix">
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-6.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Interaction Design
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-7.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Visual Design
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-8.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Wireframe Protos
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-9.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Color Theory
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-10.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">Typography</a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-11.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Picture Selection
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Tab */}
                      <div className="tab" id="prod-bookmark">
                        <div className="content">
                          <div className="row clearfix">
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-6.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Interaction Design
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-7.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Visual Design
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-8.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Wireframe Protos
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-9.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Color Theory
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-10.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">Typography</a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-11.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Picture Selection
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Tab */}
                      <div className="tab" id="prod-billing">
                        <div className="content">
                          <div className="row clearfix">
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-6.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Interaction Design
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-7.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Visual Design
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-8.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Wireframe Protos
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-9.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Color Theory
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-10.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">Typography</a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-11.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Picture Selection
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Tab */}
                      <div className="tab" id="prod-setting">
                        <div className="content">
                          <div className="row clearfix">
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-6.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Interaction Design
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-7.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Visual Design
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-8.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Wireframe Protos
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-9.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Color Theory
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-10.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">Typography</a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Cource Block Two */}
                            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                              <div className="inner-box">
                                <div className="image">
                                  <a href="course-detail.html">
                                    <img
                                      src="images/resource/course-11.jpg"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="lower-content">
                                  <h5>
                                    <a href="course-detail.html">
                                      Picture Selection
                                    </a>
                                  </h5>
                                  <div className="text">
                                    Replenish of third creature and meat blessed
                                    void a fruit gathered waters.
                                  </div>
                                  <div className="clearfix">
                                    <div className="pull-left">
                                      <div className="students">
                                        12 Lecturer
                                      </div>
                                    </div>
                                    <div className="pull-right">
                                      <div className="hours">54 Hours</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Post Share Options */}
                <div className="styled-pagination">
                  <ul className="clearfix">
                    <li className="prev">
                      <a href="#">
                        <span className="fa fa-angle-left" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li className="active">
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                    <li>
                      <a href="#">6</a>
                    </li>
                    <li>
                      <a href="#">7</a>
                    </li>
                    <li>
                      <a href="#">8</a>
                    </li>
                    <li className="next">
                      <a href="#">
                        <span className="fa fa-angle-right" />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Saved Books Section */}
        <div className="saved-books-section">
          <div className="auto-container">
            <div className="sec-title">
              <h2>Saved Books</h2>
            </div>
            <div className="row clearfix">
              {/* Book Block */}
              <div className="book-block col-lg-3 col-md-4 col-sm-12">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="images/resource/book-14.jpg" alt="" />
                    {/* Overlay Box */}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <a href="books-detail.html" className="link">
                            <span className="icon fa fa-link" />
                          </a>
                          <a
                            href="images/resource/book-14.jpg"
                            data-fancybox="books"
                            data-caption
                            className="link"
                          >
                            <span className="icon flaticon-full-screen" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                  <div className="lower-box">
                    <h6>
                      <a href="books-detail.html">Don’t make me think</a>
                    </h6>
                  </div>
                </div>
              </div>
              {/* Book Block */}
              <div className="book-block col-lg-3 col-md-4 col-sm-12">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="images/resource/book-15.jpg" alt="" />
                    {/* Overlay Box */}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <a href="books-detail.html" className="link">
                            <span className="icon fa fa-link" />
                          </a>
                          <a
                            href="images/resource/book-15.jpg"
                            data-fancybox="books"
                            data-caption
                            className="link"
                          >
                            <span className="icon flaticon-full-screen" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                  <div className="lower-box">
                    <h6>
                      <a href="books-detail.html">Design of Everyday</a>
                    </h6>
                  </div>
                </div>
              </div>
              {/* Book Block */}
              <div className="book-block col-lg-3 col-md-4 col-sm-12">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="images/resource/book-16.jpg" alt="" />
                    {/* Overlay Box */}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <a href="books-detail.html" className="link">
                            <span className="icon fa fa-link" />
                          </a>
                          <a
                            href="images/resource/book-16.jpg"
                            data-fancybox="books"
                            data-caption
                            className="link"
                          >
                            <span className="icon flaticon-full-screen" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                  <div className="lower-box">
                    <h6>
                      <a href="books-detail.html">Undercover UX Design</a>
                    </h6>
                  </div>
                </div>
              </div>
              {/* Book Block */}
              <div className="book-block col-lg-3 col-md-4 col-sm-12">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="images/resource/book-17.jpg" alt="" />
                    {/* Overlay Box */}
                    <div className="overlay-box">
                      <div className="overlay-inner">
                        <div className="content">
                          <a href="books-detail.html" className="link">
                            <span className="icon fa fa-link" />
                          </a>
                          <a
                            href="images/resource/book-17.jpg"
                            data-fancybox="books"
                            data-caption
                            className="link"
                          >
                            <span className="icon flaticon-full-screen" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </figure>
                  <div className="lower-box">
                    <h6>
                      <a href="books-detail.html">Interaction Design</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Profile Section */}
      {/* Call To Action Section Two */}
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
    </div>
  );
}

export default StudentProfile;
