import React from "react";

const CourseGrid = ({
  name: title,
  imgSource,
  description,
  lectures,
  duration,
}) => {
  return (
    <div className="cource-block-two col-lg-4 col-md-6 col-sm-12">
      <div className="inner-box">
        <div className="image">
          <a href="course-detail.html">
            <img src={imgSource} alt="" />
          </a>
        </div>
        <div className="lower-content">
          <h5>
            <a href="course-detail.html">{title}</a>
          </h5>
          <div className="text">{description}</div>
          <div className="clearfix">
            <div className="pull-left">
              <div className="students">{`${lectures} lectures`}</div>
            </div>
            <div className="pull-right">
              <div className="hours">{`${duration} Hours`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseGrid;
