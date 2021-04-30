/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function BookDetail() {
  return (
    <div>
      {/* Books Detail Section */}
      <section className="books-detail-section">
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
          <div className="row clearfix">
            {/* Info Section */}
            <div className="info-column col-lg-4 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image">
                  <img src="images/resource/book-18.jpg" alt="" />
                </div>
                <ul className="book-info">
                  <li>
                    Published Date: <span>20 March 2020</span>
                  </li>
                  <li>
                    Downloaded: <span>125 Times</span>
                  </li>
                </ul>
                <a href="#" className="theme-btn btn-style-three">
                  <span className="txt">
                    Add To Cart <i className="fa fa-angle-right" />
                  </span>
                </a>
                <a href="#" className="theme-btn btn-style-two">
                  <span className="txt">
                    Buy Now <i className="fa fa-angle-right" />
                  </span>
                </a>
              </div>
            </div>
            {/* Content Section */}
            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-column">
                <h2>Don’t Make Me Think</h2>
                <div className="author">By Steve Krug</div>
                <h4>Description</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper <br /> Nam liber tempor cum
                  soluta nobis eleifend option congue nihil imperdiet doming id
                  quod mazim placerat facer possim assum. Lorem ipsum dolor sit
                  amet, consectetuer adipiscing elit, sed diam nonummy nibh
                  euismod quis nostrud exerci tation ullamcorper tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                  minim veniam, quis nostrud exerci tation ullamcorper suscipit
                  lobortis nisl ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  mazim placerat facer possim assum. Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit, sed diam nonummy nibh euismod
                  tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                  wisi enim ad minim veniam,suscipit lobortis nisl ut aliquip ex
                  ea commodo consequat
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper
                </p>
                <h5>Book Information</h5>
                <ul className="book-info">
                  <li>
                    Page Count: <span>252</span>
                  </li>
                  <li>
                    Word Count: <span>49568</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Books Page Section */}
      {/* Call To Action Section Two */}
    </div>
  );
}

export default BookDetail;
