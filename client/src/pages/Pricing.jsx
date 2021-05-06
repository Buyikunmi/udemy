import React from "react";
import { Link } from "react-router-dom";

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
                        <Link
                          to="/courses"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Start Plan</span>
                        </Link>
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
                        <Link
                          to="/courses"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Start Plan</span>
                        </Link>
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
                        <Link
                          to="/courses"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Start Plan</span>
                        </Link>
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
                        <Link
                          to="/courses"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Start Plan</span>
                        </Link>
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
                        <Link
                          to="/courses"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Start Plan</span>
                        </Link>
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
                        <Link
                          to="/courses"
                          className="theme-btn btn-style-eight"
                        >
                          <span className="txt">Start Plan</span>
                        </Link>
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
    </div>
  );
}
export default Pricing;
