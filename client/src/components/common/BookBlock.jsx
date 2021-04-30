import React from "react";

const BookBlock = ({ imgSource, name: title }) => {
  return (
    <>
      {/* Book Block */}
      <div className="book-block col-lg-3 col-md-4 col-sm-12">
        <div className="inner-box">
          <figure className="image-box">
            <img src={imgSource} alt="" />
            {/* Overlay Box */}
            <div className="overlay-box">
              <div className="overlay-inner">
                <div className="content">
                  <a href="books-detail.html" className="link">
                    <span className="icon fa fa-link" />
                  </a>
                  <a
                    href={imgSource}
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
              <a href="books-detail.html">{title}</a>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookBlock;
