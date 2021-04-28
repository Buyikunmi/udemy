/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function EditProfile() {
  return (
    <div>
      {/* Page Title */}
      <section className="page-title style-two">
        <div className="auto-container">
          <h1>Edit Profile</h1>
        </div>
      </section>
      {/*End Page Title*/}
      {/* Edit Profile Section */}
      <section className="edit-profile-section">
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
          <div className="row clearfix">
            {/* Image Section */}
            <div className="image-column col-lg-3 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image">
                  <img src="images/resource/student-2.jpg" alt="" />
                </div>
                <a href="#" className="theme-btn btn-style-three">
                  <span className="txt">
                    Upload Picture <i className="fa fa-angle-right" />
                  </span>
                </a>
                <a href="#" className="theme-btn btn-style-two">
                  <span className="txt">
                    Delete Picture <i className="fa fa-angle-right" />
                  </span>
                </a>
              </div>
            </div>
            {/* Content Section */}
            <div className="content-column col-lg-9 col-md-12 col-sm-12">
              <div className="inner-column">
                {/* Edit Profile Info Tabs*/}
                <div className="edit-profile-info-tabs">
                  {/* Profile Tabs*/}
                  <div className="edit-profile-tabs tabs-box">
                    {/*Tab Btns*/}
                    <ul className="tab-btns tab-buttons clearfix">
                      <li
                        data-tab="#prod-overview"
                        className="tab-btn active-btn"
                      >
                        Overview
                      </li>
                      <li data-tab="#prod-bookmark" className="tab-btn">
                        Bookmarks
                      </li>
                      <li data-tab="#prod-billing" className="tab-btn">
                        Billing
                      </li>
                      <li data-tab="#prod-setting" className="tab-btn">
                        Settings
                      </li>
                      <li data-tab="#prod-billing" className="tab-btn">
                        Billing
                      </li>
                      <li data-tab="#prod-setting" className="tab-btn">
                        Settings
                      </li>
                    </ul>
                    {/*Tabs Container*/}
                    <div className="tabs-content">
                      {/*Tab / Active Tab*/}
                      <div className="tab active-tab" id="prod-overview">
                        <div className="content">
                          {/* Title Box */}
                          <div className="title-box">
                            <h5>Edit Profile</h5>
                          </div>
                          {/* Profile Form */}
                          <div className="profile-form">
                            {/* Profile Form */}
                            <form method="post" action="blog.html">
                              <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="username"
                                    placeholder="First Name"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="username"
                                    placeholder="Last Name"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <select className="custom-select-box">
                                    <option>Member Type</option>
                                    <option>Member 01</option>
                                    <option>Member 02</option>
                                    <option>Member 03</option>
                                    <option>Member 04</option>
                                    <option>Member 05</option>
                                  </select>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <textarea
                                    className
                                    name="message"
                                    placeholder="Your Message"
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group text-right">
                                  <button
                                    className="theme-btn btn-style-two"
                                    type="submit"
                                    name="submit-form"
                                  >
                                    <span className="txt">
                                      Cancel <i className="fa fa-angle-right" />
                                    </span>
                                  </button>
                                  <button
                                    className="theme-btn btn-style-three"
                                    type="submit"
                                    name="submit-form"
                                  >
                                    <span className="txt">
                                      Save Change{" "}
                                      <i className="fa fa-angle-right" />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      {/* Tab */}
                      <div className="tab" id="prod-bookmark">
                        <div className="content">
                          {/* Title Box */}
                          <div className="title-box">
                            <h5>Edit Bookmark</h5>
                          </div>
                          {/* Profile Form */}
                          <div className="profile-form">
                            {/* Profile Form */}
                            <form method="post" action="blog.html">
                              <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="username"
                                    placeholder="First Name"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="username"
                                    placeholder="Last Name"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <select className="custom-select-box">
                                    <option>Member Type</option>
                                    <option>Member 01</option>
                                    <option>Member 02</option>
                                    <option>Member 03</option>
                                    <option>Member 04</option>
                                    <option>Member 05</option>
                                  </select>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <textarea
                                    className
                                    name="message"
                                    placeholder="Your Message"
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group text-right">
                                  <button
                                    className="theme-btn btn-style-two"
                                    type="submit"
                                    name="submit-form"
                                  >
                                    <span className="txt">
                                      Cancel <i className="fa fa-angle-right" />
                                    </span>
                                  </button>
                                  <button
                                    className="theme-btn btn-style-three"
                                    type="submit"
                                    name="submit-form"
                                  >
                                    <span className="txt">
                                      Save Change{" "}
                                      <i className="fa fa-angle-right" />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      {/* Tab */}
                      <div className="tab" id="prod-billing">
                        <div className="content">
                          {/* Title Box */}
                          <div className="title-box">
                            <h5>Edit Billing</h5>
                          </div>
                          {/* Profile Form */}
                          <div className="profile-form">
                            {/* Profile Form */}
                            <form method="post" action="blog.html">
                              <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="username"
                                    placeholder="First Name"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="username"
                                    placeholder="Last Name"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <select className="custom-select-box">
                                    <option>Member Type</option>
                                    <option>Member 01</option>
                                    <option>Member 02</option>
                                    <option>Member 03</option>
                                    <option>Member 04</option>
                                    <option>Member 05</option>
                                  </select>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <textarea
                                    className
                                    name="message"
                                    placeholder="Your Message"
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group text-right">
                                  <button
                                    className="theme-btn btn-style-two"
                                    type="submit"
                                    name="submit-form"
                                  >
                                    <span className="txt">
                                      Cancel <i className="fa fa-angle-right" />
                                    </span>
                                  </button>
                                  <button
                                    className="theme-btn btn-style-three"
                                    type="submit"
                                    name="submit-form"
                                  >
                                    <span className="txt">
                                      Save Change{" "}
                                      <i className="fa fa-angle-right" />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      {/* Tab */}
                      <div className="tab" id="prod-setting">
                        <div className="content">
                          {/* Title Box */}
                          <div className="title-box">
                            <h5>Edit Setting</h5>
                          </div>
                          {/* Profile Form */}
                          <div className="profile-form">
                            {/* Profile Form */}
                            <form method="post" action="blog.html">
                              <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="username"
                                    placeholder="First Name"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="username"
                                    placeholder="Last Name"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <select className="custom-select-box">
                                    <option>Member Type</option>
                                    <option>Member 01</option>
                                    <option>Member 02</option>
                                    <option>Member 03</option>
                                    <option>Member 04</option>
                                    <option>Member 05</option>
                                  </select>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <textarea
                                    className
                                    name="message"
                                    placeholder="Your Message"
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group text-right">
                                  <button
                                    className="theme-btn btn-style-two"
                                    type="submit"
                                    name="submit-form"
                                  >
                                    <span className="txt">
                                      Cancel <i className="fa fa-angle-right" />
                                    </span>
                                  </button>
                                  <button
                                    className="theme-btn btn-style-three"
                                    type="submit"
                                    name="submit-form"
                                  >
                                    <span className="txt">
                                      Save Change{" "}
                                      <i className="fa fa-angle-right" />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      {/* Tab */}
                      <div className="tab" id="prod-billing">
                        <div className="content">
                          {/* Title Box */}
                          <div className="title-box">
                            <h5>Edit Billing</h5>
                          </div>
                          {/* Profile Form */}
                          <div className="profile-form">
                            {/* Profile Form */}
                            <form method="post" action="blog.html">
                              <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="username"
                                    placeholder="First Name"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="username"
                                    placeholder="Last Name"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <select className="custom-select-box">
                                    <option>Member Type</option>
                                    <option>Member 01</option>
                                    <option>Member 02</option>
                                    <option>Member 03</option>
                                    <option>Member 04</option>
                                    <option>Member 05</option>
                                  </select>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <textarea
                                    className
                                    name="message"
                                    placeholder="Your Message"
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group text-right">
                                  <button
                                    className="theme-btn btn-style-two"
                                    type="submit"
                                    name="submit-form"
                                  >
                                    <span className="txt">
                                      Cancel <i className="fa fa-angle-right" />
                                    </span>
                                  </button>
                                  <button
                                    className="theme-btn btn-style-three"
                                    type="submit"
                                    name="submit-form"
                                  >
                                    <span className="txt">
                                      Save Change{" "}
                                      <i className="fa fa-angle-right" />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      {/* Tab */}
                      <div className="tab" id="prod-setting">
                        <div className="content">
                          {/* Title Box */}
                          <div className="title-box">
                            <h5>Edit Setting</h5>
                          </div>
                          {/* Profile Form */}
                          <div className="profile-form">
                            {/* Profile Form */}
                            <form method="post" action="blog.html">
                              <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="username"
                                    placeholder="First Name"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="username"
                                    placeholder="Last Name"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                  <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    required
                                  />
                                  <span className="icon flaticon-edit-1" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <select className="custom-select-box">
                                    <option>Member Type</option>
                                    <option>Member 01</option>
                                    <option>Member 02</option>
                                    <option>Member 03</option>
                                    <option>Member 04</option>
                                    <option>Member 05</option>
                                  </select>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                  <textarea
                                    className
                                    name="message"
                                    placeholder="Your Message"
                                    defaultValue={""}
                                  />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group text-right">
                                  <button
                                    className="theme-btn btn-style-two"
                                    type="submit"
                                    name="submit-form"
                                  >
                                    <span className="txt">
                                      Cancel <i className="fa fa-angle-right" />
                                    </span>
                                  </button>
                                  <button
                                    className="theme-btn btn-style-three"
                                    type="submit"
                                    name="submit-form"
                                  >
                                    <span className="txt">
                                      Save Change{" "}
                                      <i className="fa fa-angle-right" />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
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
      {/* End Profile Section */}
    </div>
  );
}

export default EditProfile;
