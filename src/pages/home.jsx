import React, { useEffect, useRef, useState } from "react";
import { Card } from "../component/card";
import { Card1 } from "../component/card1";
import "./home.scss";
import au from "../assets/hpbd1.mp3";
import anh from "../assets/anh2.png";
import vd from "../assets/Happy.mp4";
export const Home = () => {
  const ref = useRef();
  const ref1 = useRef();
  console.log(ref);
  const [check, setCheck] = useState(false);
  return (
    <div className="container">
      {!check && (
        <div className="wrapp" id="wrap">
          <button
            onClick={(e) => {
              ref.current.play();
              ref1.current.play();
              setCheck(true);
            }}
          >
            Nhấn vào đây he :v
          </button>
        </div>
      )}
      <div className="header">CHÚC MỪNG SINH NHẬT</div>
      <div className="bottom">
        <audio autoPlay ref={ref}>
          <source src={au} />
        </audio>

        <div className="video">
          <video src={vd} ref={ref1} controls width="100%"></video>
        </div>
      </div>
      <div className="content-home">
        <div className="wrap-content">
          <Card1 />
        </div>
        <div className="wrap-content">
          <Card />
        </div>
        <div className="wrap-content">
          <img className="anh" src={anh} alt="" />
        </div>
      </div>
    </div>
  );
};
