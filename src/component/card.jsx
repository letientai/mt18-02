import React from "react";
import "./card.scss";

import bg from "../assets/screen.png";
import avt from "../assets/avt.jpg";

export const Card = () => {
  return (
    <div className="wrap">
      <div className="card">
        <div className="flip-card-front">
          <div className="wrap-card">
            <img src={bg} alt="" />
          </div>
          <div className="content">
            <div className="avatar">
              <img src={avt} alt="" />
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="wrap-card">
            <img src={bg} alt="" />
          </div>
          <div className="content">
            <div className="text">
              Count your life by smiles, not tears. May the joy that you have
              spread in the past come back to you on this day. Sending you
              smiles for every moment of your special day…Have a wonderful time
              and a very happy birthday!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
