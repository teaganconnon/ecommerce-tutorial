import React from "react";
import ManGolfer from "../../assets/mangolfing.jpg";
import LadyGolfer from "../../assets/ladygolfing.jpg";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${LadyGolfer})` }}>
          <a>Shop Womens</a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${ManGolfer})` }}>
          <a>Shop Mens</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
