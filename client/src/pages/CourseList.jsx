/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function CourseList() {
  return (
    <div>
      {/* Page Title */}
      <section className="page-title">
        <div className="auto-container">
          <h1>Courses</h1>
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
      {/*Sidebar Page Container*/}
      <div className="sidebar-page-container">
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
            {/* Content Side */}
            <div className="content-side col-lg-9 col-md-12 col-sm-12">
              <div className="our-courses">
                {/* Options View */}
                <div className="options-view">
                  <div className="clearfix">
                    <div className="pull-left">
                      <h3>Browse UI/ UX Courses</h3>
                    </div>
                    <div className="pull-right clearfix">
                      {/* List View */}
                      <ul className="list-view">
                        <li>
                          <a href="course.html">
                            <span className="icon flaticon-grid" />
                          </a>
                        </li>
                        <li className="active">
                          <a href="course-list.html">
                            <span className="icon flaticon-list-1" />
                          </a>
                        </li>
                      </ul>
                      {/* Type Form */}
                      <div className="type-form">
                        <form method="post" action="index.html">
                          {/* Form Group */}
                          <div className="form-group">
                            <select className="custom-select-box">
                              <option>Newest</option>
                              <option>Old</option>
                            </select>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cource Block Two */}
                <div className="cource-block-three">
                  <div className="inner-box">
                    <div className="image">
                      <a href="course-detail.html">
                        <img src="images/resource/course-18.jpg" alt="" />
                      </a>
                    </div>
                    <div className="content-box">
                      <div className="box-inner">
                        <h5>
                          <a href="course-detail.html">
                            Ultimate User Interface and user Experince Courses
                          </a>
                        </h5>
                        <div className="text">
                          Replenish him third creature and meat blessed void a
                          fruit gathered you’re, they’re two waters. Replenish
                          him third creature and meat blessed void a fruit
                          gathered two waters.
                        </div>
                        <div className="clearfix">
                          <div className="pull-left">
                            <div className="level-box">
                              <span className="icon flaticon-settings-1" />
                              Advance Level
                            </div>
                          </div>
                          <div className="pull-right clearfix">
                            <div className="students">12 Lecturer</div>
                            <div className="hours">54 Hours</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cource Block Two */}
                <div className="cource-block-three">
                  <div className="inner-box">
                    <div className="image">
                      <a href="course-detail.html">
                        <img src="images/resource/course-19.jpg" alt="" />
                      </a>
                    </div>
                    <div className="content-box">
                      <div className="box-inner">
                        <h5>
                          <a href="course-detail.html">
                            Ultimate User Interface and user Experince Courses
                          </a>
                        </h5>
                        <div className="text">
                          Replenish him third creature and meat blessed void a
                          fruit gathered you’re, they’re two waters. Replenish
                          him third creature and meat blessed void a fruit
                          gathered two waters.
                        </div>
                        <div className="clearfix">
                          <div className="pull-left">
                            <div className="level-box">
                              <span className="icon flaticon-settings-1" />
                              Advance Level
                            </div>
                          </div>
                          <div className="pull-right clearfix">
                            <div className="students">12 Lecturer</div>
                            <div className="hours">54 Hours</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cource Block Two */}
                <div className="cource-block-three">
                  <div className="inner-box">
                    <div className="image">
                      <a href="course-detail.html">
                        <img src="images/resource/course-20.jpg" alt="" />
                      </a>
                    </div>
                    <div className="content-box">
                      <div className="box-inner">
                        <h5>
                          <a href="course-detail.html">
                            Ultimate User Interface and user Experince Courses
                          </a>
                        </h5>
                        <div className="text">
                          Replenish him third creature and meat blessed void a
                          fruit gathered you’re, they’re two waters. Replenish
                          him third creature and meat blessed void a fruit
                          gathered two waters.
                        </div>
                        <div className="clearfix">
                          <div className="pull-left">
                            <div className="level-box">
                              <span className="icon flaticon-settings-1" />
                              Advance Level
                            </div>
                          </div>
                          <div className="pull-right clearfix">
                            <div className="students">12 Lecturer</div>
                            <div className="hours">54 Hours</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cource Block Two */}
                <div className="cource-block-three">
                  <div className="inner-box">
                    <div className="image">
                      <a href="course-detail.html">
                        <img src="images/resource/course-21.jpg" alt="" />
                      </a>
                    </div>
                    <div className="content-box">
                      <div className="box-inner">
                        <h5>
                          <a href="course-detail.html">
                            Ultimate User Interface and user Experince Courses
                          </a>
                        </h5>
                        <div className="text">
                          Replenish him third creature and meat blessed void a
                          fruit gathered you’re, they’re two waters. Replenish
                          him third creature and meat blessed void a fruit
                          gathered two waters.
                        </div>
                        <div className="clearfix">
                          <div className="pull-left">
                            <div className="level-box">
                              <span className="icon flaticon-settings-1" />
                              Advance Level
                            </div>
                          </div>
                          <div className="pull-right clearfix">
                            <div className="students">12 Lecturer</div>
                            <div className="hours">54 Hours</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar Side */}
            <div className="sidebar-side col-lg-3 col-md-12 col-sm-12">
              <div className="sidebar-inner">
                <aside className="sidebar">
                  {/* Filter Widget */}
                  <div className="filter-widget">
                    <h5>Filter By</h5>
                    <div className="skills-box">
                      {/* Skills Form */}
                      <div className="skills-form">
                        <form method="post" action="index.html">
                          <span>Skill Level</span>
                          {/* Radio Box */}
                          <div className="radio-box">
                            <input
                              type="radio"
                              name="remember-password"
                              defaultChecked
                              id="type-1"
                            />
                            <label htmlFor="type-1">Beginner</label>
                          </div>
                          {/* Radio Box */}
                          <div className="radio-box">
                            <input
                              type="radio"
                              name="remember-password"
                              id="type-2"
                            />
                            <label htmlFor="type-2">Intermediate</label>
                          </div>
                          {/* Radio Box */}
                          <div className="radio-box">
                            <input
                              type="radio"
                              name="remember-password"
                              id="type-3"
                            />
                            <label htmlFor="type-3">Expert</label>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="skills-box-two">
                      {/* Skills Form */}
                      <div className="skills-form-two">
                        <form method="post" action="index.html">
                          <span>Skill Level</span>
                          {/* Radio Box */}
                          <div className="radio-box">
                            <input
                              type="radio"
                              name="remember-password"
                              defaultChecked
                              id="type-4"
                            />
                            <label htmlFor="type-4">Free (14)</label>
                          </div>
                          {/* Radio Box */}
                          <div className="radio-box">
                            <input
                              type="radio"
                              name="remember-password"
                              id="type-5"
                            />
                            <label htmlFor="type-5">Paid</label>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="skills-box-three">
                      {/* Skills Form */}
                      <div className="skills-form-three">
                        <form method="post" action="index.html">
                          <span>Duration Time</span>
                          {/* Radio Box */}
                          <div className="radio-box-three">
                            <input
                              type="radio"
                              name="remember-password"
                              defaultChecked
                              id="type-7"
                            />
                            <label htmlFor="type-7">5+ hours (30)</label>
                          </div>
                          {/* Radio Box */}
                          <div className="radio-box-three">
                            <input
                              type="radio"
                              name="remember-password"
                              id="type-8"
                            />
                            <label htmlFor="type-8">10+ hours (20)</label>
                          </div>
                          {/* Radio Box */}
                          <div className="radio-box-three">
                            <input
                              type="radio"
                              name="remember-password"
                              id="type-9"
                            />
                            <label htmlFor="type-9">15+ hours (5)</label>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </aside>
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
              <li className="next">
                <a href="#">
                  <span className="fa fa-angle-right" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Popular Courses */}
      <section className="popular-courses-section">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Most Popular Courses</h2>
          </div>
          {/* Cource Block Four */}
          <div className="cource-block-four">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <a href="course-detail.html">
                  <img src="images/resource/course-22.jpg" alt="" />
                </a>
              </div>
              <div className="content-box">
                <div className="box-inner">
                  <h5>
                    <a href="course-detail.html">
                      Ultimate User Interface and user Experince Courses
                    </a>
                  </h5>
                  <div className="text">
                    Replenish him third creature and meat blessed void a fruit
                    gathered you’re, they’re two waters. Replenish him third
                    creature and meat blessed void a fruit gathered you’re,
                    they’re two waters.
                  </div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <div className="level-box">
                        <span className="icon flaticon-settings-1" />
                        Advance Level
                      </div>
                    </div>
                    <div className="pull-right clearfix">
                      <div className="students">12 Lecturer</div>
                      <div className="hours">54 Hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Cource Block Four */}
          <div className="cource-block-four">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="150ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <a href="course-detail.html">
                  <img src="images/resource/course-23.jpg" alt="" />
                </a>
              </div>
              <div className="content-box">
                <div className="box-inner">
                  <h5>
                    <a href="course-detail.html">
                      Ultimate User Interface and user Experince Courses
                    </a>
                  </h5>
                  <div className="text">
                    Replenish him third creature and meat blessed void a fruit
                    gathered you’re, they’re two waters. Replenish him third
                    creature and meat blessed void a fruit gathered you’re,
                    they’re two waters.
                  </div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <div className="level-box">
                        <span className="icon flaticon-settings-1" />
                        Advance Level
                      </div>
                    </div>
                    <div className="pull-right clearfix">
                      <div className="students">12 Lecturer</div>
                      <div className="hours">54 Hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Cource Block Four */}
          <div className="cource-block-four">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="image">
                <a href="course-detail.html">
                  <img src="images/resource/course-24.jpg" alt="" />
                </a>
              </div>
              <div className="content-box">
                <div className="box-inner">
                  <h5>
                    <a href="course-detail.html">
                      Ultimate User Interface and user Experince Courses
                    </a>
                  </h5>
                  <div className="text">
                    Replenish him third creature and meat blessed void a fruit
                    gathered you’re, they’re two waters. Replenish him third
                    creature and meat blessed void a fruit gathered you’re,
                    they’re two waters.
                  </div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <div className="level-box">
                        <span className="icon flaticon-settings-1" />
                        Advance Level
                      </div>
                    </div>
                    <div className="pull-right clearfix">
                      <div className="students">12 Lecturer</div>
                      <div className="hours">54 Hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Popular Courses */}
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

export default CourseList;
