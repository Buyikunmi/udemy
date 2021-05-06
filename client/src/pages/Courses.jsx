/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div>
      {/* End Main Header */}
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
                        <li className="active">
                          <Link to="/courses">
                            <span className="icon flaticon-grid" />
                          </Link>
                        </li>
                        <li>
                          <Link to="/courses-list">
                            <span className="icon flaticon-list-1" />
                          </Link>
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
                <div className="row clearfix">
                  {/* Cource Block Two */}
                  <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="image">
                        <Link to="courses/course-detail">
                          <img src="images/resource/course-6.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="lower-content">
                        <h5>
                          <Link to="courses/course-detail">
                            Interaction Design
                          </Link>
                        </h5>
                        <div className="text">
                          Replenish of third creature and meat blessed void a
                          fruit gathered waters.
                        </div>
                        <div className="clearfix">
                          <div className="pull-left">
                            <div className="students">12 Lecturer</div>
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
                        <Link to="courses/course-detail">
                          <img src="images/resource/course-7.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="lower-content">
                        <h5>
                          <Link to="courses/course-detail">Visual Design</Link>
                        </h5>
                        <div className="text">
                          Replenish of third creature and meat blessed void a
                          fruit gathered waters.
                        </div>
                        <div className="clearfix">
                          <div className="pull-left">
                            <div className="students">12 Lecturer</div>
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
                        <Link to="courses/course-detail">
                          <img src="images/resource/course-8.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="lower-content">
                        <h5>
                          <Link to="courses/course-detail">
                            Wireframe Protos
                          </Link>
                        </h5>
                        <div className="text">
                          Replenish of third creature and meat blessed void a
                          fruit gathered waters.
                        </div>
                        <div className="clearfix">
                          <div className="pull-left">
                            <div className="students">12 Lecturer</div>
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
                        <Link to="courses/course-detail">
                          <img src="images/resource/course-9.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="lower-content">
                        <h5>
                          <Link to="courses/course-detail">Color Theory</Link>
                        </h5>
                        <div className="text">
                          Replenish of third creature and meat blessed void a
                          fruit gathered waters.
                        </div>
                        <div className="clearfix">
                          <div className="pull-left">
                            <div className="students">12 Lecturer</div>
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
                        <Link to="courses/course-detail">
                          <img src="images/resource/course-10.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="lower-content">
                        <h5>
                          <Link to="courses/course-detail">Typography</Link>
                        </h5>
                        <div className="text">
                          Replenish of third creature and meat blessed void a
                          fruit gathered waters.
                        </div>
                        <div className="clearfix">
                          <div className="pull-left">
                            <div className="students">12 Lecturer</div>
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
                        <Link to="courses/course-detail">
                          <img src="images/resource/course-11.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="lower-content">
                        <h5>
                          <Link to="courses/course-detail">
                            Picture Selection
                          </Link>
                        </h5>
                        <div className="text">
                          Replenish of third creature and meat blessed void a
                          fruit gathered waters.
                        </div>
                        <div className="clearfix">
                          <div className="pull-left">
                            <div className="students">12 Lecturer</div>
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
                        <Link to="courses/course-detail">
                          <img src="images/resource/course-12.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="lower-content">
                        <h5>
                          <Link to="courses/course-detail">
                            Interaction Design
                          </Link>
                        </h5>
                        <div className="text">
                          Replenish of third creature and meat blessed void a
                          fruit gathered waters.
                        </div>
                        <div className="clearfix">
                          <div className="pull-left">
                            <div className="students">12 Lecturer</div>
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
                        <Link to="courses/course-detail">
                          <img src="images/resource/course-13.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="lower-content">
                        <h5>
                          <Link to="courses/course-detail">Visual Design</Link>
                        </h5>
                        <div className="text">
                          Replenish of third creature and meat blessed void a
                          fruit gathered waters.
                        </div>
                        <div className="clearfix">
                          <div className="pull-left">
                            <div className="students">12 Lecturer</div>
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
                        <Link to="courses/course-detail">
                          <img src="images/resource/course-14.jpg" alt="" />
                        </Link>
                      </div>
                      <div className="lower-content">
                        <h5>
                          <Link to="courses/course-detail">
                            Wireframe Protos
                          </Link>
                        </h5>
                        <div className="text">
                          Replenish of third creature and meat blessed void a
                          fruit gathered waters.
                        </div>
                        <div className="clearfix">
                          <div className="pull-left">
                            <div className="students">12 Lecturer</div>
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
          <div className="row clearfix">
            {/* Cource Block Two */}
            <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <Link to="courses/course-detail">
                    <img src="images/resource/course-15.jpg" alt="" />
                  </Link>
                </div>
                <div className="lower-content">
                  <h5>
                    <Link to="courses/course-detail">Color Theory</Link>
                  </h5>
                  <div className="text">
                    Replenish him third creature and meat blessed void a fruit
                    gathered you’re, they’re two waters.
                  </div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <div className="students">12 Lecturer</div>
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
              <div
                className="inner-box wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <Link to="courses/course-detail">
                    <img src="images/resource/course-16.jpg" alt="" />
                  </Link>
                </div>
                <div className="lower-content">
                  <h5>
                    <Link to="courses/course-detail">Typography</Link>
                  </h5>
                  <div className="text">
                    Replenish him third creature and meat blessed void a fruit
                    gathered you’re, they’re two waters.
                  </div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <div className="students">12 Lecturer</div>
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
              <div
                className="inner-box wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="image">
                  <Link to="courses/course-detail">
                    <img src="images/resource/course-17.jpg" alt="" />
                  </Link>
                </div>
                <div className="lower-content">
                  <h5>
                    <Link to="courses/course-detail">
                      Wireframe &amp; Prototyping
                    </Link>
                  </h5>
                  <div className="text">
                    Replenish him third creature and meat blessed void a fruit
                    gathered you’re, they’re two waters.
                  </div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <div className="students">12 Lecturer</div>
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
      </section>
      {/* End Popular Courses */}
    </div>
  );
}

export default Courses;
