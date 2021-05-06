/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";

function InstructorProfile() {
  return (
    <div>
      {/* Page Title */}
      <section className="page-title">
        <div className="auto-container">
          <h1>Instructor Profile</h1>
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
      {/* Profile Section */}
      <section className="profile-section">
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
            {/* Content Section */}
            <div className="content-column col-lg-7 col-md-12 col-sm-12">
              <div className="inner-column">
                <h2>Stephane Smith</h2>
                <h4>A certified instructor From Bootcamp</h4>
                {/* Student List */}
                <ul className="student-list">
                  <li>23,564 Total Students</li>
                  <li>
                    <span className="theme_color">4.5</span>{" "}
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" /> (1254 Rating)
                  </li>
                  <li>256 Reviews</li>
                </ul>
                <h5>About Me</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Nam liber tempor cum soluta
                  nobis eleifend option congue nihil imperdiet doming id quod
                  mazim placerat
                </p>
                <h5>25 That Prevent Job Seekers From Overcoming Failure</h5>
                <p>
                  Phasellus enim magna, varius et commodo ut, ultricies vitae
                  velit. Ut nulla tellus, eleifend euismod pellentesque vel,
                  sagittis vel justo. In libero urna, venenatis sit amet ornare
                  non, suscipit nec risus. Sed consequat justo non mauris
                  pretium at tempor justo sodales. Quisque tincidunt laoreet
                  malesuada. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur.
                </p>
              </div>
            </div>
            {/* Image Section */}
            <div className="image-column col-lg-5 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image">
                  <img src="images/resource/student-1.jpg" alt="" />
                </div>
                <h3>Stephane Smith</h3>
                <div className="text">
                  Certified instructor Architecture <br /> &amp; Developer
                </div>
                <div className="social-box">
                  <a href="#" className="fa fa-facebook-square" />
                  <a href="#" className="fa fa-twitter-square" />
                  <a href="#" className="fa fa-linkedin-square" />
                  <a href="#" className="fa fa-github" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Browse Course Section */}
        <div className="browse-course-section">
          <div className="auto-container">
            <div className="sec-title">
              <h2>All Courses by Stephane</h2>
            </div>
            <div className="row clearfix">
              {/* Cource Block Two */}
              <div className="cource-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/courses/course-detail">
                      <img src="images/resource/course-6.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link to="/courses/course-detail">
                        Interaction Design
                      </Link>
                    </h5>
                    <div className="text">
                      Replenish of third creature and meat blessed void a fruit
                      gathered waters.
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
              <div className="cource-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/courses/course-detail">
                      <img src="images/resource/course-7.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link to="/courses/course-detail">Visual Design</Link>
                    </h5>
                    <div className="text">
                      Replenish of third creature and meat blessed void a fruit
                      gathered waters.
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
              <div className="cource-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/courses/course-detail">
                      <img src="images/resource/course-8.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link to="/courses/course-detail">Wireframe Protos</Link>
                    </h5>
                    <div className="text">
                      Replenish of third creature and meat blessed void a fruit
                      gathered waters.
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
              <div className="cource-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/courses/course-detail">
                      <img src="images/resource/course-25.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link to="/courses/course-detail">Wireframe Protos</Link>
                    </h5>
                    <div className="text">
                      Replenish of third creature and meat blessed void a fruit
                      gathered waters.
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
              <div className="cource-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/courses/course-detail">
                      <img src="images/resource/course-9.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link to="/courses/course-detail">Color Theory</Link>
                    </h5>
                    <div className="text">
                      Replenish of third creature and meat blessed void a fruit
                      gathered waters.
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
              <div className="cource-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/courses/course-detail">
                      <img src="images/resource/course-10.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link to="/courses/course-detail">Typography</Link>
                    </h5>
                    <div className="text">
                      Replenish of third creature and meat blessed void a fruit
                      gathered waters.
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
              <div className="cource-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/courses/course-detail">
                      <img src="images/resource/course-11.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link to="/courses/course-detail">Picture Selection</Link>
                    </h5>
                    <div className="text">
                      Replenish of third creature and meat blessed void a fruit
                      gathered waters.
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
              <div className="cource-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/courses/course-detail">
                      <img src="images/resource/course-26.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link to="/courses/course-detail">Picture Selection</Link>
                    </h5>
                    <div className="text">
                      Replenish of third creature and meat blessed void a fruit
                      gathered waters.
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
              <div className="cource-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/courses/course-detail">
                      <img src="images/resource/course-11.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link to="/courses/course-detail">Picture Selection</Link>
                    </h5>
                    <div className="text">
                      Replenish of third creature and meat blessed void a fruit
                      gathered waters.
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
              <div className="cource-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/courses/course-detail">
                      <img src="images/resource/course-12.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link to="/courses/course-detail">
                        Interaction Design
                      </Link>
                    </h5>
                    <div className="text">
                      Replenish of third creature and meat blessed void a fruit
                      gathered waters.
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
              <div className="cource-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/courses/course-detail">
                      <img src="images/resource/course-13.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link to="/courses/course-detail">Visual Design</Link>
                    </h5>
                    <div className="text">
                      Replenish of third creature and meat blessed void a fruit
                      gathered waters.
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
              <div className="cource-block-two col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/courses/course-detail">
                      <img src="images/resource/course-27.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link to="/courses/course-detail">Visual Design</Link>
                    </h5>
                    <div className="text">
                      Replenish of third creature and meat blessed void a fruit
                      gathered waters.
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
            {/* Post Share Options */}
            <div className="styled-pagination text-center">
              <ul className="clearfix">
                <li className="prev">
                  <a href="#">
                    <span className="fa fa-angle-left" />
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
      </section>
      {/* End Profile Section */}
    </div>
  );
}

export default InstructorProfile;
