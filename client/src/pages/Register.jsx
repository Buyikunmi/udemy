import React from "react";
import { Link } from "react-router-dom";

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
                            <Link href="/privacy">Terms &amp; Conditions</Link>
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
                      Already have an account? <Link to="/login">Sign In</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Login Section */}
    </div>
  );
}
export default Register;
