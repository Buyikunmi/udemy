/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="page-wrapper">
        {/* Banner Section */}
        <section className="banner-section">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(images/background/1.png)" }}
          />
          <div className="auto-container">
            {/* Content Boxed */}
            <div className="content-boxed">
              <div className="inner-column">
                <h1>
                  Learn Math, Science, English and Test <br /> Prep from our
                  Experts
                </h1>
                <div className="buttons-box">
                  <Link to="/courses" className="theme-btn btn-style-one">
                    <span className="txt">
                      Get Stared <i className="fa fa-angle-right" />
                    </span>
                  </Link>
                  <Link to="/courses" className="theme-btn btn-style-two">
                    <span className="txt">
                      All Courses <i className="fa fa-angle-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Image Boxed */}
            <div className="image titlt" data-tilt data-tilt-max={4}>
              <a
                href="images/resource/banner.png"
                data-fancybox="banner"
                data-caption
                className
              >
                <img src="images/resource/banner.png" alt="" />
              </a>
            </div>
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
        {/* End Banner Section */}
        {/* Education Section */}
        <section className="education-section">
          <div
            className="patern-layer-one paroller"
            data-paroller-factor="0.60"
            data-paroller-factor-lg="0.20"
            data-paroller-type="foreground"
            data-paroller-direction="vertical"
            style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
          />
          <div
            className="patern-layer-two paroller"
            data-paroller-factor="0.60"
            data-paroller-factor-lg="-0.20"
            data-paroller-type="foreground"
            data-paroller-direction="vertical"
            style={{ backgroundImage: "url(images/icons/icon-2.png)" }}
          />
          <div className="auto-container">
            <div className="row clearfix">
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column parallax-scene-1">
                  <div className="image parallax-layer" data-depth="0.30">
                    <img src="images/resource/education.png" alt="" />
                  </div>
                </div>
              </div>
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <h2>
                    Our education system <br /> works for you
                  </h2>
                  <div className="text">
                    Replenish him third creature and meat blessed void a fruit
                    gathered you’re, they’re two waters own morning gathered
                    greater shall had behold had seed.
                  </div>
                  <Link to="/courses" className="theme-btn btn-style-two">
                    <span className="txt">
                      Learn More <i className="fa fa-angle-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Education Section */}
        {/* Courses Section */}
        <section className="courses-section">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Title Column */}
              <div className="title-column col-lg-4 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Sec Title */}
                  <div className="sec-title">
                    <h2>Our top courses</h2>
                    <div className="text">
                      Replenish him third creature and meat blessed void a fruit
                      gathered you’re, they’re two waters own morning gathered.
                    </div>
                  </div>
                  <Link to="/courses" className="theme-btn btn-style-three">
                    <span className="txt">
                      Get Stared <i className="fa fa-angle-right" />
                    </span>
                  </Link>
                </div>
              </div>
              {/* Cource Block */}
              <div className="cource-block col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="courses/course-detail">
                      <img src="images/resource/course-1.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <div className="clearfix">
                      <div className="pull-left">
                        <h5>
                          <Link to="courses/course-detail">
                            Computer Science
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
                      <img src="images/resource/course-2.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <div className="clearfix">
                      <div className="pull-left">
                        <h5>
                          <Link to="courses/course-detail">Data Science</Link>
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
                          <Link to="courses/course-detail">
                            Language Course
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
                      <img src="images/resource/course-5.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <div className="clearfix">
                      <div className="pull-left">
                        <h5>
                          <Link to="courses/course-detail">
                            Business Course
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
            </div>
          </div>
        </section>
        {/* End Courses Section */}
        {/* Call To Action Section */}
        <section className="call-to-action-section">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Title Column */}
              <div className="title-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Sec Title */}
                  <div className="sec-title">
                    <h2>
                      Live the experience <br /> learn at your own pace
                    </h2>
                    <div className="text">
                      Replenish him third creature and meat blessed void a fruit
                      gathered you’re, they’re two waters.
                    </div>
                  </div>
                </div>
              </div>
              {/* Form Column */}
              <div className="form-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="help">For Help?</div>
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
            </div>
          </div>
        </section>
        {/* End Call To Action Section */}
        {/* Video Section */}
        <section
          className="video-section"
          style={{ backgroundImage: "url(images/background/2.jpg)" }}
        >
          <div className="auto-container">
            <a
              href="https://www.youtube.com/watch?v=kxPCFljwJws"
              className="lightbox-image video-box"
            >
              <span className="fa fa-play">
                <i className="ripple" />
              </span>
            </a>
            <h4>Watch Intro Video</h4>
          </div>
        </section>
        {/* End Video Section */}
        {/* Achievement Section */}
        <section className="achievements-section">
          <div className="auto-container">
            {/* Sec Title */}
            <div className="sec-title centered">
              <h2>Our achievements</h2>
              <div className="text">
                Replenish him third creature and meat blessed void a fruit
                gathered you’re, they’re <br /> two waters own morning gathered
                greater shall had behold had seed.
              </div>
            </div>
            {/* Fact Counter */}
            <div className="fact-counter">
              <div className="row clearfix">
                {/* Column */}
                <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon-box">
                        <span className="icon flaticon-course" />
                      </div>
                      <h4 className="counter-title">Total Courses</h4>
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed={2000}
                          data-stop={50}
                        >
                          0
                        </span>
                        +
                      </div>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon-box">
                        <span className="icon flaticon-course-1" />
                      </div>
                      <h4 className="counter-title">Total Student</h4>
                      <div className="count-outer count-box alternate">
                        <span
                          className="count-text"
                          data-speed={3000}
                          data-stop={45}
                        >
                          0
                        </span>
                        K+
                      </div>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="inner wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="content">
                      <div className="icon-box">
                        <span className="icon flaticon-world" />
                      </div>
                      <h4 className="counter-title">Global Position</h4>
                      <div className="count-outer count-box">
                        <span
                          className="count-text"
                          data-speed={4000}
                          data-stop={115}
                        >
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Achievement Section */}
        {/* Fluid Section One */}
        <section className="fluid-section-one">
          <div
            className="patern-layer-one paroller"
            data-paroller-factor="0.60"
            data-paroller-factor-lg="0.20"
            data-paroller-type="foreground"
            data-paroller-direction="vertical"
            style={{ backgroundImage: "url(images/icons/icon-1.png)" }}
          />
          <div className="outer-container clearfix">
            {/* Image Column */}
            <div
              className="image-column"
              style={{ backgroundImage: "url(images/resource/image-1.jpg)" }}
            >
              <figure className="image-box">
                <img src="images/resource/image-1.jpg" alt="" />
              </figure>
            </div>
            {/* Content Column */}
            <div className="content-column">
              <div className="inner-column">
                <div className="clearfix">
                  <div className="pull-left">
                    <h2>Upcoming events</h2>
                  </div>
                  <div className="pull-right">
                    <Link to="courses/course-detail" className="events">
                      All Events
                    </Link>
                  </div>
                </div>
                {/* Blocks Outer */}
                <div className="blocks-outer">
                  {/* Event Block */}
                  <div className="event-block">
                    <div className="inner-box">
                      <div className="clearfix">
                        {/* Event Date */}
                        <div className="event-date clearfix">
                          <span className="date">21</span>JAN 2020
                        </div>
                        {/* Event List */}
                        <ul className="event-list">
                          <li>
                            <Link to="courses/course-detail">
                              ART &amp; DESIGN
                            </Link>
                          </li>
                          <li>
                            <Link to="courses/course-detail">PAINTING</Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link to="courses/course-detail">
                          Workshop on UI/ UX
                        </Link>
                      </h3>
                    </div>
                  </div>
                  {/* Event Block */}
                  <div className="event-block">
                    <div className="inner-box">
                      <div className="clearfix">
                        {/* Event Date */}
                        <div className="event-date clearfix">
                          <span className="date">15</span>Mar 2020
                        </div>
                        {/* Event List */}
                        <ul className="event-list">
                          <li>
                            <Link to="courses/course-detail">
                              ART &amp; DESIGN
                            </Link>
                          </li>
                          <li>
                            <Link to="courses/course-detail">PAINTING</Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link to="courses/course-detail">
                          Amsterdam art weekend
                        </Link>
                      </h3>
                    </div>
                  </div>
                  {/* Event Block */}
                  <div className="event-block">
                    <div className="inner-box">
                      <div className="clearfix">
                        {/* Event Date */}
                        <div className="event-date clearfix">
                          <span className="date">21</span>mar 2020
                        </div>
                        {/* Event List */}
                        <ul className="event-list">
                          <li>
                            <Link to="courses/course-detail">
                              ART &amp; DESIGN
                            </Link>
                          </li>
                          <li>
                            <Link to="courses/course-detail">PAINTING</Link>
                          </li>
                        </ul>
                      </div>
                      <h3>
                        <Link to="courses/course-detail">
                          Outside fashion - Group exhibition
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* News Section */}
        <section className="news-section">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Title Column */}
              <div className="title-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Sec Title */}
                  <div className="sec-title">
                    <h2>Our Latest blog posts</h2>
                    <div className="text">
                      Replenish him third creature and meat blessed void a fruit
                      gathered you’re, they’re two waters own morning gathered
                      greater shall had behold had seed.
                    </div>
                  </div>
                  <Link to="/courses" className="theme-btn btn-style-three">
                    <span className="txt">
                      All Blog Post <i className="fa fa-angle-right" />
                    </span>
                  </Link>
                </div>
              </div>
              {/* News Column */}
              <div className="news-block col-lg-6 col-md-12 col-sm-12">
                <div className="inner-box">
                  <div className="image">
                    <Link to="/blog">
                      <img src="images/resource/news-1.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="lower-content">
                    <h3>
                      <Link to="/blog">To apply signal detection theory</Link>
                    </h3>
                    <div className="text">
                      Replenish him third creature and meat blessed void a fruit
                      gathered you’re, they’re two waters
                    </div>
                    <Link to="/blog" className="read-more">
                      Continue Reading
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End News Section */}
        {/* Testimonial Section */}
        <section className="testimonial-section">
          <div className="auto-container">
            {/* Sec Title */}
            <div className="sec-title centered">
              <h2>Students &amp; Parents Opinion</h2>
            </div>
            {/* Authors Box */}
            <div className="authors-box">
              <div className="author-one">
                <img src="images/resource/author-2.jpg" alt="" />
              </div>
              <div className="author-two">
                <img src="images/resource/author-3.jpg" alt="" />
              </div>
              <div className="author-three">
                <img src="images/resource/author-4.jpg" alt="" />
              </div>
              <div className="author-four">
                <img src="images/resource/author-5.jpg" alt="" />
              </div>
              <div className="author-five">
                <img src="images/resource/author-6.jpg" alt="" />
              </div>
              <div className="author-six">
                <img src="images/resource/author-7.jpg" alt="" />
              </div>
              <div className="author-seven">
                <img src="images/resource/author-8.jpg" alt="" />
              </div>
              <div className="author-eight">
                <img src="images/resource/author-9.jpg" alt="" />
              </div>
            </div>
            <div className="single-item-carousel owl-carousel owl-theme">
              {/* Testimonial Block Two */}
              <div className="testimonial-block">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="quote-icon flaticon-quote-5" />
                    <div className="image">
                      <img src="images/resource/author-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="text">
                    Replenish him third creature and meat blessed void a fruit
                    gathered you’re, they’re two waters own morning gathered
                    greater shall had behold had seed. Contrary to popular
                    belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making
                    it
                  </div>
                </div>
              </div>
              {/* Testimonial Block Two */}
              <div className="testimonial-block">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <img src="images/resource/author-5.jpg" alt="" />
                    </div>
                  </div>
                  <div className="text">
                    Replenish him third creature and meat blessed void a fruit
                    gathered you’re, they’re two waters own morning gathered
                    greater shall had behold had seed. Contrary to popular
                    belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making
                    it
                  </div>
                </div>
              </div>
              {/* Testimonial Block Two */}
              <div className="testimonial-block">
                <div className="inner-box">
                  <div className="image-box">
                    <div className="image">
                      <img src="images/resource/author-5.jpg" alt="" />
                    </div>
                  </div>
                  <div className="text">
                    Replenish him third creature and meat blessed void a fruit
                    gathered you’re, they’re two waters own morning gathered
                    greater shall had behold had seed. Contrary to popular
                    belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classical Latin literature from 45 BC, making
                    it
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Testimonial Section */}
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
                <Link to="/courses" className="theme-btn btn-style-one">
                  <span className="txt">
                    Get Stared <i className="fa fa-angle-right" />
                  </span>
                </Link>
                <Link to="/courses" className="theme-btn btn-style-two">
                  <span className="txt">
                    All Courses <i className="fa fa-angle-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* End Call To Action Section Two */}
      </div>
      {/*End pagewrapper*/}
      {/*Scroll to top*/}
      <div className="scroll-to-top scroll-to-target" data-target="html">
        <span className="fa fa-arrow-circle-up" />
      </div>
    </div>
  );
}

export default Home;
