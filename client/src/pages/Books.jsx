/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Preloader from "./static/Preloader";

function Books() {
  return (
    <div>
      <Preloader />
      {/* Page Title */}
      <section className="page-title">
        <div className="auto-container">
          <h1>Books</h1>
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
      {/* Books Page Section */}
      <section className="books-page-section">
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
            <h2>Category</h2>
          </div>
          <div className="row clearfix">
            {/* Category Section */}
            <div className="category-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Books Info Tabs*/}
                <div className="books-info-tabs">
                  {/* Books Tabs*/}
                  <div className="books-tabs tabs-box">
                    {/*Tab Btns*/}
                    <ul className="tab-btns tab-buttons clearfix">
                      <li data-tab="#prod-html" className="tab-btn active-btn">
                        HTML
                      </li>
                      <li data-tab="#prod-ui" className="tab-btn">
                        UI/ UX
                      </li>
                      <li data-tab="#prod-javascript" className="tab-btn">
                        JavaScript
                      </li>
                      <li data-tab="#prod-coding" className="tab-btn">
                        Coding
                      </li>
                      <li data-tab="#prod-typography" className="tab-btn">
                        Typography
                      </li>
                    </ul>
                    {/*Tabs Container*/}
                    <div className="tabs-content">
                      {/*Tab / Active Tab*/}
                      <div className="tab active-tab" id="prod-html">
                        <div className="content">
                          <div className="row clearfix">
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-1.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-1.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Don’t make me think
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-2.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-2.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      101 Design Methods
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-3.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-3.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Lean UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-4.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-4.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      The Elements of UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-5.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-5.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Designed for Use
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-6.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-6.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Design of Everyday
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-7.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-7.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Undercover UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-8.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-8.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Interaction Design
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-1.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-1.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Don’t make me think
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-2.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-2.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      101 Design Methods
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-3.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-3.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Lean UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-4.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-4.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      The Elements of UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Tab */}
                      <div className="tab" id="prod-ui">
                        <div className="content">
                          <div className="row clearfix">
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-1.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-1.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Don’t make me think
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-2.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-2.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      101 Design Methods
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-3.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-3.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Lean UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-4.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-4.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      The Elements of UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-5.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-5.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Designed for Use
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-6.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-6.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Design of Everyday
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-7.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-7.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Undercover UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-8.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-8.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Interaction Design
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-1.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-1.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Don’t make me think
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-2.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-2.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      101 Design Methods
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-3.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-3.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Lean UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-4.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-4.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      The Elements of UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Tab */}
                      <div className="tab" id="prod-javascript">
                        <div className="content">
                          <div className="row clearfix">
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-1.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-1.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Don’t make me think
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-2.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-2.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      101 Design Methods
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-3.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-3.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Lean UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-4.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-4.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      The Elements of UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-5.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-5.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Designed for Use
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-6.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-6.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Design of Everyday
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-7.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-7.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Undercover UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-8.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-8.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Interaction Design
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-1.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-1.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Don’t make me think
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-2.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-2.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      101 Design Methods
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-3.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-3.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Lean UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-4.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-4.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      The Elements of UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Tab */}
                      <div className="tab" id="prod-coding">
                        <div className="content">
                          <div className="row clearfix">
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-1.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-1.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Don’t make me think
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-2.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-2.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      101 Design Methods
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-3.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-3.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Lean UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-4.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-4.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      The Elements of UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-5.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-5.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Designed for Use
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-6.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-6.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Design of Everyday
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-7.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-7.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Undercover UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-8.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-8.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Interaction Design
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-1.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-1.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Don’t make me think
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-2.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-2.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      101 Design Methods
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-3.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-3.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Lean UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-4.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-4.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      The Elements of UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Tab */}
                      <div className="tab" id="prod-typography">
                        <div className="content">
                          <div className="row clearfix">
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-1.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-1.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Don’t make me think
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-2.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-2.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      101 Design Methods
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-3.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-3.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Lean UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-4.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-4.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      The Elements of UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-5.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-5.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Designed for Use
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-6.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-6.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Design of Everyday
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-7.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-7.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Undercover UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-8.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-8.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Interaction Design
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-1.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-1.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Don’t make me think
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-2.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-2.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      101 Design Methods
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-3.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-3.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      Lean UX
                                    </Link>
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* Book Block */}
                            <div className="book-block col-lg-3 col-md-4 col-sm-12">
                              <div className="inner-box">
                                <figure className="image-box">
                                  <img
                                    src="images/resource/book-4.jpg"
                                    alt=""
                                  />
                                  {/* Overlay Box */}
                                  <div className="overlay-box">
                                    <div className="overlay-inner">
                                      <div className="content">
                                        <Link
                                          to="/books/books-detail"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </Link>
                                        <Link
                                          to="images/resource/book-4.jpg"
                                          data-fancybox="books"
                                          data-caption
                                          className="link"
                                        >
                                          <span className="icon flaticon-full-screen" />
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </figure>
                                <div className="lower-box">
                                  <h6>
                                    <Link to="/books/books-detail">
                                      The Elements of UX
                                    </Link>
                                  </h6>
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
                      <Link to="#">
                        <span className="fa fa-angle-left" />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">1</Link>
                    </li>
                    <li>
                      <Link to="#">2</Link>
                    </li>
                    <li className="active">
                      <Link to="#">3</Link>
                    </li>
                    <li>
                      <Link to="#">4</Link>
                    </li>
                    <li>
                      <Link to="#">5</Link>
                    </li>
                    <li>
                      <Link to="#">6</Link>
                    </li>
                    <li>
                      <Link to="#">7</Link>
                    </li>
                    <li>
                      <Link to="#">8</Link>
                    </li>
                    <li className="next">
                      <Link to="#">
                        <span className="fa fa-angle-right" />{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Widgets Section */}
            <div className="widgets-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <h5>Popular Books</h5>
                <div className="widgets-outer">
                  {/* Book Widget */}
                  <div className="book-widget">
                    <div className="widget-inner">
                      <div className="image">
                        <Link to="/books/books-detail">
                          <img src="images/resource/book-9.jpg" alt="" />
                        </Link>
                      </div>
                      <Link className="tag" to="/books/books-detail">
                        <span className="fa fa-bookmark-o" />
                      </Link>
                      <h6>
                        <Link to="/books/books-detail">
                          Don’t Make Me <br /> Think
                        </Link>
                      </h6>
                      <div className="author">By Steve Krug</div>
                    </div>
                  </div>
                  {/* Book Widget */}
                  <div className="book-widget">
                    <div className="widget-inner">
                      <div className="image">
                        <Link to="/books/books-detail">
                          <img src="images/resource/book-10.jpg" alt="" />
                        </Link>
                      </div>
                      <Link className="tag" to="/books/books-detail">
                        <span className="fa fa-bookmark-o" />
                      </Link>
                      <h6>
                        <Link to="/books/books-detail">
                          Essential of <br /> Interaction Design
                        </Link>
                      </h6>
                      <div className="author">By Alan Cooper</div>
                    </div>
                  </div>
                  {/* Book Widget */}
                  <div className="book-widget">
                    <div className="widget-inner">
                      <div className="image">
                        <Link to="/books/books-detail">
                          <img src="images/resource/book-11.jpg" alt="" />
                        </Link>
                      </div>
                      <Link className="tag" to="/books/books-detail">
                        <span className="fa fa-bookmark-o" />
                      </Link>
                      <h6>
                        <Link to="/books/books-detail">
                          Non Designers <br /> Design Book
                        </Link>
                      </h6>
                      <div className="author">By Robin Williams</div>
                    </div>
                  </div>
                  {/* Book Widget */}
                  <div className="book-widget">
                    <div className="widget-inner">
                      <div className="image">
                        <Link to="/books/books-detail">
                          <img src="images/resource/book-12.jpg" alt="" />
                        </Link>
                      </div>
                      <Link className="tag" to="/books/books-detail">
                        <span className="fa fa-bookmark-o" />
                      </Link>
                      <h6>
                        <Link to="/books/books-detail">
                          Sketching User <br /> Experience
                        </Link>
                      </h6>
                      <div className="author">By Bill Buxton</div>
                    </div>
                  </div>
                  {/* Book Widget */}
                  <div className="book-widget">
                    <div className="widget-inner">
                      <div className="image">
                        <Link to="/books/books-detail">
                          <img src="images/resource/book-13.jpg" alt="" />
                        </Link>
                      </div>
                      <Link className="tag" to="/books/books-detail">
                        <span className="fa fa-bookmark-o" />
                      </Link>
                      <h6>
                        <Link to="/books/books-detail">
                          Rocket Surgery <br /> Made Easy
                        </Link>
                      </h6>
                      <div className="author">By Steve Krug</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Related Projects */}
        <div className="related-projects">
          <div className="auto-container">
            <div className="sec-title">
              <h2>All Courses by Stephane</h2>
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
                          <Link to="/books/books-detail" className="link">
                            <span className="icon fa fa-link" />
                          </Link>
                          <Link
                            to="images/resource/book-14.jpg"
                            data-fancybox="books"
                            data-caption
                            className="link"
                          >
                            <span className="icon flaticon-full-screen" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </figure>
                  <div className="lower-box">
                    <h6>
                      <Link to="/books/books-detail">Don’t make me think</Link>
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
                          <Link to="/books/books-detail" className="link">
                            <span className="icon fa fa-link" />
                          </Link>
                          <Link
                            to="images/resource/book-15.jpg"
                            data-fancybox="books"
                            data-caption
                            className="link"
                          >
                            <span className="icon flaticon-full-screen" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </figure>
                  <div className="lower-box">
                    <h6>
                      <Link to="/books/books-detail">Design of Everyday</Link>
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
                          <Link to="/books/books-detail" className="link">
                            <span className="icon fa fa-link" />
                          </Link>
                          <Link
                            to="images/resource/book-16.jpg"
                            data-fancybox="books"
                            data-caption
                            className="link"
                          >
                            <span className="icon flaticon-full-screen" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </figure>
                  <div className="lower-box">
                    <h6>
                      <Link to="/books/books-detail">Undercover UX Design</Link>
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
                          <Link to="/books/books-detail" className="link">
                            <span className="icon fa fa-link" />
                          </Link>
                          <Link
                            to="images/resource/book-17.jpg"
                            data-fancybox="books"
                            data-caption
                            className="link"
                          >
                            <span className="icon flaticon-full-screen" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </figure>
                  <div className="lower-box">
                    <h6>
                      <Link to="/books/books-detail">Interaction Design</Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Books Page Section */}
    </div>
  );
}

export default Books;
