import React from "react";

function Pricing() {
  return (
    <div>
      {/* Page Title */}
      <section className="page-title">
        <div className="auto-container">
          <h1>Pricing</h1>
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
      {/* Pricing Section */}
      <section className="pricing-section price-page-section">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title style-two centered">
            <h2>Plans &amp; Pricing</h2>
            <div className="text">
              There are many variations of passages of Lorem Ipsum available,
            </div>
          </div>
          <div className="pricing-tabs tabs-box">
            {/* Tab Btns */}
            <ul className="tab-buttons clearfix">
              <li data-tab="#prod-monthly" className="tab-btn active-btn">
                Monthly
              </li>
              <li data-tab="#prod-yearly" className="tab-btn">
                Annually
              </li>
            </ul>
            {/*Tabs Container*/}
            <div className="tabs-content">
              {/*Tab*/}
              <div className="tab active-tab" id="prod-monthly">
                <div className="content">
                  <div className="row clearfix">
                    {/* Price Block */}
                    <div className="price-block style-two col-lg-4 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="icon-box">
                          <span className="icon">
                            <img
                              src="images/resource/price-icon-4.png"
                              alt=""
                            />
                          </span>
                        </div>
                        <h3>Basic</h3>
                        <div className="text">
                          Replenish him third creature and meat of the blessed
                          void good a fruit
                        </div>
                        <a
                          href="course.html"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Start Plan</span>
                        </a>
                        <div className="price">
                          $14.99 <span>Per month</span>
                        </div>
                      </div>
                    </div>
                    {/* Price Block */}
                    <div className="price-block style-two col-lg-4 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="icon-box">
                          <span className="icon">
                            <img
                              src="images/resource/price-icon-5.png"
                              alt=""
                            />
                          </span>
                        </div>
                        <h3>Standard</h3>
                        <div className="text">
                          Replenish him third creature and meat of the blessed
                          void good a fruit
                        </div>
                        <a
                          href="course.html"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Start Plan</span>
                        </a>
                        <div className="price">
                          $29.99 <span>Per month</span>
                        </div>
                      </div>
                    </div>
                    {/* Price Block */}
                    <div className="price-block style-two col-lg-4 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="icon-box">
                          <span className="icon">
                            <img
                              src="images/resource/price-icon-6.png"
                              alt=""
                            />
                          </span>
                        </div>
                        <h3>Premium</h3>
                        <div className="text">
                          Replenish him third creature and meat of the blessed
                          void good a fruit
                        </div>
                        <a
                          href="course.html"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Start Plan</span>
                        </a>
                        <div className="price">
                          $49.99 <span>Per month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Tab*/}
              <div className="tab" id="prod-yearly">
                <div className="content">
                  <div className="row clearfix">
                    {/* Price Block */}
                    <div className="price-block style-two col-lg-4 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="icon-box">
                          <span className="icon">
                            <img
                              src="images/resource/price-icon-4.png"
                              alt=""
                            />
                          </span>
                        </div>
                        <h3>Basic</h3>
                        <div className="text">
                          Replenish him third creature and meat of the blessed
                          void good a fruit
                        </div>
                        <a
                          href="course.html"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Start Plan</span>
                        </a>
                        <div className="price">
                          $14.99 <span>Per month</span>
                        </div>
                      </div>
                    </div>
                    {/* Price Block */}
                    <div className="price-block style-two col-lg-4 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="icon-box">
                          <span className="icon">
                            <img
                              src="images/resource/price-icon-5.png"
                              alt=""
                            />
                          </span>
                        </div>
                        <h3>Standard</h3>
                        <div className="text">
                          Replenish him third creature and meat of the blessed
                          void good a fruit
                        </div>
                        <a
                          href="course.html"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Start Plan</span>
                        </a>
                        <div className="price">
                          $24.99 <span>Per month</span>
                        </div>
                      </div>
                    </div>
                    {/* Price Block */}
                    <div className="price-block style-two col-lg-4 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="icon-box">
                          <span className="icon">
                            <img
                              src="images/resource/price-icon-6.png"
                              alt=""
                            />
                          </span>
                        </div>
                        <h3>Premium</h3>
                        <div className="text">
                          Replenish him third creature and meat of the blessed
                          void good a fruit
                        </div>
                        <a
                          href="course.html"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Start Plan</span>
                        </a>
                        <div className="price">
                          $49.99 <span>Per month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Pricing Section */}
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
export default Pricing;
