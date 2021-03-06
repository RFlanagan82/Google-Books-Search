import React from "react";
import "./NoBookCard.css";

const NoBookCard = (props) => {
  return (
    <div className="col-sm-12 text-center">
      <div className={props.className}>
        <div className="col-md-12">
          <div className="card-body text-center">
            <h5 className="card-title">{props.message}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoBookCard;