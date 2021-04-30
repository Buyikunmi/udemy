import React from "react";

const CourseList = ({
  duration,
  description,
  imgSource,
  level,
  lectures,
  name: title,
}) => {
  return (
    <div className="cource-block-three">
      <div className="inner-box">
        <div className="image">
          <a href="course-detail.html">
            <img src={imgSource} alt="" />
          </a>
        </div>
        <div className="content-box">
          <div className="box-inner">
            <h5>
              <a href="course-detail.html">{title}</a>
            </h5>
            <div className="text">{description}</div>
            <div className="clearfix">
              <div className="pull-left">
                <div className="level-box">
                  <span className="icon flaticon-settings-1" />
                  {`${level} Level`}
                </div>
              </div>
              <div className="pull-right clearfix">
                <div className="students">{`${lectures} lectures`}</div>
                <div className="hours">{`${duration} Hours`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
