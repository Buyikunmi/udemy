import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      {/* Page Title */}
      <section className="page-title style-two">
        <div className="auto-container">
          <h1>Not Found</h1>
        </div>
      </section>
      {/*End Page Title*/}
      {/*Error Section*/}
      <section className="error-section">
        <div className="auto-container">
          <div className="content">
            <div className="image">
              <img src="images/resource/error.png" alt="" />
            </div>
            <Link to="/course" className="theme-btn btn-style-two">
              <span className="txt">
                Back to the homepage <i className="fa fa-angle-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/*End Error Section*/}
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
              <Link to="/course" className="theme-btn btn-style-one">
                <span className="txt">
                  Get Stared <i className="fa fa-angle-right" />
                </span>
              </Link>
              <Link to="/course" className="theme-btn btn-style-two">
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
  );
}

export default NotFound;
