import React from "react";

const PriceBlock = ({ name, description, price, chargePeriod, imgSource }) => {
  return (
    <div className="price-block style-two col-lg-4 col-md-6 col-sm-12">
      <div className="inner-box">
        <div className="icon-box">
          <span className="icon">
            <img src={imgSource} alt="" />
          </span>
        </div>
        <h3>{name}</h3>
        <div className="text">{description}</div>
        <a href="course.html" className="theme-btn btn-style-eight">
          <span className="txt">Start Plan</span>
        </a>
        <div className="price">
          {price}
          <span>Per {chargePeriod}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceBlock;
