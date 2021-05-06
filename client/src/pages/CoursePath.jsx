/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";

function CoursePath() {
  return (
    <div>
      {/* Page Title */}
      <section className="page-title">
        <div className="auto-container">
          <h1>Course Topics</h1>
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
      {/* Topics Courses */}
      <section className="topics-section">
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
          <div className="sec-title centered">
            <h2>Choose a topic</h2>
            <div className="text">
              Replenish him third creature and meat blessed void a fruit
              gathered you’re, they’re two <br /> waters own morning gathered
              greater shall had behold had seed.
            </div>
          </div>
          <div className="row clearfix">
            {/* Topic Block */}
            <div className="topic-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <Link to="/courses" className="overlay-link" />
                  <span className="icon flaticon-code" />
                </div>
                <h5>
                  <Link to="/courses">Development</Link>
                </h5>
                <div className="text">
                  Replenish him third creature and meat blessed
                </div>
                <div className="clearfix">
                  <div className="pull-left">
                    <div className="lectures">12 Lecturer</div>
                  </div>
                  <div className="pull-right">
                    <div className="hours">54 Hours</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Topic Block */}
            <div className="topic-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <Link to="/courses" className="overlay-link" />
                  <span className="icon flaticon-graphic" />
                </div>
                <h5>
                  <Link to="/courses">Business</Link>
                </h5>
                <div className="text">
                  Replenish him third creature and meat blessed
                </div>
                <div className="clearfix">
                  <div className="pull-left">
                    <div className="lectures">12 Lecturer</div>
                  </div>
                  <div className="pull-right">
                    <div className="hours">54 Hours</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Topic Block */}
            <div className="topic-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <Link to="/courses" className="overlay-link" />
                  <span className="icon flaticon-code-1" />
                </div>
                <h5>
                  <Link to="/courses">IT&amp; Software</Link>
                </h5>
                <div className="text">
                  Replenish him third creature and meat blessed
                </div>
                <div className="clearfix">
                  <div className="pull-left">
                    <div className="lectures">12 Lecturer</div>
                  </div>
                  <div className="pull-right">
                    <div className="hours">54 Hours</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Topic Block */}
            <div className="topic-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <Link to="/courses" className="overlay-link" />
                  <span className="icon flaticon-shout" />
                </div>
                <h5>
                  <Link to="/courses">Marketing</Link>
                </h5>
                <div className="text">
                  Replenish him third creature and meat blessed
                </div>
                <div className="clearfix">
                  <div className="pull-left">
                    <div className="lectures">12 Lecturer</div>
                  </div>
                  <div className="pull-right">
                    <div className="hours">54 Hours</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Topic Block */}
            <div className="topic-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <Link to="/courses" className="overlay-link" />
                  <span className="icon flaticon-sketch" />
                </div>
                <h5>
                  <Link to="/courses">Design</Link>
                </h5>
                <div className="text">
                  Replenish him third creature and meat blessed
                </div>
                <div className="clearfix">
                  <div className="pull-left">
                    <div className="lectures">12 Lecturer</div>
                  </div>
                  <div className="pull-right">
                    <div className="hours">54 Hours</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Topic Block */}
            <div className="topic-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <Link to="/courses" className="overlay-link" />
                  <span className="icon flaticon-lifestyle" />
                </div>
                <h5>
                  <Link to="/courses">Lifestyle</Link>
                </h5>
                <div className="text">
                  Replenish him third creature and meat blessed
                </div>
                <div className="clearfix">
                  <div className="pull-left">
                    <div className="lectures">12 Lecturer</div>
                  </div>
                  <div className="pull-right">
                    <div className="hours">54 Hours</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Topic Block */}
            <div className="topic-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <Link to="/courses" className="overlay-link" />
                  <span className="icon flaticon-camera" />
                </div>
                <h5>
                  <Link to="/courses">Photography</Link>
                </h5>
                <div className="text">
                  Replenish him third creature and meat blessed
                </div>
                <div className="clearfix">
                  <div className="pull-left">
                    <div className="lectures">12 Lecturer</div>
                  </div>
                  <div className="pull-right">
                    <div className="hours">54 Hours</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Topic Block */}
            <div className="topic-block col-lg-3 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <Link to="/courses" className="overlay-link" />
                  <span className="icon flaticon-video" />
                </div>
                <h5>
                  <Link to="/courses">Music</Link>
                </h5>
                <div className="text">
                  Replenish him third creature and meat blessed
                </div>
                <div className="clearfix">
                  <div className="pull-left">
                    <div className="lectures">12 Lecturer</div>
                  </div>
                  <div className="pull-right">
                    <div className="hours">54 Hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box text-center">
            <Link to="/courses" className="theme-btn btn-style-three">
              <span className="txt">
                See All Topics <i className="fa fa-angle-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* End Topics Courses */}
      {/* Popular Courses */}
      <section className="popular-courses-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>Popular Courses</h2>
            <div className="text">
              Replenish him third creature and meat blessed void a fruit
              gathered you’re, <br /> they’re two waters own morning gathered.
            </div>
          </div>
          <div className="row clearfix">
            {/* Cource Block */}
            <div className="cource-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <Link to="courses/course-detail">
                    <img src="images/resource/course-3.jpg" alt="" />
                  </Link>
                </div>
                <div className="lower-content">
                  <div className="clearfix">
                    <div className="pull-left">
                      <h5>
                        <Link to="courses/course-detail">
                          Development Course
                        </Link>
                      </h5>
                    </div>
                    <div className="pull-right">
                      <div className="price">$140</div>
                    </div>
                  </div>
                  <div className="text">
                    Replenish him third creature and meat blessed void a fruit
                    gathered you’re, they’re two waters.
                  </div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <div className="students">125 Student</div>
                    </div>
                    <div className="pull-right">
                      <Link to="courses/course-detail" className="enroll">
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Cource Block */}
            <div className="cource-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <Link to="courses/course-detail">
                    <img src="images/resource/course-4.jpg" alt="" />
                  </Link>
                </div>
                <div className="lower-content">
                  <div className="clearfix">
                    <div className="pull-left">
                      <h5>
                        <Link to="courses/course-detail">Language Course</Link>
                      </h5>
                    </div>
                    <div className="pull-right">
                      <div className="price">$140</div>
                    </div>
                  </div>
                  <div className="text">
                    Replenish him third creature and meat blessed void a fruit
                    gathered you’re, they’re two waters.
                  </div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <div className="students">125 Student</div>
                    </div>
                    <div className="pull-right">
                      <Link to="courses/course-detail" className="enroll">
                        Enroll Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Cource Block */}
            <div className="cource-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="image">
                  <Link to="courses/course-detail">
                    <img src="images/resource/course-5.jpg" alt="" />
                  </Link>
                </div>
                <div className="lower-content">
                  <div className="clearfix">
                    <div className="pull-left">
                      <h5>
                        <Link to="courses/course-detail">Business Course</Link>
                      </h5>
                    </div>
                    <div className="pull-right">
                      <div className="price">$140</div>
                    </div>
                  </div>
                  <div className="text">
                    Replenish him third creature and meat blessed void a fruit
                    gathered you’re, they’re two waters.
                  </div>
                  <div className="clearfix">
                    <div className="pull-left">
                      <div className="students">125 Student</div>
                    </div>
                    <div className="pull-right">
                      <Link to="courses/course-detail" className="enroll">
                        Enroll Now
                      </Link>
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

export default CoursePath;
