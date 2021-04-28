/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Books() {
  return (
    <div>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-1.jpg"
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
                                    <a href="books-detail.html">
                                      Don’t make me think
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-2.jpg"
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
                                    <a href="books-detail.html">
                                      101 Design Methods
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-3.jpg"
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
                                    <a href="books-detail.html">Lean UX</a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-4.jpg"
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
                                    <a href="books-detail.html">
                                      The Elements of UX
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-5.jpg"
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
                                    <a href="books-detail.html">
                                      Designed for Use
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-6.jpg"
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
                                    <a href="books-detail.html">
                                      Design of Everyday
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-7.jpg"
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
                                    <a href="books-detail.html">
                                      Undercover UX
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-8.jpg"
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
                                    <a href="books-detail.html">
                                      Interaction Design
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-1.jpg"
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
                                    <a href="books-detail.html">
                                      Don’t make me think
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-2.jpg"
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
                                    <a href="books-detail.html">
                                      101 Design Methods
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-3.jpg"
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
                                    <a href="books-detail.html">Lean UX</a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-4.jpg"
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
                                    <a href="books-detail.html">
                                      The Elements of UX
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-1.jpg"
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
                                    <a href="books-detail.html">
                                      Don’t make me think
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-2.jpg"
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
                                    <a href="books-detail.html">
                                      101 Design Methods
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-3.jpg"
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
                                    <a href="books-detail.html">Lean UX</a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-4.jpg"
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
                                    <a href="books-detail.html">
                                      The Elements of UX
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-5.jpg"
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
                                    <a href="books-detail.html">
                                      Designed for Use
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-6.jpg"
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
                                    <a href="books-detail.html">
                                      Design of Everyday
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-7.jpg"
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
                                    <a href="books-detail.html">
                                      Undercover UX
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-8.jpg"
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
                                    <a href="books-detail.html">
                                      Interaction Design
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-1.jpg"
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
                                    <a href="books-detail.html">
                                      Don’t make me think
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-2.jpg"
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
                                    <a href="books-detail.html">
                                      101 Design Methods
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-3.jpg"
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
                                    <a href="books-detail.html">Lean UX</a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-4.jpg"
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
                                    <a href="books-detail.html">
                                      The Elements of UX
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-1.jpg"
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
                                    <a href="books-detail.html">
                                      Don’t make me think
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-2.jpg"
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
                                    <a href="books-detail.html">
                                      101 Design Methods
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-3.jpg"
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
                                    <a href="books-detail.html">Lean UX</a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-4.jpg"
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
                                    <a href="books-detail.html">
                                      The Elements of UX
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-5.jpg"
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
                                    <a href="books-detail.html">
                                      Designed for Use
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-6.jpg"
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
                                    <a href="books-detail.html">
                                      Design of Everyday
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-7.jpg"
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
                                    <a href="books-detail.html">
                                      Undercover UX
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-8.jpg"
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
                                    <a href="books-detail.html">
                                      Interaction Design
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-1.jpg"
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
                                    <a href="books-detail.html">
                                      Don’t make me think
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-2.jpg"
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
                                    <a href="books-detail.html">
                                      101 Design Methods
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-3.jpg"
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
                                    <a href="books-detail.html">Lean UX</a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-4.jpg"
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
                                    <a href="books-detail.html">
                                      The Elements of UX
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-1.jpg"
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
                                    <a href="books-detail.html">
                                      Don’t make me think
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-2.jpg"
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
                                    <a href="books-detail.html">
                                      101 Design Methods
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-3.jpg"
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
                                    <a href="books-detail.html">Lean UX</a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-4.jpg"
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
                                    <a href="books-detail.html">
                                      The Elements of UX
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-5.jpg"
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
                                    <a href="books-detail.html">
                                      Designed for Use
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-6.jpg"
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
                                    <a href="books-detail.html">
                                      Design of Everyday
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-7.jpg"
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
                                    <a href="books-detail.html">
                                      Undercover UX
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-8.jpg"
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
                                    <a href="books-detail.html">
                                      Interaction Design
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-1.jpg"
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
                                    <a href="books-detail.html">
                                      Don’t make me think
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-2.jpg"
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
                                    <a href="books-detail.html">
                                      101 Design Methods
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-3.jpg"
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
                                    <a href="books-detail.html">Lean UX</a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-4.jpg"
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
                                    <a href="books-detail.html">
                                      The Elements of UX
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-1.jpg"
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
                                    <a href="books-detail.html">
                                      Don’t make me think
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-2.jpg"
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
                                    <a href="books-detail.html">
                                      101 Design Methods
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-3.jpg"
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
                                    <a href="books-detail.html">Lean UX</a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-4.jpg"
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
                                    <a href="books-detail.html">
                                      The Elements of UX
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-5.jpg"
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
                                    <a href="books-detail.html">
                                      Designed for Use
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-6.jpg"
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
                                    <a href="books-detail.html">
                                      Design of Everyday
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-7.jpg"
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
                                    <a href="books-detail.html">
                                      Undercover UX
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-8.jpg"
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
                                    <a href="books-detail.html">
                                      Interaction Design
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-1.jpg"
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
                                    <a href="books-detail.html">
                                      Don’t make me think
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-2.jpg"
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
                                    <a href="books-detail.html">
                                      101 Design Methods
                                    </a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-3.jpg"
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
                                    <a href="books-detail.html">Lean UX</a>
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
                                        <a
                                          href="books-detail.html"
                                          className="link"
                                        >
                                          <span className="icon fa fa-link" />
                                        </a>
                                        <a
                                          href="images/resource/book-4.jpg"
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
                                    <a href="books-detail.html">
                                      The Elements of UX
                                    </a>
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
            {/* Widgets Section */}
            <div className="widgets-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <h5>Popular Books</h5>
                <div className="widgets-outer">
                  {/* Book Widget */}
                  <div className="book-widget">
                    <div className="widget-inner">
                      <div className="image">
                        <a href="books-detail.html">
                          <img src="images/resource/book-9.jpg" alt="" />
                        </a>
                      </div>
                      <a className="tag" href="books-detail.html">
                        <span className="fa fa-bookmark-o" />
                      </a>
                      <h6>
                        <a href="books-detail.html">
                          Don’t Make Me <br /> Think
                        </a>
                      </h6>
                      <div className="author">By Steve Krug</div>
                    </div>
                  </div>
                  {/* Book Widget */}
                  <div className="book-widget">
                    <div className="widget-inner">
                      <div className="image">
                        <a href="books-detail.html">
                          <img src="images/resource/book-10.jpg" alt="" />
                        </a>
                      </div>
                      <a className="tag" href="books-detail.html">
                        <span className="fa fa-bookmark-o" />
                      </a>
                      <h6>
                        <a href="books-detail.html">
                          Essential of <br /> Interaction Design
                        </a>
                      </h6>
                      <div className="author">By Alan Cooper</div>
                    </div>
                  </div>
                  {/* Book Widget */}
                  <div className="book-widget">
                    <div className="widget-inner">
                      <div className="image">
                        <a href="books-detail.html">
                          <img src="images/resource/book-11.jpg" alt="" />
                        </a>
                      </div>
                      <a className="tag" href="books-detail.html">
                        <span className="fa fa-bookmark-o" />
                      </a>
                      <h6>
                        <a href="books-detail.html">
                          Non Designers <br /> Design Book
                        </a>
                      </h6>
                      <div className="author">By Robin Williams</div>
                    </div>
                  </div>
                  {/* Book Widget */}
                  <div className="book-widget">
                    <div className="widget-inner">
                      <div className="image">
                        <a href="books-detail.html">
                          <img src="images/resource/book-12.jpg" alt="" />
                        </a>
                      </div>
                      <a className="tag" href="books-detail.html">
                        <span className="fa fa-bookmark-o" />
                      </a>
                      <h6>
                        <a href="books-detail.html">
                          Sketching User <br /> Experience
                        </a>
                      </h6>
                      <div className="author">By Bill Buxton</div>
                    </div>
                  </div>
                  {/* Book Widget */}
                  <div className="book-widget">
                    <div className="widget-inner">
                      <div className="image">
                        <a href="books-detail.html">
                          <img src="images/resource/book-13.jpg" alt="" />
                        </a>
                      </div>
                      <a className="tag" href="books-detail.html">
                        <span className="fa fa-bookmark-o" />
                      </a>
                      <h6>
                        <a href="books-detail.html">
                          Rocket Surgery <br /> Made Easy
                        </a>
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
      {/* End Books Page Section */}
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

export default Books;
