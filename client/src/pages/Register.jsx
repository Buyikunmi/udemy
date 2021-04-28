import React from "react";

function Register() {
  return (
    <div>
      {/* Page Title */}
      <section className="page-title">
        <div className="auto-container">
          <h1>Register</h1>
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
      {/* Register Section */}
      <section className="register-section">
        <div className="auto-container">
          <div className="register-box">
            {/* Title Box */}
            <div className="title-box">
              <h2>Register</h2>
              <div className="text">
                <span className="theme_color">Welcome!</span> Please confirm
                that you are visiting
              </div>
            </div>
            {/* Login Form */}
            <div className="styled-form">
              <form method="post" action="index.html">
                <div className="row clearfix">
                  {/* Form Group */}
                  <div className="form-group col-lg-6 col-md-12 col-sm-12">
                    <label>First Name</label>
                    <input
                      type="text"
                      name="username"
                      defaultValue
                      placeholder="First Name"
                      required
                    />
                  </div>
                  {/* Form Group */}
                  <div className="form-group col-lg-6 col-md-12 col-sm-12">
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="username"
                      defaultValue
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  {/* Form Group */}
                  <div className="form-group col-lg-6 col-md-12 col-sm-12">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      defaultValue
                      placeholder="abcd@gmail.com"
                      required
                    />
                  </div>
                  {/* Form Group */}
                  <div className="form-group col-lg-6 col-md-12 col-sm-12">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      defaultValue
                      placeholder="+1 (800) 123-4567"
                      required
                    />
                  </div>
                  {/* Form Group */}
                  <div className="form-group col-lg-6 col-md-12 col-sm-12">
                    <label>Password</label>
                    <span className="eye-icon flaticon-eye" />
                    <input
                      type="password"
                      name="password"
                      defaultValue
                      placeholder="Password"
                      required
                    />
                  </div>
                  {/* Form Group */}
                  <div className="form-group col-lg-6 col-md-12 col-sm-12">
                    <label>Confirm Password</label>
                    <span className="eye-icon flaticon-eye" />
                    <input
                      type="password"
                      name="password"
                      defaultValue
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <div className="row clearfix">
                      {/* Column */}
                      <div className="column col-lg-3 col-md-4 col-sm-12">
                        <div className="radio-box">
                          <input
                            type="radio"
                            name="remember-password"
                            id="type-1"
                          />
                          <label htmlFor="type-1">Male</label>
                        </div>
                      </div>
                      {/* Column */}
                      <div className="column col-lg-3 col-md-4 col-sm-12">
                        <div className="radio-box">
                          <input
                            type="radio"
                            name="remember-password"
                            id="type-2"
                          />
                          <label htmlFor="type-2">Female</label>
                        </div>
                      </div>
                      {/* Column */}
                      <div className="column col-lg-3 col-md-4 col-sm-12">
                        <div className="radio-box">
                          <input
                            type="radio"
                            name="remember-password"
                            id="type-3"
                          />
                          <label htmlFor="type-3">Others</label>
                        </div>
                      </div>
                      {/* Column */}
                      <div className="column col-lg-12 col-md-12 col-sm-12">
                        <div className="check-box">
                          <input
                            type="checkbox"
                            name="remember-password"
                            id="type-4"
                          />
                          <label htmlFor="type-4">
                            I agree the user agreement and{" "}
                            <a href="privacy.html">Terms &amp; Conditions</a>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12 text-center">
                    <button type="button" className="theme-btn btn-style-three">
                      <span className="txt">
                        Sign Up <i className="fa fa-angle-right" />
                      </span>
                    </button>
                  </div>
                  <div className="form-group col-lg-12 col-md-12 col-sm-12">
                    <div className="users">
                      Already have an account? <a href="login.html">Sign In</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Login Section */}
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
export default Register;
