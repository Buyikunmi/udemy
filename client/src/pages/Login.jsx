/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Login() {
  return (
    <div>
      {/* Page Title */}
      <section className="page-title">
        <div className="auto-container">
          <h1>Login</h1>
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
      {/* Login Section */}
      <section className="login-section">
        <div className="auto-container">
          <div className="login-box">
            {/* Title Box */}
            <div className="title-box">
              <h2>Login</h2>
              <div className="text">
                <span className="theme_color">Welcome!</span> Please confirm
                that you are visiting
              </div>
            </div>
            {/* Login Form */}
            <div className="styled-form">
              <form method="post" action="index.html">
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    name="username"
                    defaultValue
                    placeholder="User Name"
                    required
                  />
                </div>
                <div className="form-group">
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
                <div className="form-group">
                  <div className="clearfix">
                    <div className="pull-left">
                      <div className="check-box">
                        <input
                          type="checkbox"
                          name="remember-password"
                          id="type-1"
                        />
                        <label htmlFor="type-1">Remember Password</label>
                      </div>
                    </div>
                    <div className="pull-right">
                      <a href="#" className="forgot">
                        Forget Password?
                      </a>
                    </div>
                  </div>
                </div>
                <div className="form-group text-center">
                  <button type="button" className="theme-btn btn-style-three">
                    <span className="txt">
                      Login <i className="fa fa-angle-right" />
                    </span>
                  </button>
                </div>
                <div className="form-group">
                  <div className="users">
                    New User? <a href="register.html">Sign Up</a>
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

export default Login;
