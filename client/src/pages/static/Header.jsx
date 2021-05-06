/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* Main Header*/}
      <header className="main-header header-style-one">
        {/* Header Top */}
        <div className="header-top">
          <div className="auto-container">
            <div className="clearfix">
              {/* Top Left */}
              <div className="top-left pull-left clearfix">
                {/* Info List */}
                <ul className="info-list">
                  <li>
                    <span>Call Us:</span>
                    <a href="tel:+123-456-7890"> +1 (800) 123-4567</a>
                  </li>
                  <li>
                    <span>Email Us:</span>
                    <a href="mailto:info@yourcompany.com">
                      {" "}
                      info@yourcompany.com
                    </a>
                  </li>
                </ul>
              </div>
              {/* Top Right */}
              <div className="top-right pull-right clearfix">
                {/* Login Nav */}
                <ul className="login-nav">
                  <li>
                    <Link to="/login">Log In</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Header Upper */}
        <div className="header-upper">
          <div className="auto-container">
            <div className="clearfix">
              <div className="pull-left logo-box">
                <div className="logo">
                  <Link to="/">
                    <img src="images/logo.png" alt="" title="Bootcamp" />
                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <span className="icon flaticon-menu" />
                </div>
                {/* Main Menu */}
                <nav className="main-menu show navbar-expand-md">
                  <div className="navbar-header">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  <div
                    className="navbar-collapse collapse clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className="current dropdown">
                        <a href="#">Home</a>
                        <ul>
                          <li>
                            <Link to="/">Home Page 01</Link>
                          </li>
                          <li>
                            <Link to="/">Home Page 02</Link>
                          </li>
                          <li>
                            <Link to="/">Home Page 03</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Pages</a>
                        <ul>
                          <li>
                            <Link to="/pricing">Pricing</Link>
                          </li>
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/register">Register</Link>
                          </li>
                          <li>
                            <Link to="/privacy">Privacy Policy</Link>
                          </li>
                          <li>
                            <Link to="/comming-soon">Coming Soon</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Courses</a>
                        <ul>
                          <li>
                            <Link to="/courses">Courses As Grid</Link>
                          </li>
                          <li>
                            <Link to="/courses/course-list">
                              Courses As List
                            </Link>
                          </li>
                          <li>
                            <Link to="/courses/course-path">Course Topics</Link>
                          </li>
                          <li>
                            <Link to="/courses/course-lesson">
                              Course Lesson
                            </Link>
                          </li>
                          <li>
                            <Link to="/courses/course-detail">
                              Course Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Books</a>
                        <ul>
                          <li>
                            <Link to="/books">Books</Link>
                          </li>
                          <li>
                            <a href="/books-detail">Book Detail</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Profiles</a>
                        <ul>
                          <li>
                            <Link to="/intro-profile">Instructor Profile</Link>
                          </li>
                          <li>
                            <Link to="/student-profile">Student Profile</Link>
                          </li>
                          <li>
                            <Link to="profile/edit">Edit Profile</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Blog</a>
                        <ul>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link href="/blog/blog-detail">Blog Detail</Link>
                          </li>
                          <li>
                            <Link to="/error">Not Found / 404</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Links</a>
                        <ul>
                          <li>
                            <a href="https://www.wikipedia.org">Wikipedia</a>
                          </li>
                          <li>
                            <a href="https://www.education.com">Education</a>
                          </li>
                          <li>
                            <a href="https://www.theidioms.com">The Idioms</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Upper */}
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          <div className="close-btn">
            <span className="icon flaticon-multiply" />
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <Link to="/">
                <img src="images/logo-5.png" alt="" title />
              </Link>
            </div>
            <div className="menu-outer">
              {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
      </header>
      {/* End Main Header */}
    </>
  );
}
export default Header;
