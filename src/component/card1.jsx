import React from "react";
import "./card.scss";

import bg from "../assets/screen.png";
import avt from "../assets/avt.jpg";

export const Card1 = () => {
  return (
    <div className="wrap">
        <div className="card-front">
          <div className="wrap-card">
            <img src={bg} alt="" />
          </div>
          <div className="content">
            <div className="text">
            Chúc Thảo có một ngày sinh nhật thật đáng nhớ, cuộc sống phải luôn luôn vui vẻ, tràn đầy năng lượng nhé :v, chúc những điều may mắn sẽ đến với Thảo. chúc Thảo sẽ thành công trên con đường mà mình đã chọn. Happy birthday💝
            </div>
          </div>
        </div>
    </div>
  );
};
